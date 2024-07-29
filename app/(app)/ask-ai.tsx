import {
  Button,
  ImageBackground,
  ScrollView,
  StatusBar,
  View,
  Text
} from 'react-native';
import tw from '@/lib/tailwind';
import WelcomeCard from '@/components/welcome-card';
import AskAIMiddle from '@/components/ask-ai-middle';
import AskAIWidget from '@/components/ask-ai-top';
import AskAISmallWidget from '@/components/ask-ai-small';
import { router } from 'expo-router';

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
              <AskAIWidget />
              <AskAIMiddle />
              <View style={tw`flex-row justify-between gap-4`}>
                <AskAISmallWidget
                  text='Suggest a low calorie dinner for today'
                  onPress={() => {
                    router.replace('/page');
                  }}
                />
                <AskAISmallWidget
                  text='What ingredients do I need for this recipe?'
                  onPress={() => {
                    router.replace('/page');
                  }}
                />
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    </>
  );
}
