import { Text, View } from 'react-native';
import tw from '@/lib/tailwind';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import ShoppingListCheckbox from '@/components/shopping-list-checkbox';
import WidgetBase from '@/components/widgets/widget-base';

export default function MediumShoppingWidget({ items }: { items: string[] }) {
  items = [];

  return (
    <WidgetBase
      title='Shopping List'
      icon={<Ionicons name='list' size={20} color={tw.color('black/55')} />}
    >
      <View style={tw`flex-row gap-16`}>
        <View style={tw`items-baseline`}>
          <Text style={tw`text-xl font-bold text-black/70`}>
            {items.length}
          </Text>
          <Text style={tw`text-lg font-bold text-black/70`}>items</Text>
        </View>
        <View>
          {items.slice(0, 4).map((item, index) => (
            <ShoppingListCheckbox item={item} key={index} />
          ))}
        </View>
      </View>
    </WidgetBase>
  );
}
