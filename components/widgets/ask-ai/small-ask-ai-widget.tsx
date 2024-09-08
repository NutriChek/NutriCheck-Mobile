import { ImageBackground, Text, View } from 'react-native';
import tw from '@/lib/tailwind';
import Ionicons from '@expo/vector-icons/Ionicons';
import WidgetBase from '@/components/widgets/widget-base';

const image = require('../../../assets/images/color-blur.png');

export default function SmallAskAIWidget({
  text = 'What can I cook with these ingredients?'
}: {
  text?: string;
}) {
  return (
    <WidgetBase style={tw`aspect-square p-0`}>
      <ImageBackground
        resizeMode='cover'
        source={image}
        style={tw`grow flex-row justify-between px-4 py-4`}
      >
        <View style={tw`justify-between`}>
          <View style={tw`flex-row items-center`}>
            <Ionicons name='sparkles' size={20} color={tw.color('black/50')} />
            <Text style={tw`text-black/55 pl-2 text-sm font-bold`}>
              Ask Cook AI
            </Text>
          </View>
          <Text style={tw`text-[#2C2C2C]/74 flex-wrap text-[18px] font-bold`}>
            {text}
          </Text>
        </View>
      </ImageBackground>
    </WidgetBase>
  );
}
