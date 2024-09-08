import { Text, View } from 'react-native';
import tw from '@/lib/tailwind';
import Ionicons from '@expo/vector-icons/Ionicons';

import HeaderWidgetWrapper from '@/components/header-widget-wrapper';
import React from 'react';
import ShoppingListCheckbox from '@/components/shopping-list-checkbox';

export default function LargeShoppingWidget({ items }: { items: string[] }) {
  items = [];

  return (
    <HeaderWidgetWrapper
      title='Shopping List'
      icon={<Ionicons name='list' size={20} color={tw.color('black/55')} />}
    >
      <View style={tw`items-start gap-1`}>
        <View style={tw`flex-row items-baseline`}>
          <Text style={tw`text-xl font-bold text-black/70`}>
            {items.length}
          </Text>
          <Text style={tw`text-black/71 text-lg font-bold`}> items</Text>
        </View>
        {items.slice(0, 6).map((item, index) => (
          <ShoppingListCheckbox item={item} key={index} />
        ))}
      </View>
    </HeaderWidgetWrapper>
  );
}
