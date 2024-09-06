import { Text, View } from 'react-native';
import tw from '@/lib/tailwind';
import Ionicons from '@expo/vector-icons/Ionicons';

import HeaderWidgetWrapper from '../../header-widget-wrapper';
import CheckBox from 'expo-checkbox';
import { useState } from 'react';

export default function LargeShoppingWidget({ items }: { items: string[] }) {
  return (
    <>
      <HeaderWidgetWrapper
        title='Shopping List'
        icon={<Ionicons name='list' size={20} color={tw.color('black/55')} />}
      >
        <View style={tw`gap-3`}>
          <View style={tw`flex-row items-baseline`}>
            <Text style={tw`text-xl font-bold text-black/70`}>{items.length}</Text>
            <Text style={tw`text-lg font-bold text-black/70`}> items</Text>
          </View>
          {items.map((item, index) => {
            const [isChecked, setChecked] = useState(false);

            return (
              <View style={tw`flex-row items-center`}>
                <CheckBox
                  value={isChecked}
                  onValueChange={setChecked}
                  color={isChecked ? '#00000090' : undefined}
                  style={tw`rounded-full h-4 w-4`}
                />
                <Text style={tw`font-bold text-[15px] text-black/70 pl-2`} key={index}>{item}</Text>
              </View>
            );
          })}
        </View>
      </HeaderWidgetWrapper>
    </>
  );
}
