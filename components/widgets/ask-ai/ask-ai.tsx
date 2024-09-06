import withWidget from '@/components/widgets/with-widget';
import AskAIWidget from '@/components/widgets/ask-ai/ask-ai-widget';
import SmallAskAIWidget from '@/components/widgets/ask-ai/small-ask-ai-widget';

const AskAI = withWidget(SmallAskAIWidget, null, AskAIWidget);

export default AskAI;
