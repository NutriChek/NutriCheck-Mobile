import HomeWrapper from '@/components/home-wrapper';
import RecipesHorizontalScrollView from '@/components/recipes-horizontal-scrollview';
import tw from '@/lib/tailwind';
import { ScrollView } from 'react-native-gesture-handler';


export default function Recipes() {
  const recipes = [
    {
      title: 'Sarmale de post',
      cookingTime: '20m',
      kcal: 300,
      likes: 120,
      image: require('../../../assets/images/sarmale.png')
    },
    {
      title: 'Salam de biscuiti',
      cookingTime: '1h',
      kcal: 480,
      likes: 250,
      image: require('../../../assets/images/color-blur.png')
    }
  ];

  return (
    <HomeWrapper>
      <ScrollView contentContainerStyle={tw`pb-32 pt-32`}>
        <RecipesHorizontalScrollView
          title='Your liked recipes'
          data={recipes}
          href="/modals/recipes/liked"
        />
        <RecipesHorizontalScrollView
          title='Top recipes this week'
          data={recipes}
          href="/modals/recipes/top"
        />
        <RecipesHorizontalScrollView
          title='Featured recipes'
          data={recipes}
          href="/modals/recipes/featured"
        />
        <RecipesHorizontalScrollView
          title='Recipes for this season'
          data={recipes}
          href="/modals/recipes/season"
        />
      </ScrollView>
    </HomeWrapper>
  );
}
