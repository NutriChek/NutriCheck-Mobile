import { Stack } from 'expo-router';
import { SessionProvider } from '@/context/auth-context';
import { useDeviceContext } from 'twrnc';
import tw from '@/lib/tailwind';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { useFonts } from 'expo-font';

export default function Root() {
  const [loaded, error] = useFonts({
    'brand': require('../assets/fonts/brand.ttf')
  });

  useDeviceContext(tw);

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  // Set up the auth context and render our layout inside of it.
  return (
    <SessionProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </SessionProvider>
  );
}
