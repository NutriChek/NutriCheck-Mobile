import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StatusBar,
  View
} from 'react-native';
import tw from '@/lib/tailwind';
import WelcomeCard from '@/components/welcome-card';
import LargeGoalWidget from '@/components/large-goal-widget';
import MediumGoalWidget from '@/components/medium-goal-widget';
import SmallGoalWidget from '@/components/small-goal-widget';

import LargeFeaturedRecipeWidget from '@/components/large-featured-recipe-widget';
import MediumFeaturedRecipeWidget from '@/components/medium-featured-recipe-widget';
import SmallFeaturedRecipeWidget from '@/components/small-featured-recipe-widget';
import LargeSuggestedRecipeWidget from '@/components/large-suggested-recipe-widget';
import MediumSuggestedRecipeWidget from '@/components/medium-suggested-recipe-widget';

const image = require('@/assets/images/home-background.png');

export default function HomeScreen() {
  const screenHeight = Dimensions.get('screen').height;
  const windowHeight = Dimensions.get('window').height;

  const navHeight = screenHeight - windowHeight;

  return (
    <>
      <StatusBar barStyle='dark-content' />
      <View style={tw`grow bg-[#2E2E2E]`}>
        <ImageBackground resizeMode='cover' source={image} style={tw`grow`}>
          <ScrollView style={tw`px-4 pt-4`}>
            <View style={tw`gap-4`}>
              <WelcomeCard />
              <LargeGoalWidget />

              <LargeSuggestedRecipeWidget />
              <LargeFeaturedRecipeWidget />
              
              <MediumGoalWidget />

              <MediumSuggestedRecipeWidget />
              <MediumFeaturedRecipeWidget />

              <View style={tw`flex-row justify-between gap-4`}>
                <SmallGoalWidget />
                <SmallGoalWidget />
              </View>

              <View style={tw`flex-row justify-between gap-4`}>
                <SmallFeaturedRecipeWidget />
                <SmallFeaturedRecipeWidget />
              </View>
            </View>
            <View style={tw`h-[${navHeight}px]`} />
          </ScrollView>
        </ImageBackground>
      </View>
    </>
  );
}
