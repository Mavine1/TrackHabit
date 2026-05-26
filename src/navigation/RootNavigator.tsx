import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebase';
import { useAuthStore } from '../store/authStore';
import { AuthStack } from './AuthStack';
import { MainTabs } from './MainTabs';
import { SplashScreen1, SplashScreen2, SplashScreen3 } from '../screens';
export const RootNavigator = () => {
  const { user, setUser, setLoading } = useAuthStore();
  const [splashIndex, setSplashIndex] = useState(0);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  // Show 3 splash screens sequentially
  if (splashIndex < 3) {
    const SplashComponent = [SplashScreen1, SplashScreen2, SplashScreen3][splashIndex];
    return <SplashComponent onFinish={() => setSplashIndex(splashIndex + 1)} />;
  }

  return (
    <NavigationContainer>
      {user ? <MainTabs /> : <AuthStack />}
    </NavigationContainer>
  );
};