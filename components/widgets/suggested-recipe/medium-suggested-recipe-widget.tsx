import tw from '@/lib/tailwind';
import HeaderWidgetWrapper from '@/components/header-widget-wrapper';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Text, View } from 'react-native';
import { Image } from 'expo-image';
import React from 'react';
import WidgetBase from '@/components/widgets/widget-base';

export default function MediumSuggestedRecipeWidget() {
  return (
    <WidgetBase
      title='Suggested recipe'
      icon={
        <Ionicons
          name='restaurant' //this is only a placeholder, the actual icon is different
          size={20}
          color={tw.color('black/50')}
        />
      }
    >
      <View style={tw`flex-row items-center`}>
        <Image
          source={require('@/assets/images/sarmale.png')}
          style={tw`mr-4 h-24 w-24 rounded-2xl`}
        />
        <View style={tw`flex-1`}>
          <Text style={tw`text-base font-bold text-black/70`}>
            Sarmale de post
          </Text>
          <Text style={tw`text-sm font-bold text-black/60`}>
            by Jamila Cuisine
          </Text>
          <Text style={tw`text-black/45 pt-2 text-[12px] font-bold`}>
            350kcal | 20g protein
          </Text>
          <Text style={tw`text-black/45 text-[12px] font-bold`}>
            7g fat | 100g carbs
          </Text>
        </View>
      </View>
    </WidgetBase>
  );
}
