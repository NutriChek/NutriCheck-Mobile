import { Pressable, View, Text, ImageBackground } from 'react-native';
import React from 'react';
import tw from '@/lib/tailwind';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
const image = require('../assets/images/bg-button.png');

export default function NavigationCard({ text1, text2, goto }: { text1: string, text2:string, goto:string }) {
  return (
    <Pressable onPress={() => {router.replace(goto)}} style={tw`flex-row rounded-full `}>
      <ImageBackground
        resizeMode='stretch'
        source={image}
        imageStyle={tw`rounded-[30px]`}
        style={tw`flex-row rounded-full py-5 w-full justify-between`}
      >
        <View style={tw`flex-1`}>
            <Text style={tw`leading-tight pl-8 text-black/60 font-bold text-base`}>{text1}</Text>
            <Text style={tw`leading-tight  pl-8 text-black/60 font-bold text-base`}>{text2}</Text>
        </View>
        <View style={tw`pr-8`}>
            <Pressable onPress={() => {router.replace(goto)}} style={tw`bg-black/50 rounded-full justify-center `}>
            <Ionicons
                style={tw`px-5 py-2`}
                name={'arrow-forward-outline'}
                size={30}
                color={tw.color('white')}
            />
            </Pressable>
        </View>
      </ImageBackground>
    </Pressable>
  );
}
