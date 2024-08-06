import { ImageBackground, ScrollView, StatusBar, View } from 'react-native';
import tw from '@/lib/tailwind';
import GoalWidget from '@/components/goal-widget';
import GoalWidgetOneContent from '@/components/goal-widget-one-content';
import SmallWidget from '@/components/small-widget';
import { VariableBlurView } from '@candlefinance/blur-view';
import AskAIWidget from '@/components/ask-ai-top';

const image = require('@/assets/images/home-background.png');

export default function HomeScreen() {
  return (
    <>
      <StatusBar barStyle='light-content' />
      <View style={tw`grow bg-[#2E2E2E]`}>
        <ImageBackground resizeMode='cover' source={image} style={tw`grow`}>
          {/*<HomeHeader />*/}
          <ScrollView style={tw`px-4`} contentContainerStyle={tw`pb-20 pt-32`}>
            <View style={tw`gap-4`}>
              <GoalWidget />
              <GoalWidgetOneContent />
              <View style={tw`flex-row justify-between gap-4`}>
                <SmallWidget />
                <SmallWidget />
              </View>
              <AskAIWidget />
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    </>
  );
}
