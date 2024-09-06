import RecipesHorizontalScrollView from '@/components/recipes-horizontal-scrollview';
import tw from '@/lib/tailwind';
import { ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const image = require('@/assets/images/home-background.png');

export default function Recipes() {
  return (
    <ScrollView style={tw`grow bg-black`}>
      <ImageBackground resizeMode='cover' source={image} style={tw`grow`}>
        <ScrollView style={tw`pt-25 pl-4`}>
          <RecipesHorizontalScrollView title="Your liked recipes"></RecipesHorizontalScrollView>
          <RecipesHorizontalScrollView title="Your liked recipes"></RecipesHorizontalScrollView>
          <RecipesHorizontalScrollView title="Your liked recipes"></RecipesHorizontalScrollView>
          <RecipesHorizontalScrollView title="Your liked recipes"></RecipesHorizontalScrollView>
          <RecipesHorizontalScrollView title="Your liked recipes"></RecipesHorizontalScrollView>
          <RecipesHorizontalScrollView title="Your liked recipes"></RecipesHorizontalScrollView>
        </ScrollView>
      </ImageBackground>
    </ScrollView>
  );
}
