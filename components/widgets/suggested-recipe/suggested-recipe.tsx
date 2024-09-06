import withWidget from '@/components/widgets/with-widget';
import MediumSuggestedRecipeWidget from '@/components/widgets/suggested-recipe/medium-suggested-recipe-widget';
import LargeSuggestedRecipeWidget from '@/components/widgets/suggested-recipe/large-suggested-recipe-widget';

const SuggestedRecipe = withWidget(
  null,
  MediumSuggestedRecipeWidget,
  LargeSuggestedRecipeWidget
);

export default SuggestedRecipe;
