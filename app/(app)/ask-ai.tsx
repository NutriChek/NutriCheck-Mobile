import { ImageBackground, ScrollView, StatusBar, View } from 'react-native';
import tw from '@/lib/tailwind';
import WelcomeCard from '@/components/welcome-card';
import AskAIWidget from '@/components/ask-ai-widget';
import AskAISmallWidget from '@/components/ask-ai-small';
import { router } from 'expo-router';

const image = require('../../assets/images/home-background.png');

export default function HomeScreen() {
  return (
    <>
      <StatusBar barStyle='dark-content' />
      <View style={tw`grow bg-[#2E2E2E]`}>
        <ImageBackground resizeMode='cover' source={image} style={tw`grow`}>
          <ScrollView style={tw`p-4`}>
            <View style={tw`gap-4`}>
              <WelcomeCard />
              <AskAIWidget
                cards={[
                  'Suggest a low calorie dinner for today',
                  'What ingredients do I need for this recipe?',
                  'Start a recipe on Jarvis with the latest featured recipe'
                ]}
              />
              <AskAIWidget
                cards={[
                  'Suggest a low calorie dinner for today',
                  'What ingredients do I need for this recipe?'
                ]}
              />
              <View style={tw`flex-1 flex-row justify-between gap-4`}>
                <AskAISmallWidget
                  text='Suggest a low calorie dinner for today'
                  onPress={() => {
                    router.replace('/shopping-list');
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
