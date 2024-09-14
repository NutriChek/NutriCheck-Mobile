import { ClassInput } from 'twrnc';
import { View } from 'react-native';
import tw from '@/lib/tailwind';
import RecipeSummaryItem from '@/components/recipe-info-item';
import React from 'react';

export default function RecipeInfo({
  items,
  style
}: {
  items: Array<{
    title: string;
    text: string;
    titleStyle?: ClassInput;
    textStyle?: ClassInput;
    style?: ClassInput;
  }>;
  style?: ClassInput;
}) {
  return (
    <View style={tw.style(`flex-row`, style)}>
      {items.map((item, index) => (
        <RecipeSummaryItem
          key={index}
          title={item.title}
          text={item.text}
          titleStyle={item.titleStyle}
          textStyle={item.textStyle}
          style={item.style}
        />
      ))}
    </View>
  );
}
