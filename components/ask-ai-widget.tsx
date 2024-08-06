import { View } from 'react-native';
import tw from '@/lib/tailwind';
import Ionicons from '@expo/vector-icons/Ionicons';
import SuggestionCard from './suggestion-card';
import { router } from 'expo-router';
import HeaderWidgetWrapper from '@/components/header-widget-wrapper';

const backgrounds = [
  require('../assets/images/color-blur.png'),
  require('../assets/images/color-blur2.png'),
  require('../assets/images/color-blur3.png')
];

export default function AskAIWidget({ cards }: { cards: string[] }) {
  return (
    <>
      <HeaderWidgetWrapper
        title='Ask Cook AI'
        icon={
          <Ionicons name='sparkles' size={20} color={tw.color('black/55')} />
        }
      >
        <View style={tw`gap-3`}>
          {cards.map((card, index) => (
            <SuggestionCard
              key={index}
              text={card}
              image={backgrounds[index % backgrounds.length]}
              onPress={() => {
                router.replace('/page');
              }}
            />
          ))}
        </View>
      </HeaderWidgetWrapper>
    </>
  );
}
