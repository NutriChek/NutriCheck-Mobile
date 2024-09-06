import SmallGoalWidget from '@/components/widgets/goals/small-goal-widget';
import MediumGoalWidget from '@/components/widgets/goals/medium-goal-widget';
import LargeGoalWidget from '@/components/widgets/goals/large-goal-widget';
import withWidget from '@/components/widgets/with-widget';

const Goals = withWidget(SmallGoalWidget, MediumGoalWidget, LargeGoalWidget);

export default Goals;
