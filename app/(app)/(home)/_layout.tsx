import { Tabs } from 'expo-router';
import HomeHeader from '@/components/home-header';

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name='index' options={{ headerTransparent: true, header: () => <HomeHeader /> }} />
    </Tabs>
  );
}
