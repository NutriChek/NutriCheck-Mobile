import withWidget from '@/components/widgets/with-widget';
import MediumSuggestedRecipeWidget from '@/components/widgets/suggested-recipe/medium-suggested-recipe-widget';
import LargeSuggestedRecipeWidget from '@/components/widgets/suggested-recipe/large-suggested-recipe-widget';
import SmallSuggestedRecipeWidget from '@/components/widgets/suggested-recipe/small-suggested-recipe-widget';

const SuggestedRecipe = withWidget(
  SmallSuggestedRecipeWidget,
  MediumSuggestedRecipeWidget,
  LargeSuggestedRecipeWidget
);

export default SuggestedRecipe;
