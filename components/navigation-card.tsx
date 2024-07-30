import { ImageBackground, Pressable, Text, View } from 'react-native';
import React from 'react';
import tw from '@/lib/tailwind';
import Ionicons from '@expo/vector-icons/Ionicons';
import { androidRipple } from '@/lib/util';

const image = require('../assets/images/color-blur.png');

export default function NavigationCard({
  text1,
  text2,
  onPress
}: {
  text1: string;
  text2: string;
  onPress: () => void;
}) {
  return (
    <View style={tw`overflow-hidden rounded-[32px]`}>
      <Pressable
        onPress={onPress}
        android_ripple={androidRipple}
        style={({ pressed }) =>
          tw.style(
            `w-full flex-row overflow-hidden rounded-[32px]`,
            pressed && `ios:opacity-80`
          )
        }
      >
        <ImageBackground
          resizeMode='stretch'
          source={image}
          imageStyle={tw`opacity-50`}
          style={tw`grow flex-row justify-between py-4 pl-6 pr-4`}
        >
          <View style={tw`grow justify-center`}>
            <Text style={tw`text-base font-bold leading-tight text-black/60`}>
              {text1}
            </Text>
            <Text style={tw`text-base font-bold leading-tight text-black/60`}>
              {text2}
            </Text>
          </View>
          <View style={tw`justify-center rounded-full bg-black/50 px-4 py-2`}>
            <Ionicons
              name={'arrow-forward'}
              size={30}
              color={tw.color('white')}
            />
          </View>
        </ImageBackground>
      </Pressable>
    </View>
  );
}
