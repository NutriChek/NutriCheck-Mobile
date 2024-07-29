import { ImageBackground, Pressable, Text, View } from 'react-native';
import React from 'react';
import tw from '@/lib/tailwind';
import Ionicons from '@expo/vector-icons/Ionicons';
import { androidRipple } from '@/lib/util';

const image = require('../assets/images/color-blur.png');

export default function SuggestionCard({
  text,
  onPress
}: {
  text: string;
  onPress: () => void;
}) {
  return (
    <View style={tw`overflow-hidden rounded-[20px] pt-3`}>
      <Pressable
        onPress={onPress}
        android_ripple={androidRipple}
        style={({ pressed }) =>
          tw.style(
            `w-full flex-row overflow-hidden rounded-[20px]`,
            pressed && `ios:opacity-80`
          )
        }
      >
        <ImageBackground
          resizeMode='stretch'
          source={image}
          style={tw`grow flex-row justify-between py-4 pl-6 pr-4 align-baseline`}
        >
          <View style={tw`grow justify-center w-8 h-5`}>
            <Text style={tw`flex-wrap font-bold text-sm leading-tight text-black/60`}>
              {text}
            </Text>
          </View>
          <View style={tw`justify-center rounded-full bg-black/60 px-4 py-0.5 h-7.5`}>
            <Ionicons
              name={'arrow-forward'}
              size={25}
              color={tw.color('white')}
            />
          </View>
        </ImageBackground>
      </Pressable>
    </View>
  );
}
