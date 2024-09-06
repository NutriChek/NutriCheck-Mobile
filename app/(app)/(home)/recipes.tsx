import RecipesHorizontalScrollView from '@/components/recipes-horizontal-scrollview';
import tw from '@/lib/tailwind';
import { ScrollView } from 'react-native-gesture-handler';

const image = require('@/assets/images/home-background.png');

export default function Recipes() {
  return (
    <ScrollView contentContainerStyle={tw`pb-30 pt-32`}>
      <RecipesHorizontalScrollView title='Your liked recipes'></RecipesHorizontalScrollView>
      <RecipesHorizontalScrollView title='Your liked recipes'></RecipesHorizontalScrollView>
      <RecipesHorizontalScrollView title='Your liked recipes'></RecipesHorizontalScrollView>
      <RecipesHorizontalScrollView title='Your liked recipes'></RecipesHorizontalScrollView>
      <RecipesHorizontalScrollView title='Your liked recipes'></RecipesHorizontalScrollView>
      <RecipesHorizontalScrollView title='Your liked recipes'></RecipesHorizontalScrollView>
    </ScrollView>
  );
}
