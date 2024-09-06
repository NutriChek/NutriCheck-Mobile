import withWidget from '@/components/widgets/with-widget';
import SmallFeaturedRecipeWidget from '@/components/widgets/featured-recipe/small-featured-recipe-widget';
import MediumFeaturedRecipeWidget from '@/components/widgets/featured-recipe/medium-featured-recipe-widget';
import LargeFeaturedRecipeWidget from '@/components/widgets/featured-recipe/large-featured-recipe-widget';

const FeaturedRecipe = withWidget(
  SmallFeaturedRecipeWidget,
  MediumFeaturedRecipeWidget,
  LargeFeaturedRecipeWidget
);

export default FeaturedRecipe;
