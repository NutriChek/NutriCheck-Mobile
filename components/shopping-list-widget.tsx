import { Text, View } from 'react-native';
import tw from '@/lib/tailwind';
import Ionicons from '@expo/vector-icons/Ionicons';
import ShoppingSmallWidget from './shopping-widget-small';

import HeaderWidgetWrapper from './header-widget-wrapper';
import CheckBox from 'expo-checkbox'

export default function ShoppingWidget({ cards }: { cards: string[] }) {
  return (
    <>
      <HeaderWidgetWrapper
        title='Shopping List'
        icon={<Ionicons name='list' size={20} color={tw.color('black/55')} />}
      >
        <View style={tw`gap-3`}>
          {cards.map((card, index) => (
            <View>
              <CheckBox value={true} />
              <Text key={index}>{card}</Text>
            </View>
          ))}
        </View>
      </HeaderWidgetWrapper>
    </>
  );
}
