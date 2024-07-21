import { ImageBackground, Pressable, Text, View } from 'react-native';
import React from 'react';
import tw from '@/lib/tailwind';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';

const image = require('../assets/images/color-blur.png');

export default function NavigationCard({
  text1,
  text2,
  goto
}: {
  text1: string;
  text2: string;
  goto: string;
}) {
  return (
    <Pressable
      onPress={() => {
        router.replace(goto);
      }}
      style={tw`flex-row overflow-hidden rounded-[32px]`}
    >
      <ImageBackground
        resizeMode='stretch'
        source={image}
        imageStyle={tw`opacity-50`}
        style={tw`grow flex-row justify-between py-4 pl-6 pr-4`}
      >
        <View style={tw`flex-1 justify-center`}>
          <Text style={tw`text-base font-bold leading-tight text-black/60`}>
            {text1}
          </Text>
          <Text style={tw`text-base font-bold leading-tight text-black/60`}>
            {text2}
          </Text>
        </View>
        <Pressable
          onPress={() => {
            router.replace(goto);
          }}
          style={tw`justify-center rounded-full bg-black/50 px-4 py-2`}
        >
          <Ionicons
            name={'arrow-forward-outline'}
            size={30}
            color={tw.color('white')}
          />
        </Pressable>
      </ImageBackground>
    </Pressable>
  );
}
