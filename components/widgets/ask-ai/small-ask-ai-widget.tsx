import { ImageBackground, Pressable, Text, View } from 'react-native';
import tw from '@/lib/tailwind';
import Ionicons from '@expo/vector-icons/Ionicons';
import { androidRipple } from '@/lib/util';

const image = require('../../../assets/images/color-blur.png');

export default function SmallAskAIWidget({
  text = 'What can I cook with these ingredients?',
  onPress
}: {
  text?: string;
  onPress?: () => void;
}) {
  return (
    <View style={tw`overflow-hidden rounded-[20px] flex-1`}>
      <Pressable
        onPress={onPress}
        android_ripple={androidRipple}
        style={({ pressed }) =>
          tw.style(
            `w-full flex-row overflow-hidden rounded-[20px]`,
            pressed && `ios:opacity-80`
          )
        }
      >
        <ImageBackground
          resizeMode='cover'
          source={image}
          style={tw`grow flex-row justify-between py-4 px-6 aspect-square`}
        >
          <View style={tw`justify-between`}>
            <View style={tw`flex-row items-center`}>
              <Ionicons
                name='sparkles'
                size={20}
                color={tw.color('black/50')}
              />
              <Text style={tw`pl-2 text-sm font-bold text-black/55`}>
                Ask Cook AI
              </Text>
            </View>
            <Text style={tw`flex-wrap font-bold text-[#2C2C2C]/74 text-[18px]`}>{text}</Text>
          </View>
        </ImageBackground>
      </Pressable>
    </View>
  );
}
