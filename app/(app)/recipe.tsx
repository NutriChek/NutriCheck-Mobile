import tw from 'twrnc';
import { ImageBackground, ScrollView, Text, View } from 'react-native';
import React from 'react';
import CookAI from '@/components/cook-ai';

type RecipeProps = {
  name: string;
  author: string;
};

export default function RecipePage({
  name = 'Sarmale romanesti',
  author = 'Jamila Cuisine'
}: RecipeProps) {
  return (
    <>
      <ScrollView style={tw`bg-white`}>
        <ImageBackground
          source={require('../../assets/images/sarmale.png')}
          style={tw`tailwind('flex-1') h-[657px] w-full justify-end`}
          resizeMode='cover'
        >
          <View style={tw`styles.overlay px-4 backdrop-blur`}>
            <Text style={tw`pt-19 text-3xl font-semibold text-white`}>
              {name}
            </Text>
            <Text style={tw`pb-12 text-lg text-white`}>By {author}</Text>
          </View>
        </ImageBackground>

        <View style={tw`flex gap-5 px-4 pb-12 pt-4`}>
          <CookAI />

          <Text style={tw`pt-3 text-xl font-bold`}>Ingredients</Text>

          <View style={tw`gap-3`}>
            <View style={tw`h-18 block rounded-[20px] bg-[#F4F4F4] p-6`}>
              <View style={tw`mb-2 text-lg text-gray-500`}></View>
            </View>

            <View style={tw`h-18 block rounded-[20px] bg-[#F4F4F4] p-6`}>
              <View style={tw`mb-2 text-lg text-gray-500`}></View>
            </View>

            <View style={tw`h-18 block rounded-[20px] bg-[#F4F4F4] p-6`}>
              <View style={tw`mb-2 text-lg text-gray-500`}></View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
