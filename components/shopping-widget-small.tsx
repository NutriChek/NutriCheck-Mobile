import { ImageBackground, Pressable, Text, View } from 'react-native';
import tw from '@/lib/tailwind';
import Ionicons from '@expo/vector-icons/Ionicons';
import { androidRipple } from '@/lib/util';

const image = require('../assets/images/color-blur.png');

export default function ShoppingSmallWidget({
  items
}: {
  items:string[];
}) {
  return (
    <View style={tw`overflow-hidden rounded-[20px] flex-1`}>
          <View style={tw`justify-between`}>
            
          </View>
    </View>
  );
}
