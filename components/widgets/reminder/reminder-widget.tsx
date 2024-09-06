import tw from '@/lib/tailwind';
import HeaderWidgetWrapper from '@/components/header-widget-wrapper';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Text, View } from 'react-native';
import { ProgressChart } from '../../../modules/react-native-chart-kit';
import React from 'react';
import SuggestionCard from '@/components/suggestion-card';

const dataProgress = {
  data: [0.25]
};

const image = require('@/assets/images/color-blur.png');

export default function ReminderWidget() {
  return (
    <HeaderWidgetWrapper
      title='Low calories'
      icon={
        <Ionicons name='alert-circle' size={20} color={tw.color('black/50')} />
      }
    >
      <View style={tw`flex-row items-center`}>
        <ProgressChart
          data={dataProgress}
          width={100}
          height={100}
          strokeWidth={18}
          radius={30}
          chartConfig={{
            backgroundGradientFromOpacity: 0,
            backgroundGradientToOpacity: 0,
            color: (opacity = 0.49) => `rgba(255, 56, 56, ${opacity})`
          }}
          hideLegend={true}
        />
        <View style={tw`flex-1 gap-2`}>
          <Text style={tw`text-sm font-bold leading-tight text-black/70`}>
            It’s 14:30 and you’ve only eaten 300 kcal. Maybe try eating
            something?
          </Text>
          <SuggestionCard
            text='Log a meal'
            image={image}
            onPress={() => {}}
            contentContainerStyle={tw`py-2 pr-2 pl-3`}
            imageStyle={tw`opacity-60`}
          />
        </View>
      </View>
    </HeaderWidgetWrapper>
  );
}
