import RecipeCard from '@/components/recipe-card';
import tw from '@/lib/tailwind';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ImageSource } from 'expo-image';
import { Href, Link } from 'expo-router';
import { useRef, useState } from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

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

export default function RecipesHorizontalScrollView({ title, data, href } : RecipesHorizontalScrollViewProps) {
  const [currentScrollPosition, setCurrentScrollPosition] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  return (
    <View style={tw`my-3`}>
      <View style={tw`ml-4 flex-row items-center justify-between`}>
        <Text style={tw`font-brand text-xl text-white`}>
          {title}
        </Text>
        <Link href={href} style={tw`p-4`}>
          <Ionicons name='chevron-forward' size={20} color='white' />
        </Link>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={tw`ml-4 pr-8 gap-4`}
        showsHorizontalScrollIndicator={false}
        ref={scrollViewRef}
        onScroll={(e) =>
          setCurrentScrollPosition(e.nativeEvent.contentOffset.x)
        }
      >
        {data.map((item) => (
            <RecipeCard
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
