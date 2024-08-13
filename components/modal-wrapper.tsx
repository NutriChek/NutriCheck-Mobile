import React, { ReactNode } from 'react';
import { Platform, View } from 'react-native';
import { BlurView } from 'expo-blur';
import tw from '@/lib/tailwind';

export default function ModalWrapper({ children }: { children: ReactNode }) {
  return Platform.OS === 'ios' ? (
    <BlurView style={tw`flex-1`} intensity={70}>
      {children}
    </BlurView>
  ) : (
    <View style={tw`flex-1 bg-black`}>{children}</View>
  );
}
