import withWidget from '@/components/widgets/with-widget';
import LargeAskAiWidget from '@/components/widgets/ask-ai/large-ask-ai-widget';
import SmallAskAIWidget from '@/components/widgets/ask-ai/small-ask-ai-widget';
import MediumAskAiWidget from '@/components/widgets/ask-ai/medium-ask-ai-widget';

const AskAI = withWidget(SmallAskAIWidget, MediumAskAiWidget, LargeAskAiWidget);

export default AskAI;
