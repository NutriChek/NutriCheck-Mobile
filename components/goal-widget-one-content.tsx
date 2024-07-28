import { Text, View } from 'react-native';
import tw from '@/lib/tailwind';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Image } from 'expo-image';

function TextContainer() {
  return (
    <View style={tw`flex-1`}>
      <Text style={tw`text-lg font-bold text-black/70`}>Lorem ipsum</Text>
      <Text style={tw`font-bold text-black/50`}>Lorem ipsum dolor sit</Text>
    </View>
  );
}

export default function GoalWidgetOneContent() {
  return (
    <View>
      <View style={tw`rounded-3xl bg-white/80 p-3`}>
        <View style={tw`flex-row items-center`}>
          <Ionicons name='pie-chart' size={24} color={tw.color('black/50')} />
          <Text style={tw`pl-2 text-lg font-bold text-black/60`}>
            Your goals for today
          </Text>
        </View>
        <View style={tw`flex-row justify-between`}>
          <View style={tw `pl-3 pt-3`}>
            <TextContainer />
            <TextContainer />
          </View>
          <Image
            source='https://retete-thermomix.ro/wp-content/uploads/2021/12/Sarmale.webp'
            style={tw`w-30 h-25 m-2 rounded-3xl`}
          />
        </View>
      </View>
    </View>
  );
}
