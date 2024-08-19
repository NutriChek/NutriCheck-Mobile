import { Stack } from 'expo-router';
import { SessionProvider } from '@/context/auth-context';
import { useDeviceContext } from 'twrnc';
import tw from '@/lib/tailwind';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Toast, { ToastConfig } from 'react-native-toast-message';
import { Text } from 'react-native';
import { BlurView } from 'expo-blur';

const toastConfig: ToastConfig = {
  customToast: ({ text1, text2 }: { text1?: string; text2?: string }) => {
    return (
      <BlurView
        intensity={100}
        style={tw`android:bg-white w-11/12 overflow-hidden rounded-2xl bg-white/50 px-3 py-2`}
      >
        <Text style={tw`text-lg font-medium text-black/80`}>{text1}</Text>
        <Text style={tw`text-sm font-light text-black/40`}>{text2}</Text>
      </BlurView>
    );
  }
};

export default function Root() {
  const [loaded, error] = useFonts({
    brand: require('../assets/fonts/brand.ttf')
  });

  const queryClient = new QueryClient();

  useDeviceContext(tw);

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <Stack screenOptions={{ headerShown: false }} />
        <Toast config={toastConfig} />
      </SessionProvider>
    </QueryClientProvider>
  );
}
