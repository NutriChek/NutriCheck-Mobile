import { Text, View } from 'react-native';
import tw from '@/lib/tailwind';

export default function WelcomeCard() {
  return (
    <View style={tw`pt-16`}>
      <Text style={tw`text-4xl text-white font-semibold`}>Good morning, Alex</Text>
      <Text style={tw`text-lg text-white`}>Lorem ipsum dolor sit</Text>
    </View>
  );
}
