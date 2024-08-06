import tw from '@/lib/tailwind';
import HeaderWidgetWrapper from '@/components/header-widget-wrapper';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Text } from 'react-native';

export default function LargeGoalWidget() {
  return (
    <HeaderWidgetWrapper
      title='Your goals for today'
      icon={
        <Ionicons
          name='pie-chart'
          size={24}
          color={tw.color('black/50')}
          style={tw`pb-3`}
        />
      }
    >
      <Text style={tw`text-lg font-bold text-black/70`}>7546 steps</Text>
    </HeaderWidgetWrapper>
  );
}
