import React from 'react';
import tw from '@/lib/tailwind';
import { Text, View } from 'react-native';
import IconButton from '@/components/icon-button';

export default function OauthButtons({ style }: { style?: string }) {
  return (
    <View style={tw.style(`items-center`, style)}>
      <Text style={tw`pb-5 text-sm font-bold text-black/50`}>
        or continue with
      </Text>
      <View style={tw`flex-row gap-8`}>
        <IconButton
          icon='logo-facebook'
          onPress={() => {}}
          size={40}
          color={tw.color('black/50')}
        />
        <IconButton
          icon='logo-apple'
          onPress={() => {}}
          size={40}
          color={tw.color('black/50')}
        />
        <IconButton
          icon='logo-google'
          onPress={() => {}}
          size={40}
          color={tw.color('black/50')}
        />
      </View>
    </View>
  );
}
