import { Stack } from 'expo-router';
import { Platform } from 'react-native';

export default function Layout() {
  return (
    <>
      <Stack>
        <Stack.Screen
          name='account'
          options={{
            presentation: Platform.OS === 'ios' ? 'transparentModal' : 'modal',
            contentStyle: {
              backgroundColor:
                Platform.OS === 'ios'
                  ? 'rgba(0, 0, 0, 0.65)'
                  : 'rgba(0, 0, 0, 1)'
            },
            headerShown: false,
            animation: 'ios'
          }}
        />
      </Stack>
    </>
  );
}
