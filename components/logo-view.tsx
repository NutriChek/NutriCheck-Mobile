import { Text, View } from 'react-native';
import tw from '@/lib/tailwind';
import { Image } from 'expo-image';

export default function LogoView() {
  return (
    <View style={tw`items-center`}>
      <Image
        source={require('@/assets/images/logopng.png')}
        style={tw`mb-4 h-20 w-20`}
      />
      <Text style={tw`font-brand text-4xl text-[#5D5D5D]`}>NutriCheck</Text>
    </View>
  );
}
