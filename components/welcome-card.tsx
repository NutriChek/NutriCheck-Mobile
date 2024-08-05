import { Button, Text, View } from 'react-native';
import tw from '@/lib/tailwind';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';

export default function WelcomeCard() {
  return (
    <View style={tw`pt-16`}>
      <Text style={tw`text-3xl font-semibold text-white`}>
        Good morning, Alex
      </Text>
      <View style={tw`flex-row`}>
        <Text style={tw`text-base text-white `}>Lorem ipsum dolor sit</Text>
        <Ionicons
          onPress={() => {
            router.push('/ask-ai');
          }}
          name={'arrow-forward'}
          size={20}
          color={tw.color('white')}
          style={tw`self-center pl-2`}
        />
      </View>
    </View>
  );
}
