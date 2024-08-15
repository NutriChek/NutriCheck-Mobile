import {
  ImageBackground,
  Platform,
  ScrollView,
  StatusBar,
  View
} from 'react-native';
import tw from '@/lib/tailwind';
import ReminderWidget from '@/components/reminder-widget';
import AskAIWidget from '@/components/ask-ai-widget';
import OngoingRecipeWidget from '@/components/ongoing-recipe-widget';
import React, { ReactNode } from 'react';
import { MeshGradient } from 'react-native-mesh-gradient';

const image = require('@/assets/images/home-background.png');

const Wrapper = ({ children }: { children: ReactNode }) => {
  if (Platform.OS === 'ios') {
    if (+Platform.Version >= 18.0) {
      return (
        <View>
          {children}
        </View>
      );
    }
    return (
      <View style={tw`grow bg-[#2E2E2E]`}>
        <ImageBackground resizeMode='cover' source={image} style={tw`grow`}>
          {children}
        </ImageBackground>
      </View>
    );
  }
  return <View style={tw`bg-transparent`}>{children}</View>;
};

export default function HomeScreen() {
  return (
    <>
      <StatusBar barStyle='light-content' />
      <Wrapper>
        <ScrollView style={tw`px-4`} contentContainerStyle={tw`pb-30 pt-32`}>
          <View style={tw`gap-4`}>
            <ReminderWidget />
            <AskAIWidget cards={['ceva', 'altceva', 'inca ceva']} />
            <OngoingRecipeWidget />
          </View>
        </ScrollView>
      </Wrapper>
    </>
  );
}
