import tw from 'twrnc';
import { Text, View, ScrollView, ImageBackground } from 'react-native';
import React from 'react';

type RecipeProps = {
    name: string;
    author: string;
}

export default function RecipePage({ name = 'Sarmale romanesti', author = 'Jamila Cuisine' }: RecipeProps) {

  return (
    <>
      <ScrollView style={tw`bg-cyan-50`}>
        <View style={tw`bg-red-200`}>
          <ImageBackground source={require('../assets/images/sarmale.png')} style={tw`w-full h-full px-4`} resizeMode="cover">
            <Text style={tw`pt-19 text-3xl text-white font-black`}>{name}</Text>
            <Text style={tw`pb-12 text-lg text-white font-black`}>By {author}</Text>
          </ImageBackground>
        </View>
        <View style={tw`flex gap-1.5 px-4`}>
          <Text style={tw`pt-12 text-xl font-black`}>Ingredients</Text>

          <View style={tw`block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow bg-gray-200`}>
            <View style={tw`mb-2 text-lg text-gray-500`}>Ingredient 1</View>
          </View>

          <View style={tw`block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow bg-gray-200`}>
            <View style={tw`mb-2 text-lg text-gray-500`}>Ingredient 2</View>
          </View>

          <View style={tw`block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow bg-gray-200`}>
            <View style={tw`mb-2 text-lg text-gray-500`}>Ingredient 3</View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
