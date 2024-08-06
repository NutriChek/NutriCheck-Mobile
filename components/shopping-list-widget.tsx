import { Text, View } from 'react-native';
import tw from '@/lib/tailwind';
import Ionicons from '@expo/vector-icons/Ionicons';
import ShoppingSmallWidget from './shopping-widget-small';

import HeaderWidgetWrapper from './header-widget-wrapper';
import CheckBox from 'expo-checkbox';
import { useState } from 'react';

export default function ShoppingWidget({ cards }: { cards: string[] }) {
  return (
    <>
      <HeaderWidgetWrapper
        title='Shopping List'
        icon={<Ionicons name='list' size={20} color={tw.color('black/55')} />}
      >
        <View style={tw`gap-3`}>
          {cards.map((card, index) => {
            const [isChecked, setChecked] = useState(false);

            return (
              <View style={tw`flex-row`}>
                <CheckBox
                  value={isChecked}
                  onValueChange={setChecked}
                  color={isChecked ? '#00000090' : undefined}
                  style={tw`rounded-full `}
                />
                <Text key={index}>{card}</Text>
              </View>
            );
          })}
        </View>
      </HeaderWidgetWrapper>
    </>
  );
}
