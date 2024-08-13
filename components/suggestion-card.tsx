import { ImageBackground, Pressable, Text, View } from 'react-native';
import React from 'react';
import tw from '@/lib/tailwind';
import { androidRipple, rgbaToHex } from '@/lib/util';
import { SymbolView } from 'expo-symbols';
import { MaterialIcons } from 'expo-vector-icons';

export default function SuggestionCard({
  text,
  image,
  onPress
}: {
  text: string;
  image: any;
  onPress: () => void;
}) {
  return (
    <View style={tw`overflow-hidden rounded-[20px]`}>
      <View style={tw.style(`w-full flex-row overflow-hidden rounded-[20px]`)}>
        <ImageBackground
          resizeMode='stretch'
          source={image}
          style={tw`grow flex-row items-center justify-between py-3 pl-6 pr-4`}
          imageStyle={tw`opacity-70`}
        >
          <Text
            style={tw`text-[#2C2C2C]/74 flex-1 flex-wrap text-[15px] font-bold leading-tight`}
          >
            {text}
          </Text>
          <Pressable
            onPress={onPress}
            android_ripple={androidRipple}
            style={tw`items-center justify-center rounded-full bg-black/60 px-3 py-1`}
          >
            <SymbolView
              name='arrow.forward'
              resizeMode='scaleAspectFill'
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
          </Pressable>
        </ImageBackground>
      </View>
    </View>
  );
}
