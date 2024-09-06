import tw from '@/lib/tailwind';
import { Text, View } from 'react-native';
import { Image, ImageSource } from 'expo-image';
import Ionicons from '@expo/vector-icons/Ionicons';

interface RecipeCardProps {
  likes: number;
  kcal: number;
  title: string;
  cookingTime: string;
  image: ImageSource;
}

export default function RecipeCard({ title, cookingTime, kcal, likes, image } : RecipeCardProps) {
  return (
    <View style={tw`w-70 flex-row items-center rounded-3xl bg-white/70 pr-2`}>
      <Image
        source={image}
        style={tw`w-23 mr-4 h-full rounded-l-xl`}
      />
      <View style={tw`flex-1`}>
        <Text style={tw`pt-3 text-base font-bold text-black/70`}>
          {title}
        </Text>
        <Text style={tw`text-sm font-semibold text-black/60`}>
          {cookingTime} Cooking time
        </Text>
        <Text style={tw`text-sm font-semibold text-black/60`}>{kcal}kcal</Text>
        <View style={tw`flex-row items-center gap-1 pb-3`}>
          <Ionicons name='heart' size={18} color={'red'} />
          <Text style={tw`text-sm font-semibold text-black/60`}>{likes}</Text>
        </View>
      </View>
    </View>
  );
}
