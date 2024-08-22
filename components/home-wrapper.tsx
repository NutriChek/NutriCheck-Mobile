import React, { ReactNode } from 'react';
import { ImageBackground, Platform, View } from 'react-native';
import tw from '@/lib/tailwind';
import { Style } from 'twrnc';

const image = require('@/assets/images/home-background.png');

const HomeWrapper = ({
  children,
  style,
  imageStyle
}: {
  children: ReactNode;
  style?: Style;
  imageStyle?: Style;
}) => {
  if (Platform.OS === 'ios' && +Platform.Version >= 18.0) {
    return <View style={tw.style('flex-1', style)}>{children}</View>;
  }

  return (
    <View style={tw.style(`grow bg-black`, style)}>
      <ImageBackground
        resizeMode='cover'
        source={image}
        style={tw`grow`}
        imageStyle={tw.style(imageStyle)}
      >
        {children}
      </ImageBackground>
    </View>
  );
  // return <View style={tw`bg-transparent`}>{children}</View>;
};

export default HomeWrapper;
