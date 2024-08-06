import { ImageBackground, Text, View } from 'react-native';
import tw from '@/lib/tailwind';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const image = require('../assets/images/sarmale.png');

export default function LargeFeaturedRecipeWidget() {
  return (
    <View style={tw`flex-1 overflow-hidden rounded-3xl`}>
      <ImageBackground resizeMode='cover' source={image} style={tw`h-60`}>
        <View style={tw`flex-1 justify-end p-6`}>
          <View style={tw`flex-row items-center`}>
            <FontAwesomeIcon icon={faStar} color='white' size={20} />
            <Text style={tw`pl-2 text-lg font-bold text-white`}>
              Ask Cook AI
            </Text>
          </View>
          <Text style={tw`text-3xl font-bold text-white`}>Sarmale de post</Text>
          <Text style={tw`text-lg font-bold text-white`}>by Jamila Cuisine</Text>
        </View>
      </ImageBackground>
    </View>
  );
}