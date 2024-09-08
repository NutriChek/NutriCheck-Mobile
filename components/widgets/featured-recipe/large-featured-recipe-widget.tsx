import { ImageBackground, Text, View } from 'react-native';
import tw from '@/lib/tailwind';
import { SymbolView } from 'expo-symbols';
import { rgbaToHex } from '@/lib/util';
import { MaterialIcons } from 'expo-vector-icons';
import WidgetBase from '@/components/widgets/widget-base';
import { LinearGradient } from 'expo-linear-gradient';

const image = require('../../../assets/images/sarmale.png');

export default function LargeFeaturedRecipeWidget() {
  return (
    <WidgetBase style={tw`p-0`}>
      <ImageBackground resizeMode='cover' source={image} style={tw`h-70`}>
        <View style={tw`flex-1 justify-end`}>
          <LinearGradient
            colors={['transparent', '#000000aa']}
            style={tw`w-full items-start p-4 pt-6`}
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
              <Text style={tw`pl-2 text-lg font-bold text-white`}>
                Featured recipe
              </Text>
            </View>
            <Text style={tw`text-2xl font-bold text-white leading-tight`}>
              Sarmale de post
            </Text>
            <Text style={tw`text-sm font-bold text-white leading-tight`}>
              by Jamila Cuisine
            </Text>
          </LinearGradient>
        </View>
      </ImageBackground>
    </WidgetBase>
  );
}
