import { Button, Text, View, Image } from 'react-native';
import tw from '@/lib/tailwind';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';

export default function WelcomeCard() {
  return (
    <View style={tw`pt-16`}>
      <View style={tw`flex-row items-center justify-between`}>
        <Text style={tw`text-3xl font-semibold text-white`}>
          Good morning, Alex
        </Text>
        <View style={tw`flex-row gap-3`}>
        <View style={tw`bg-white/75 rounded-full w-8 h-8 justify-center items-center`}>
          <Ionicons
            name={'search'}
            size={18}
            color={tw.color('black/70')}
            onPress={() => {
              router.push('/search-page');
            }}
          />
        </View>
        <Image source={require('../assets/images/sarmale.png')} style={tw`w-8 h-8 rounded-full`}/>
        </View>
      </View>
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
