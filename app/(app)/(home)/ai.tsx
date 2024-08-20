import React from 'react';
import SortableList from '@/components/SortableList';
import { View } from 'react-native';
import tw from '@/lib/tailwind';

export default function AI() {
  return (
    <SortableList editing={true} onDragEnd={() => {}}>
      <View
        id={'1'}
        key={1}
        pointerEvents='none'
        style={tw`flex-1 bg-red-500 border`}
      />
      <View
        id={'2'}
        key={2}
        pointerEvents='none'
        style={tw`flex-1 bg-blue-500 border`}
      />
      <View
        id={'3'}
        key={3}
        pointerEvents='none'
        style={tw`flex-1 bg-green-500 border`}
      />
      <View
        id={'4'}
        key={4}
        pointerEvents='none'
        style={tw`flex-1 bg-yellow-500 border`}
      />
      <View
        id={'5'}
        key={5}
        pointerEvents='none'
        style={tw`flex-1 bg-purple-500 border`}
      />
      <View
        id={'6'}
        key={6}
        pointerEvents='none'
        style={tw`flex-1 bg-pink-500 border`}
      />
      <View
        id={'7'}
        key={7}
        pointerEvents='none'
        style={tw`flex-1 bg-indigo-500 border`}
      />
      <View
        id={'8'}
        key={8}
        pointerEvents='none'
        style={tw`flex-1 bg-gray-500 border`}
      />
      <View
        id={'9'}
        key={9}
        pointerEvents='none'
        style={tw`flex-1 bg-gray-500 border`}
      />
      <View
        id={'10'}
        key={10}
        pointerEvents='none'
        style={tw`flex-1 bg-gray-500 border`}
      />
      <View
        id={'11'}
        key={11}
        pointerEvents='none'
        style={tw`flex-1 bg-gray-500 border`}
        />
    </SortableList>
  );
}
