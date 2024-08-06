import { Text, View } from 'react-native';
import tw from '@/lib/tailwind';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import WidgetWrapper from './widget-wrapper';
import AskAISmallWidget from './ask-ai-small';
import ShoppingSmallWidget from './shopping-widget-small';


export default function ShoppingWidget({ cards }: { cards: string[] }) {
  return (
    <>
      <WidgetWrapper
        title='Shopping List'
        icon={
          <Ionicons
            name='list'
            size={20}
            color={tw.color('black/55')}
          />
        }
      >
        <View style={tw`gap-3`}>
          {cards.map((card, index) => (
            <ShoppingSmallWidget
              key={index}
              text={card[index]}
            />
          ))}
        </View>
      </WidgetWrapper>
    </>
  );
}
