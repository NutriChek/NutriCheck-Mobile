import { Redirect, Stack } from 'expo-router';
import { Platform } from 'react-native';
import { useSession } from '@/context/auth-context';
import LoadingView from '@/components/loading-view';

export default function Layout() {
  const { session, isLoading } = useSession();

  if (isLoading) {
    return <LoadingView />;
  }

  if (!session) {
    return <Redirect href='/sign-in' />;
  }

  return (
    <Stack>
      <Stack.Screen name='(home)' options={{ headerShown: false }} />
      <Stack.Screen name='recipe' options={{ headerShown: false }} />
      <Stack.Screen
        name='modals'
        options={{
          presentation: Platform.OS === 'ios' ? 'transparentModal' : 'modal',
          headerShown: false,
          animation: Platform.OS === 'ios' ? 'default' : 'fade_from_bottom'
        }}
      />
    </Stack>
  );
}
