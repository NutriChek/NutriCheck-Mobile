import { ImageBackground, Text, View } from 'react-native';
import tw from '@/lib/tailwind';
import { MaterialIcons } from 'expo-vector-icons';
import { SymbolView } from 'expo-symbols';
import { rgbaToHex } from '@/lib/util';

const image = require('../assets/images/sarmale.png');

export default function MediumFeaturedRecipeWidget() {
  return (
    <View style={tw`flex-1 overflow-hidden rounded-3xl`}>
      <ImageBackground
        resizeMode='cover'
        source={image}
        style={tw`aspect-square`}
      >
        <View style={tw`flex-1 justify-end p-6`}>
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
              Ask Cook AI
            </Text>
          </View>
          <Text style={tw`text-base font-bold text-white`}>
            Sarmale de post
          </Text>
          <Text style={tw`text-sm font-bold text-white`}>
            by Jamila Cuisine
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}
