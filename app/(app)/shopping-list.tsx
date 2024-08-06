import {
  Button,
  ImageBackground,
  ScrollView,
  StatusBar,
  View,
  Text
} from 'react-native';
import tw from '@/lib/tailwind';
import WelcomeCard from '@/components/welcome-card';
import WidgetWrapper from '@/components/widget-wrapper';
import Ionicons from '@expo/vector-icons/Ionicons';
import ShoppingWidget from '@/components/shopping-list-widget';
import ShoppingSmallWidget from '@/components/shopping-widget-small';

const image = require('../../assets/images/home-background.png');

export default function HomeScreen() {
  return (
    <>
      <StatusBar barStyle='dark-content' />
      <View style={tw`grow bg-[#2E2E2E]`}>
        <ImageBackground resizeMode='cover' source={image} style={tw`grow`}>
          <ScrollView style={tw`p-4`}>
            <View style={tw`gap-4`}>
              <WelcomeCard />

              <View style={tw`flex-row justify-between gap-4`}>
                <View>
                  <ShoppingWidget
                    cards={['Olympus Milk', 'Coca Cola Zero', 'Lays Chips', 'MYlka Chocolate']}
                  ></ShoppingWidget>
                </View>
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    </>
  );
}
