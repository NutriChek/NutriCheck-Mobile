import { ScrollView, View } from 'react-native';
import tw from '@/lib/tailwind';
import ReminderWidget from '@/components/reminder-widget';
import AskAIWidget from '@/components/ask-ai-widget';
import OngoingRecipeWidget from '@/components/ongoing-recipe-widget';
import React from 'react';
import MediumGoalWidget from '@/components/medium-goal-widget';
import HomeWrapper from '@/components/home-wrapper';

export default function HomeScreen() {
  return (
    <HomeWrapper>
      <ScrollView style={tw`px-4`} contentContainerStyle={tw`pb-30 pt-32`}>
        <View style={tw`gap-4`}>
          <MediumGoalWidget />
          <ReminderWidget />
          <AskAIWidget cards={['ceva', 'altceva', 'inca ceva']} />
          <OngoingRecipeWidget />
        </View>
      </ScrollView>
    </HomeWrapper>
  );
}
