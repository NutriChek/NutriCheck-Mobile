import RecipeCard from '@/components/recipe-card';
import tw from '@/lib/tailwind';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRef, useState } from 'react';
import { Text, Pressable, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function RecipesHorizontalScrollView({ title, scrollModifier = 400 } : { title: string, scrollModifier?: number }) {
  const [currentScrollPosition, setCurrentScrollPosition] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  return (
    <View style={tw`mb-3 mt-3`}>
      <View style={tw`flex-row items-center justify-between`}>
        <Text style={tw`font-brand text-xl text-white`}>
          {title}
        </Text>
        <Pressable
          onPress={() =>
            scrollViewRef.current?.scrollTo({ x: currentScrollPosition + scrollModifier })
          }
          style={tw`p-4`}
        >
          <Ionicons name='chevron-forward' size={20} color='white' />
        </Pressable>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={tw`gap-4`}
        showsHorizontalScrollIndicator={false}
        ref={scrollViewRef}
        onScroll={(e) =>
          setCurrentScrollPosition(e.nativeEvent.contentOffset.x)
        }
      >
        <RecipeCard 
            title="Sarmale de post"
            cookingTime="20m"
            kcal={300}
            likes={120}
        ></RecipeCard>
        <RecipeCard 
            title="Sarmale de post"
            cookingTime="20m"
            kcal={300}
            likes={120}
        ></RecipeCard>
        <RecipeCard 
            title="Sarmale de post"
            cookingTime="20m"
            kcal={300}
            likes={120}
        ></RecipeCard>
        <RecipeCard 
            title="Sarmale de post"
            cookingTime="20m"
            kcal={300}
            likes={120}
        ></RecipeCard>
        <RecipeCard 
            title="Sarmale de post"
            cookingTime="20m"
            kcal={300}
            likes={120}
        ></RecipeCard>
      </ScrollView>
    </View>
  );
}
