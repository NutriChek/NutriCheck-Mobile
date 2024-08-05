import { Text, View } from 'react-native';
import tw from '@/lib/tailwind';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Image } from 'expo-image';

function ImageTextContainer() {
  return (
    <View style={tw`w-full flex-row items-center pt-3`}>
      <Image
        source='https://retete-thermomix.ro/wp-content/uploads/2021/12/Sarmale.webp'
        style={tw`w-30 h-25 m-2 rounded-3xl`}
      />
      <View style={tw`flex-1`}>
        <Text style={tw`text-lg font-bold text-black/70`}>Lorem ipsum</Text>
        <Text style={tw`font-bold text-black/50`}>
          Lorem ipsum dolor sit amet consectetur adiscipiet
        </Text>
      </View>
    </View>
  );
}

export default function GoalWidget() {
  return (
    <View style={tw`rounded-3xl bg-white/80 p-3`}>
      <View style={tw`flex-row items-center`}>
        <Ionicons name='pie-chart' size={24} color={tw.color('black/50')} />
        <Text style={tw`pl-2 text-lg font-bold text-black/60`}>
          Your goals for today
        </Text>
      </View>
      <ImageTextContainer />
      <ImageTextContainer />
    </View>
  );
}
