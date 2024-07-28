import { Text, View } from 'react-native';
import tw from '@/lib/tailwind';
import { Image } from 'expo-image';

export default function SmallWidget() {
  return (
    <View style={tw`flex-1 items-center rounded-3xl aspect-square bg-white/80`}>
      <Image
        source='https://retete-thermomix.ro/wp-content/uploads/2021/12/Sarmale.webp'
        style={tw`w-35 m-2 h-28 rounded-3xl`}
      />
      <Text style={tw`text-lg font-bold text-black/70`}>Lorem ipsum</Text>
    </View>
  );
}
