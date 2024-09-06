import withWidget from '@/components/widgets/with-widget';
import SmallShoppingWidget from '@/components/widgets/shopping-list/small-shopping-list-widget';
import MediumShoppingWidget from '@/components/widgets/shopping-list/medium-shopping-list-widget';
import LargeShoppingWidget from '@/components/widgets/shopping-list/large-shopping-list-widget';

const ShoppingList = withWidget(
  SmallShoppingWidget,
  MediumShoppingWidget,
  LargeShoppingWidget
);

export default ShoppingList;
