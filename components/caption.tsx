import { Text } from 'react-native';
import React from 'react';
import tw from '@/lib/tailwind';

export default function Caption({
  text,
  style
}: {
  text: string;
  style?: string;
}) {
  return (
    <Text style={tw.style(`py-4 text-xl font-bold text-black`, style)}>
      {text}
    </Text>
  );
}
