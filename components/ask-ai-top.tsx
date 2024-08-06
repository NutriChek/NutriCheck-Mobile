import { Text, View } from 'react-native';
import tw from '@/lib/tailwind';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Image } from 'expo-image';
import SuggestionCard from './suggestion-card';
import { router } from 'expo-router';

export default function AskAIWidget({ image }: {image: any }) {
  return (
    <View>
      <View style={tw`rounded-3xl bg-white/80 p-3`}>
        <View style={tw`flex-row items-center`}>
          <Ionicons name='sparkles' size={20} color={tw.color('black/55')} />
          <Text style={tw`pl-2 text-sm font-bold text-black/55`}>
            Ask Cook AI
          </Text>
        </View>
        <SuggestionCard
            text='Suggest a low calorie dinner for today'
            image={require('../assets/images/color-blur.png')}
            onPress={() => {
            router.replace('/page');
            }}
        />
        <SuggestionCard
            text='What ingredients do I need for this recipe?'
            image={require('../assets/images/color-blur2.png')}
            onPress={() => {
            router.replace('/page');
            }}
        />
        <SuggestionCard
            text='Start a recipe on Jarvis with the latest featured recipe'
            image={require('../assets/images/color-blur3.png')}
            onPress={() => {
            router.replace('/page');
            }}
        />
      </View>
    </View>
  );
}
