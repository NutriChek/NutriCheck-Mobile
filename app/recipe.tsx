import tw from 'twrnc';
import { Text, View, ScrollView, ImageBackground } from 'react-native';
import React from 'react';
import CookAI from '@/components/cook-ai';

type RecipeProps = {
    name: string;
    author: string;
}

export default function RecipePage({ name = 'Sarmale romanesti', author = 'Jamila Cuisine' }: RecipeProps) {

  return (
    <>
      <ScrollView style={tw`bg-white`}>
        <ImageBackground source={require('../assets/images/sarmale.png')} style={tw`w-full h-[657px] justify-end tailwind('flex-1')`} resizeMode="cover">
          <View style={tw`styles.overlay px-4 backdrop-blur`}>
            <Text style={tw`pt-19 text-3xl font-semibold text-white`}>{name}</Text>
            <Text style={tw`pb-12 text-lg text-white`}>By {author}</Text>
          </View>
        </ImageBackground>
       
        <View style={tw`flex px-4 pt-4 pb-12 gap-5`}>

          <CookAI/>

          <Text style={tw`pt-3 text-xl font-bold`}>Ingredients</Text>

          <View style={tw`gap-3`}>
            <View style={tw`block h-18 p-6 rounded-[20px] bg-[#F4F4F4]`}>
              <View style={tw`mb-2 text-lg text-gray-500`}></View>
            </View>

            <View style={tw`block h-18 p-6 rounded-[20px] bg-[#F4F4F4]`}>
              <View style={tw`mb-2 text-lg text-gray-500`}></View>
            </View>

            <View style={tw`block h-18 p-6 rounded-[20px] bg-[#F4F4F4]`}>
              <View style={tw`mb-2 text-lg text-gray-500`}></View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
