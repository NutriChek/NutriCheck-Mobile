import { Text, View } from 'react-native';
import tw from '@/lib/tailwind';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ReactNode } from 'react';
import { Style } from 'twrnc';

export default function WidgetWrapper({
  children,
  style = {}
}: {
  children: ReactNode;
  style?: Style;
}) {
  return (
    <View style={tw`rounded-3xl bg-white/80 p-3`}>
      <View style={tw`flex-row items-center`}>
        <Ionicons
          name='pie-chart'
          size={24}
          color={tw.color('black/50')}
          style={tw`pb-3`}
        />
        <Text style={tw`pb-3 pl-2 text-lg font-bold text-black/60`}>
          Your goals for today
        </Text>
      </View>
      <View style={{ ...tw``, ...style }}>{children}</View>
    </View>
  );
}
