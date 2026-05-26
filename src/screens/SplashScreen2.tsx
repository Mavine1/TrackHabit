import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const SPLASH_URL = 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800';

export const SplashScreen1 = ({ onFinish }: { onFinish: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onFinish, 2000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <View style={styles.container}>
      <Image source={{ uri: SPLASH_URL }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#2e7d32' },
  image: { width: '100%', height: '100%', resizeMode: 'cover' },
});