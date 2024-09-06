import { Text, View } from 'react-native';
import tw from '@/lib/tailwind';
import Ionicons from '@expo/vector-icons/Ionicons';
import HeaderWidgetWrapper from '@/components/header-widget-wrapper';
import React from 'react';
import ShoppingListCheckbox from '@/components/shopping-list-checkbox';

export default function SmallShoppingWidget({ items }: { items: string[] }) {
  return (
    <View style={tw`flex-1 overflow-hidden rounded-[20px]`}>
      <HeaderWidgetWrapper
        title='Shopping List'
        icon={<Ionicons name='list' size={20} color={tw.color('black/55')} />}
      >
        <View style={tw`aspect-square`}>
          <View style={tw`flex-row`}>
            <Text style={tw`text-xl font-bold text-black/70`}>
              {items.length}{' '}
            </Text>
            <Text style={tw`text-lg font-bold text-black/70`}>items</Text>
          </View>
          <View>
            {items.slice(0, 3).map((item, index) => (
              <ShoppingListCheckbox item={item} key={index} />
            ))}
          </View>
        </View>
      </HeaderWidgetWrapper>
    </View>
  );
}
