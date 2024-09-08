import { ImageBackground, Text, View } from 'react-native';
import tw from '@/lib/tailwind';
import { MaterialIcons } from 'expo-vector-icons';
import { SymbolView } from 'expo-symbols';
import { rgbaToHex } from '@/lib/util';
import WidgetBase from '@/components/widgets/widget-base';
import { LinearGradient } from 'expo-linear-gradient';

const image = require('../../../assets/images/sarmale.png');

export default function SmallFeaturedRecipeWidget() {
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
            style={tw`w-full items-start px-3 py-4`}
          >
            <View style={tw`flex-row items-center`}>
              <SymbolView
                name='fork.knife.circle.fill'
                resizeMode='scaleAspectFit'
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
              <Text
                numberOfLines={1}
                style={tw`flex-1 pl-1 text-sm font-bold leading-tight text-white`}
              >
                Featured recipe
              </Text>
            </View>
            <Text
              numberOfLines={1}
              style={tw`grow text-base font-bold leading-tight text-white`}
            >
              Sarmale de post
            </Text>
            <Text
              numberOfLines={1}
              style={tw`grow text-xs font-bold leading-tight text-white`}
            >
              by Jamila Cuisine
            </Text>
          </LinearGradient>
        </View>
      </ImageBackground>
    </WidgetBase>
  );
}
