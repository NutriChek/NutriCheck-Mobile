import { ImageBackground, Pressable, Text, View } from 'react-native';
import React from 'react';
import tw from '@/lib/tailwind';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { androidRipple } from '@/lib/util';

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
        >
          <Text
            style={tw`text-[#2C2C2C]/74 flex-1 flex-wrap text-[15px] font-bold leading-tight`}
          >
            {text}
          </Text>
          <Pressable
            onPress={onPress}
            android_ripple={androidRipple}
            style={tw`h-24px w-45px items-center justify-center rounded-full bg-black/60 px-3`}
          >
            <FontAwesomeIcon color='#F5F3F3' icon={faArrowRightLong} />
          </Pressable>
        </ImageBackground>
      </View>
    </View>
  );
}
