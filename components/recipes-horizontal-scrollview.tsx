import RecipeCard from '@/components/recipe-card';
import tw from '@/lib/tailwind';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ImageSource } from 'expo-image';
import { Href, router } from 'expo-router';
import { useRef } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Caption from '@/components/caption';

interface RecipeData {
  likes: number;
  kcal: number;
  title: string;
  cookingTime: string;
  image: ImageSource;
}

interface RecipesHorizontalScrollViewProps {
  title: string;
  data: RecipeData[];
  href: Href<string>;
}

export default function RecipesHorizontalScrollView({
  title,
  data,
  href
}: RecipesHorizontalScrollViewProps) {
  const scrollViewRef = useRef<ScrollView>(null);

  return (
    <View>
      <View style={tw`flex-row items-center justify-between px-4`}>
        <Caption text={title} style={tw`text-white`} />
        <TouchableOpacity onPress={() => router.push(href)}>
          <Ionicons name='chevron-forward' size={20} color='white' />
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={tw`ml-4 pr-8 gap-4`}
        showsHorizontalScrollIndicator={false}
        ref={scrollViewRef}
      >
        {data.map((item, index) => (
          <RecipeCard
            key={index}
            title={item.title}
            cookingTime={item.cookingTime}
            kcal={item.kcal}
            likes={item.likes}
            image={item.image}
          />
        ))}
      </ScrollView>
    </View>
  );
}
