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
          style={tw`grow flex-row items-center justify-between py-4 pl-6 pr-4`}
        >
          <Text
            style={tw`text-[#2C2C2C]/74 flex-1 flex-wrap text-xs font-bold leading-tight`}
          >
            {text}
          </Text>
          <View
            style={tw`h-24px w-45px justify-center rounded-full bg-black/60 px-3`}
          >
            <Ionicons
              name={'arrow-forward'}
              size={20}
              color={tw.color('white')}
            />
          </View>
        </ImageBackground>
      </Pressable>
    </View>
  );
}
