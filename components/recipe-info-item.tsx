import { ClassInput } from 'twrnc';
import { Text, View } from 'react-native';
import tw from '@/lib/tailwind';
import React from 'react';

export default function RecipeSummaryItem({
  title,
  text,
  titleStyle,
  textStyle,
  style
}: {
  title: string;
  text: string;
  titleStyle?: ClassInput;
  textStyle?: ClassInput;
  style?: ClassInput;
}) {
  return (
    <View
      style={tw.style(`w-1/4 items-center border-r border-white/20`, style)}
    >
      <Text
        style={tw.style(
          `text-center text-sm font-medium leading-tight text-white/60`,
          titleStyle
        )}
      >
        {title}
      </Text>
      <Text
        style={tw.style(
          `text-center text-base font-bold leading-tight text-white/90`,
          textStyle
        )}
      >
        {text}
      </Text>
    </View>
  );
}
