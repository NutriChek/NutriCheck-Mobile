import { ScrollView, Text, View } from 'react-native';
import tw from '@/lib/tailwind';
import Ionicons from '@expo/vector-icons/Ionicons';

import HeaderWidgetWrapper from '../../header-widget-wrapper';
import CheckBox from 'expo-checkbox';
import { useState } from 'react';


// TODO: Fix scrolling not working
export default function SmallShoppingWidget({ items }: { items: string[] }) {
  return (
    <>
      <HeaderWidgetWrapper
        title='Shopping List'
        icon={<Ionicons name='list' size={20} color={tw.color('black/55')} />}
        style={tw`aspect-square`}
      >
        <View style={tw`gap-3 flex-1`}>
          <View style={tw`flex-row items-baseline`}>
            <Text style={tw`text-xl font-bold text-black/70`}>
              {items.length}
            </Text>
            <Text style={tw`text-lg font-bold text-black/70`}> items</Text>
          </View>
          <ScrollView style={tw``}>
            {items.map((item, index) => (
              <SmallShoppingWidgetItem title={item} key={index} />
            ))}
          </ScrollView>
        </View>
      </HeaderWidgetWrapper>
    </>
  );
}

function SmallShoppingWidgetItem({ title }: { title: string }) {
  const [isChecked, setChecked] = useState(false);

  return (
    <View style={tw`flex flex-row flex-1`}>
      <CheckBox
        value={isChecked}
        onValueChange={setChecked}
        color={isChecked ? '#00000090' : undefined}
        style={tw`h-4 w-4 rounded-full`}
      />
      <Text style={tw`pl-2 text-[15px] font-bold text-black/70`}>{title}</Text>
    </View>
  );
}
