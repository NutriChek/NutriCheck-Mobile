import Goals from '@/components/widgets/goals/goals';
import Ionicons from '@expo/vector-icons/Ionicons';
import tw from '@/lib/tailwind';
import AskAI from '@/components/widgets/ask-ai/ask-ai';
import FeaturedRecipe from '@/components/widgets/featured-recipe/featured-recipe';
import SuggestedRecipe from '@/components/widgets/suggested-recipe/suggested-recipe';
import OngoingRecipe from '@/components/widgets/ongoing-recipe/ongoing-recipe';
import Reminder from '@/components/widgets/reminder/reminder';
import ShoppingList from '@/components/widgets/shopping-list/shopping-list';
import { WidgetSize } from '@/lib/types';
import { FC, ReactNode } from 'react';

export const widgetComponents: {
  [key: string]: {
    component: FC<any>;
    icon: ReactNode;
    displayName: string;
    description: string;
    sizes: WidgetSize[];
  };
} = {
  Goals: {
    component: Goals,
    icon: <Ionicons name='pie-chart' size={20} color={'#ee9c6e'} />,
    displayName: 'Goals',
    description:
      'The goals widget shows your current activity goals at a glance, throughout the day.',
    sizes: ['small', 'medium', 'large']
  },
  AskAI: {
    component: AskAI,
    icon: <Ionicons name='sparkles' size={20} color={'#926eee'} />,
    displayName: 'Cook AI Suggestions',
    description:
      'This widget will show you different recommendations for things you can ask Cook AI to do throughout the day.',
    sizes: ['small', 'medium', 'large']
  },
  FeaturedRecipe: {
    component: FeaturedRecipe,
    icon: <Ionicons name='star' size={20} color={'#eec16e'} />,
    displayName: 'Featured Recipe',
    description:
      'The featured recipe widget shows you a new recipe every day, handpicked by our team for guaranteed deliciousness.',
    sizes: ['small', 'medium', 'large']
  },
  SuggestedRecipe: {
    component: SuggestedRecipe,
    icon: <Ionicons name='restaurant' size={20} color={'#6ebdee'} />,
    displayName: 'Suggested Recipe',
    description:
      'The suggested recipe widget shows you a new recipe every day, based on your preferences and dietary restrictions.',
    sizes: ['small', 'medium', 'large']
  },
  OngoingRecipe: {
    component: OngoingRecipe,
    icon: <Ionicons name='flame' size={20} color={tw.color('black/55')} />,
    displayName: 'Ongoing Recipe',
    description: '',
    sizes: ['large']
  },
  Reminder: {
    component: Reminder,
    icon: <Ionicons name='alarm' size={20} color={tw.color('black/55')} />,
    displayName: 'Reminder',
    description: '',
    sizes: ['medium']
  },
  ShoppingList: {
    component: ShoppingList,
    icon: <Ionicons name='list' size={20} color={'#ee6e8c'} />,
    displayName: 'Shopping List',
    description:
      'The shopping list widget shows you all the items you added to your list, at a glance.',
    sizes: ['small', 'medium', 'large']
  }
};
