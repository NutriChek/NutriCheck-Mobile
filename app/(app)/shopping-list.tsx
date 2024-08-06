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
import AskAISmallWidget from '@/components/ask-ai-small';
import { router } from 'expo-router';
import WidgetWrapper from '@/components/widget-wrapper';
import Ionicons from '@expo/vector-icons/Ionicons';

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

              <View style={tw`flex-row justify-between gap-4`}>
                <WidgetWrapper
                  title='Ask Cook AI'
                  icon={
                    <Ionicons
                      name='sparkles'
                      size={20}
                      color={tw.color('black/55')}
                    />
                  }
                >
                  <View></View>
                </WidgetWrapper>
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    </>
  );
}
