import React from 'react';
import tw from '@/lib/tailwind';
import { Pressable, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Oauth() {
  return (
    <View>
      <Text
        style={tw`self-center pb-5 pt-8 text-[12px] font-bold text-black/50`}
      >
        or continue with
      </Text>
      <View style={tw`flex-row`}>
        <Pressable style={tw`px-6`}>
          <Ionicons
            name='logo-facebook'
            size={40}
            color={tw.color('black/50')}
          />
        </Pressable>

        <Pressable style={tw`px-6`}>
          <Ionicons name='logo-apple' size={40} color={tw.color('black/50')} />
        </Pressable>
        <Pressable style={tw`px-6`}>
          <Ionicons name='logo-google' size={40} color={tw.color('black/50')} />
        </Pressable>
      </View>
    </View>
  );
}
