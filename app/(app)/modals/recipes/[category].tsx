import { useLocalSearchParams } from 'expo-router';
import tw from '@/lib/tailwind';
import { ScrollView, Text } from 'react-native';
import React from 'react';
import { router } from 'expo-router';
import ModalHeader from '@/components/modal-header';
import ModalWrapper from '@/components/modal-wrapper';
import KeyboardAccessory from '@/components/keyboard-accessory';
import RecipeCard from '@/components/recipe-card';

const titles = {
  liked: 'Your liked recipes',
  top: 'Top recipes this week',
  featured: 'Featured recipes',
  season: 'Recipes for this season'
};

export default function ViewRecipes() {
  const params = useLocalSearchParams();
  const category = params.category as 'liked' | 'top' | 'featured' | 'season';

  const recipes = [
    {
      title: 'Sarmale de post',
      cookingTime: '20m',
      kcal: 300,
      likes: 120,
      image: require('../../../../assets/images/sarmale.png')
    },
    {
      title: 'Salam de biscuiti',
      cookingTime: '1h',
      kcal: 480,
      likes: 250,
      image: require('../../../../assets/images/color-blur.png')
    }
  ];

  return (
    <ModalWrapper>
      <ModalHeader
        text={titles[category]}
        onPress={() => {
          router.back();
        }}
      />
      <ScrollView style={tw`px-4`} contentContainerStyle={tw`flex flex-col gap-4`}>
        {recipes.map((item) => (
          <RecipeCard
            title={item.title}
            cookingTime={item.cookingTime}
            kcal={item.kcal}
            likes={item.likes}
            image={item.image}
          />
        ))}
      </ScrollView>
      <KeyboardAccessory inputAccessoryViewID={'id'} />
    </ModalWrapper>
  );
}
