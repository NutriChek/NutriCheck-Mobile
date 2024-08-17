import React, { ReactNode } from 'react';
import { ImageBackground, Platform, View } from 'react-native';
import tw from '@/lib/tailwind';

const image = require('@/assets/images/home-background.png');

const HomeWrapper = ({ children }: { children: ReactNode }) => {
  if (Platform.OS === 'ios' && +Platform.Version >= 18.0) {
    return <View>{children}</View>;
  }

  return (
    <View style={tw`grow bg-[#2E2E2E]`}>
      <ImageBackground resizeMode='cover' source={image} style={tw`grow`}>
        {children}
      </ImageBackground>
    </View>
  );
  // return <View style={tw`bg-transparent`}>{children}</View>;
};

export default HomeWrapper;