import { Text, View } from 'react-native';
import tw from '@/lib/tailwind';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Image } from 'expo-image';
import SuggestionCard from './suggestion-card';
import { router } from 'expo-router';

export default function AskAIWidget() {
  return (
    <View>
      <View style={tw`rounded-3xl bg-white/80 p-3`}>
        <View style={tw`flex-row items-center`}>
          <Ionicons name='sparkles' size={24} color={tw.color('black/50')} />
          <Text style={tw`pl-2 text-lg font-bold text-black/60`}>
            Ask Cook AI
          </Text>
        </View>
        <SuggestionCard
            text='Suggest a low calorie dinner for today'
            onPress={() => {
            router.replace('/page');
            }}
        />
        <SuggestionCard
            text='What ingredients do I need for this recipe?'
            onPress={() => {
            router.replace('/page');
            }}
        />
        <SuggestionCard
            text='Start a recipe on Jarvis with the latest featured recipe'
            onPress={() => {
            router.replace('/page');
            }}
        />
      </View>
    </View>
  );
}
