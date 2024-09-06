import { ImageBackground, Text, View } from 'react-native';
import tw from '@/lib/tailwind';
import { MaterialIcons } from 'expo-vector-icons';
import { SymbolView } from 'expo-symbols';
import { rgbaToHex } from '@/lib/util';
import WidgetBase from '@/components/widget-base';
import { LinearGradient } from 'expo-linear-gradient';

const image = require('../../../assets/images/sarmale.png');

export default function SmallSuggestedRecipeWidget() {
  return (
    <WidgetBase style={tw`p-0`}>
      <ImageBackground
        resizeMode='cover'
        source={image}
        style={tw`aspect-square`}
      >
        <View style={tw`flex-1 justify-end`}>
          <LinearGradient
            colors={['transparent', '#000000aa']}
            style={tw`w-full items-start p-4`}
          >
            <View style={tw`flex-row items-center`}>
              <SymbolView
                name='star.circle.fill'
                resizeMode='scaleAspectFill'
                weight='semibold'
                size={20}
                tintColor={rgbaToHex(tw.color('white/80') as string)}
                fallback={
                  <MaterialIcons
                    name='star'
                    size={20}
                    color={tw.color('white/80')}
                  />
                }
              />
              <Text style={tw`pl-1 text-sm font-bold text-white`}>
                Suggested recipe
              </Text>
            </View>
            <Text style={tw`text-base font-bold text-white`}>
              Sarmale de post
            </Text>
            <Text style={tw`text-[12px] font-bold text-white`}>
              by Jamila Cuisine
            </Text>
          </LinearGradient>
        </View>
      </ImageBackground>
    </WidgetBase>
  );
}
