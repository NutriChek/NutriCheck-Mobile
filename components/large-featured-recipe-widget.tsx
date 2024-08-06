import { ImageBackground, Text, View } from 'react-native';
import tw from '@/lib/tailwind';
import { SymbolView } from 'expo-symbols';
import { rgbaToHex } from '@/lib/util';
import { MaterialIcons } from 'expo-vector-icons';
import React from 'react';
const image = require('../assets/images/sarmale.png');

export default function LargeFeaturedRecipeWidget() {
  return (
    <View style={tw`flex-1 overflow-hidden rounded-3xl`}>
      <ImageBackground resizeMode='cover' source={image} style={tw`h-60`}>
        <View style={tw`flex-1 justify-end p-6`}>
          <View style={tw`flex-row items-center`}>
            <SymbolView
              name='star.circle.fill'
              resizeMode='scaleAspectFill'
              weight='semibold'
              size={20}
              tintColor={rgbaToHex(tw.color('white/80') as string)}
              fallback={
                <MaterialIcons
                  name='star'
                  size={20}
                  color={tw.color('white/80')}
                />
              }
            />
            <Text style={tw`pl-2 text-lg font-bold text-white`}>
              Ask Cook AI
            </Text>
          </View>
          <Text style={tw`text-3xl font-bold text-white`}>Sarmale de post</Text>
          <Text style={tw`text-lg font-bold text-white`}>by Jamila Cuisine</Text>
        </View>
      </ImageBackground>
    </View>
  );
}