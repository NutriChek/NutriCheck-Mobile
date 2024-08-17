import { Tabs } from 'expo-router';
import HomeHeader from '@/components/home-header';
import React from 'react';
import { Platform, StatusBar } from 'react-native';
import IOSMeshGradient from '@/components/ios-mesh-gradient';
import TabBar from '@/components/tab-bar';

export default function Layout() {
  return (
    <>
      <Tabs
        sceneContainerStyle={{
          backgroundColor: 'transparent'
        }}
        tabBar={(props) => <TabBar {...props} />}
      >
        <Tabs.Screen
          name='index'
          options={{
            headerTransparent: true,
            header: () => <HomeHeader text='Good morning, Alex' />
          }}
        />
        <Tabs.Screen
          name='ai'
          options={{
            headerTransparent: true,
            header: () => <HomeHeader text='Cook AI' />
          }}
        />
        <Tabs.Screen
          name='recipes'
          options={{
            headerTransparent: true,
            header: () => <HomeHeader text='Recipes' />
          }}
        />
        <Tabs.Screen
          name='goals'
          options={{
            headerTransparent: true,
            header: () => <HomeHeader text='Your goals' />
          }}
        />
      </Tabs>
      <StatusBar barStyle='light-content' />
      {/*{Platform.OS !== 'ios' && <BackgroundSvg />}*/}
      {Platform.OS === 'ios' && +Platform.Version >= 18.0 && (
        <IOSMeshGradient />
      )}
    </>
  );
}
