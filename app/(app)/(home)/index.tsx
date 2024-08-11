import { ImageBackground, ScrollView, StatusBar, View } from 'react-native';
import tw from '@/lib/tailwind';
import AskAIWidget from '@/components/ask-ai-widget';
import MediumGoalWidget from '@/components/medium-goal-widget';
import LargeGoalWidget from '@/components/large-goal-widget';
import MediumFeaturedRecipeWidget from '@/components/small-featured-recipe-widget';
import LargeFeaturedRecipeWidget from '@/components/large-featured-recipe-widget';
import LargeShoppingWidget from '@/components/large-shopping-list-widget';
import MediumShoppingWidget from '@/components/medium-shopping-list-widget';
import SmallFeaturedRecipeWidget from '@/components/small-featured-recipe-widget';
import SmallShoppingWidget from '@/components/small-shopping-list-widget';
import SmallGoalWidget from '@/components/small-goal-widget';
import SmallAskAiWidget from '@/components/small-ask-ai-widget';

const image = require('@/assets/images/home-background.png');

export default function HomeScreen() {
  return (
    <>
      <StatusBar barStyle='light-content' />
      <View style={tw`grow bg-[#2E2E2E]`}>
        <ImageBackground resizeMode='cover' source={image} style={tw`grow`}>
          <ScrollView style={tw`px-4`} contentContainerStyle={tw`pb-30 pt-32`}>
            <View style={tw`gap-4`}>
              <MediumGoalWidget />
              <LargeGoalWidget />
              <View style={tw`flex-row justify-between gap-4`}>
                <LargeFeaturedRecipeWidget />
              </View>
              <AskAIWidget cards={['ceva', 'altceva']} />

              <View style={tw`flex-row gap-4`}>
                <SmallShoppingWidget
                  items={[
                    'Coca Cola Zero',
                    'Lays Chips',
                    'MYlka Chocolate',
                    'mere',
                    'apa',
                    'suc',
                    '1',
                    '2',
                    '3'
                  ]}
                />
                <SmallShoppingWidget items={['Mar']} />
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    </>
  );
}
