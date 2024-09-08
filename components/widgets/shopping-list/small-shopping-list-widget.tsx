import { Text, View } from 'react-native';
import tw from '@/lib/tailwind';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import ShoppingListCheckbox from '@/components/shopping-list-checkbox';
import WidgetBase from '@/components/widgets/widget-base';

export default function SmallShoppingWidget({ items }: { items: string[] }) {
  items = [];

  return (
    <WidgetBase
      title='Shopping List'
      icon={<Ionicons name='list' size={20} color={tw.color('black/55')} />}
      style={tw`aspect-square`}
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
    </WidgetBase>
  );
}
