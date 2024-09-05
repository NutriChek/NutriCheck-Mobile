import tw from '@/lib/tailwind';
import { Text, View } from 'react-native';
import { Image } from 'expo-image';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function RecipeCard() {
  return (
    <View style={tw`w-70 flex-row items-center rounded-3xl bg-white/70 pr-2`}>
      <Image
        source={require('../assets/images/sarmale.png')}
        style={tw`w-23 mr-4 h-full rounded-l-3xl`}
      />
      <View style={tw`flex-1`}>
        <Text style={tw`pt-3 text-base font-bold text-black/70`}>
          Sarmale de post
        </Text>
        <Text style={tw`text-sm font-semibold text-black/60`}>
          20m cooking time
        </Text>
        <Text style={tw`text-sm font-semibold text-black/60`}>300kcal</Text>
        <View style={tw`flex-row items-center gap-1 pb-3`}>
          <Ionicons name='heart' size={18} color={'red'} />
          <Text style={tw`text-sm font-semibold text-black/60`}>120</Text>
        </View>
      </View>
    </View>
  );
}
