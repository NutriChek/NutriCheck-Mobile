import { Stack } from 'expo-router';
import { Platform } from 'react-native';

export default function Layout() {
  return (
    <>
      <Stack>
        <Stack.Screen name='(home)' options={{ headerShown: false }} />
        <Stack.Screen
          name='modals'
          options={{
            presentation: Platform.OS === 'ios' ? 'transparentModal' : 'modal',
            headerShown: false
          }}
        />
      </Stack>
    </>
  );
}
