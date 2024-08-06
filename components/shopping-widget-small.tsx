import { ImageBackground, Pressable, Text, View } from 'react-native';
import tw from '@/lib/tailwind';
import Ionicons from '@expo/vector-icons/Ionicons';
import { androidRipple } from '@/lib/util';
import ShoppingWidget from './shopping-list-widget';

const image = require('../assets/images/color-blur.png');

export default function ShoppingSmallWidget({
  items
}: {
  items:string[];
}) {
  return (
    <View style={tw`overflow-hidden rounded-[20px] flex-1`}>
          <View style={tw`justify-between`}>
            <ShoppingWidget cards={['Olympus Milk', 'Coca Cola Zero', 'Lays Chips', 'MYlka Chocolate']}></ShoppingWidget>
          </View>
    </View>
  );
}
