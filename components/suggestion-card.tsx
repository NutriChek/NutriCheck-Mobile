import { ImageBackground, Pressable, Text, View } from 'react-native';
import React from 'react';
import tw from '@/lib/tailwind';
import { androidRipple, rgbaToHex } from '@/lib/util';
import { SymbolView } from 'expo-symbols';
import { MaterialIcons } from 'expo-vector-icons';
import { Style } from 'twrnc';

export default function SuggestionCard({
  text,
  image,
  onPress,
  contentContainerStyle,
  imageStyle
}: {
  text: string;
  image: any;
  onPress: () => void;
  contentContainerStyle?: Style;
  imageStyle?: Style;
}) {
  return (
    <View style={tw`overflow-hidden rounded-[20px]`}>
      <Pressable
        onPress={onPress}
        android_ripple={androidRipple}
        style={({ pressed }) => tw.style(pressed && 'ios:opacity-80')}
      >
        <ImageBackground
          resizeMode='stretch'
          source={image}
          style={tw.style(
            `grow flex-row items-center justify-between py-3 pl-6 pr-3`,
            contentContainerStyle
          )}
          imageStyle={tw.style(`opacity-70`, imageStyle)}
        >
          <Text
            style={tw`text-[#2C2C2C]/74 flex-1 flex-wrap text-[15px] font-bold leading-tight`}
          >
            {text}
          </Text>
          <View
            style={tw`items-center justify-center rounded-full bg-black/60 px-3 py-1`}
          >
            <SymbolView
              name='arrow.forward'
              resizeMode='scaleAspectFit'
              weight='semibold'
              size={20}
              tintColor={rgbaToHex(tw.color('white/80') as string)}
              fallback={
                <MaterialIcons
                  name='arrow-forward'
                  size={20}
                  color={tw.color('white/80')}
                />
              }
            />
          </View>
        </ImageBackground>
      </Pressable>
    </View>
  );
}
