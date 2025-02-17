import { ImageBackground, ScrollView, StatusBar, View } from 'react-native';
import tw from '@/lib/tailwind';
import WelcomeCard from '@/components/welcome-card';
import GoalWidget from '@/components/goal-widget';
import GoalWidgetOneContent from '@/components/goal-widget-one-content';
import SmallWidget from '@/components/small-widget';

const image = require('@/assets/images/home-background.png');

export default function HomeScreen() {
  return (
    <>
      <StatusBar barStyle='dark-content' />
      <View style={tw`grow bg-[#2E2E2E]`}>
        <ImageBackground resizeMode='cover' source={image} style={tw`grow`}>
          <ScrollView style={tw`p-4`}>
            <View style={tw`gap-4`}>
              <WelcomeCard />
              <GoalWidget />
              <GoalWidgetOneContent />
              <View style={tw`flex-row justify-between gap-4`}>
                <SmallWidget />
                <SmallWidget />
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    </>
  );
}
