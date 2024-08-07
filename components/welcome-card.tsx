import { Image, Text, View } from 'react-native';
import tw from '@/lib/tailwind';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';

export default function WelcomeCard() {
  return (
    <View style={tw`pt-16`}>
      <View style={tw`flex-row items-start justify-between`}>
        <Text style={tw`flex-1 text-[28px] font-semibold text-white`}>
          Good morning, Alex
        </Text>
        <View style={tw`flex-row gap-3`}>
          <View
            style={tw`h-8 w-8 items-center justify-center rounded-full bg-white/75`}
          >
            <Ionicons
              name={'search'}
              size={18}
              color={tw.color('black/70')}
              onPress={() => {
                router.push('/search-page');
              }}
            />
          </View>
          <Image
            source={require('../assets/images/sarmale.png')}
            style={tw`h-8 w-8 rounded-full`}
          />
        </View>
      </View>
      <View style={tw`flex-row`}>
        <Text style={tw`text-[15px] text-white`}>Lorem ipsum dolor sit</Text>
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
