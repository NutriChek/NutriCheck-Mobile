import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import tw from '@/lib/tailwind';
import CheckBox from 'expo-checkbox';

export default function ShoppingListCheckbox({ item }: { item: string }) {
  const [isChecked, setChecked] = useState(false);

  return (
    <Pressable
      onPress={() => {
        setChecked(!isChecked);
      }}
      style={tw`flex-row items-center pb-2`}
    >
      <CheckBox
        value={isChecked}
        onValueChange={setChecked}
        color={isChecked ? '#00000090' : undefined}
        style={tw`h-4 w-4 rounded-full`}
      />
      <Text style={tw`pl-2 text-[15px] font-bold text-black/70`}>{item}</Text>
    </Pressable>
  );
}
