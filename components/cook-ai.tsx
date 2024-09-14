import { ImageBackground, Text, TextInput, View } from 'react-native';
import tw from '@/lib/tailwind';
import Ionicons from '@expo/vector-icons/Ionicons';

const image = require('@/assets/images/color-blur.png');

export default function CookAI() {
  return (
    <View style={tw`overflow-hidden rounded-[20px] pt-3`}>
      <View style={tw`overflow-hidden rounded-[20px]`}>
        <ImageBackground
          resizeMode='stretch'
          source={image}
          style={tw`grow justify-between gap-3 p-5`}
        >
          <View style={tw`flex-row items-center`}>
            <Ionicons name='sparkles' size={24} color={tw.color('black/50')} />
            <Text style={tw`pl-2 text-lg font-bold text-black/60`}>
              Cook AI
            </Text>
          </View>

          <TextInput
            style={tw`text-s h-24 w-full rounded-2xl bg-white px-3.5 py-3 font-bold text-black/60`}
            placeholder='Recommended adjustments'
            multiline={true}
          />

          <Text style={tw`flex justify-center font-semibold text-gray-600`}>
            or ask for anything
          </Text>

          <View style={tw`w-full flex-row items-center justify-end`}>
            <TextInput
              style={tw`text-s w-full rounded-3xl bg-white px-3.5 py-3 text-gray-400`}
              placeholder={'Try saying "Add more protein"...'}
            />
            <Ionicons
              name='send'
              size={24}
              color={tw.color('black/50')}
              style={tw`absolute pr-2`}
            />
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}
