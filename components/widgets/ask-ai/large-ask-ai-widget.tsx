import { View } from 'react-native';
import tw from '@/lib/tailwind';
import Ionicons from '@expo/vector-icons/Ionicons';
import SuggestionCard from '../../suggestion-card';
import { router } from 'expo-router';
import HeaderWidgetWrapper from '@/components/header-widget-wrapper';
import WidgetBase from '@/components/widget-base';

const backgrounds = [
  require('@/assets/images/color-blur.png'),
  require('@/assets/images/color-blur2.png'),
  require('@/assets/images/color-blur3.png')
];

export default function LargeAskAiWidget() {
  const cards = [
    'What can I cook with these ingredients?',
    'What can I cook with these ingredients?',
    'What can I cook with these ingredients?'
  ];
  return (
    <>
      <WidgetBase
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
      </WidgetBase>
    </>
  );
}
