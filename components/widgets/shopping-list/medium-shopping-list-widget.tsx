import { Text, View} from 'react-native';
import tw from '@/lib/tailwind';
import Ionicons from '@expo/vector-icons/Ionicons';
import HeaderWidgetWrapper from '../../header-widget-wrapper';
import React, { useState } from 'react';

import CheckBox from 'expo-checkbox';

export default function MediumShoppingWidget({ items }: { items: string[] }) {
  return (
    <View style={tw`flex-1 overflow-hidden rounded-[20px]`}>
      <HeaderWidgetWrapper
      title='Shopping List'
        icon={<Ionicons name='list' size={20} color={tw.color('black/55')} />}
      >
        <View style={tw`flex-row gap-12`}>
          <View style={tw` items-baseline`}>
            <Text style={tw`text-xl font-bold text-black/70`}>{items.length}</Text>
            <Text style={tw`text-lg font-bold text-black/70`}> items</Text>
          </View>
          <View>
          {items.map((item, index) => {
            const [isChecked, setChecked] = useState(false);

            return (
              <View style={tw`flex-row items-center pb-2`}>
                <CheckBox
                  value={isChecked}
                  onValueChange={setChecked}
                  color={isChecked ? '#00000090' : undefined}
                  style={tw`rounded-full h-4 w-4 `}
                />
                <Text style={tw`font-bold text-[15px] text-black/70 pl-2`} key={index}>{item}</Text>
              </View>
            );
          })}
          </View>
        </View>
      </HeaderWidgetWrapper>
    </View>
  );
}
