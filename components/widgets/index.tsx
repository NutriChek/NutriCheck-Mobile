import Goals from '@/components/widgets/goals/goals';
import Ionicons from '@expo/vector-icons/Ionicons';
import tw from '@/lib/tailwind';
import AskAI from '@/components/widgets/ask-ai/ask-ai';
import FeaturedRecipe from '@/components/widgets/featured-recipe/featured-recipe';
import SuggestedRecipe from '@/components/widgets/suggested-recipe/suggested-recipe';
import OngoingRecipe from '@/components/widgets/ongoing-recipe/ongoing-recipe';
import Reminder from '@/components/widgets/reminder/reminder';
import ShoppingList from '@/components/widgets/shopping-list/shopping-list';

export const widgetComponents = {
  Goals: {
    component: Goals,
    icon: <Ionicons name='pie-chart' size={20} color={tw.color('black/55')} />
  },
  AskAI: {
    component: AskAI,
    icon: <Ionicons name='sparkles' size={20} color={tw.color('black/55')} />
  },
  FeaturedRecipe: {
    component: FeaturedRecipe,
    icon: <Ionicons name='flame' size={20} color={tw.color('black/55')} />
  },
  SuggestedRecipe: {
    component: SuggestedRecipe,
    icon: <Ionicons name='flame' size={20} color={tw.color('black/55')} />
  },
  OngoingRecipe: {
    component: OngoingRecipe,
    icon: <Ionicons name='flame' size={20} color={tw.color('black/55')} />
  },
  Reminder: {
    component: Reminder,
    icon: <Ionicons name='alarm' size={20} color={tw.color('black/55')} />
  },
  ShoppingList: {
    component: ShoppingList,
    icon: <Ionicons name='list' size={20} color={tw.color('black/55')} />
  }
};
