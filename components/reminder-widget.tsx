import tw from '@/lib/tailwind';
import HeaderWidgetWrapper from '@/components/header-widget-wrapper';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ImageBackground, Pressable, Text, View } from 'react-native';
import { ProgressChart } from '../modules/react-native-chart-kit';
import { router } from 'expo-router';
import { androidRipple, rgbaToHex } from '@/lib/util';
import { SymbolView } from 'expo-symbols';
import { MaterialIcons } from 'expo-vector-icons';
import React from 'react';

const dataProgress = {
  data: [0.25]
};

const image = require('../assets/images/color-blur.png');

function Suggestion({
  text,
  image,
  onPress
}: {
  text: string;
  image: any;
  onPress: () => void;
}) {
  return (
    <View style={tw`overflow-hidden rounded-[20px] pl-3 pt-2`}>
      <View style={tw.style(`w-full flex-row overflow-hidden rounded-[20px]`)}>
        <ImageBackground
          resizeMode='stretch'
          source={image}
          style={tw`grow flex-row items-center justify-between py-2 pl-3 pr-2`}
        >
          <View style={tw`absolute inset-0 bg-white opacity-40`} />
          <Text
            style={tw`flex-1 flex-wrap text-sm font-bold leading-tight text-black/60`}
          >
            {text}
          </Text>
          <Pressable
            onPress={onPress}
            android_ripple={androidRipple}
            style={tw`items-center justify-center rounded-full bg-black/60 px-3.5 py-1`}
          >
            <SymbolView
              name='arrow.forward'
              resizeMode='scaleAspectFill'
              weight='semibold'
              size={20}
              tintColor={rgbaToHex(tw.color('white/80') as string)}
              fallback={
                <MaterialIcons
                  name='arrow-forward'
                  size={20}
                  color={tw.color('white/80')}
                />
              }
            />
          </Pressable>
        </ImageBackground>
      </View>
    </View>
  );
}

export default function ReminderWidget() {
  return (
    <HeaderWidgetWrapper
      title='Low calories'
      icon={
        <Ionicons name='alert-circle' size={20} color={tw.color('black/50')} />
      }
    >
      <View style={tw`flex-row`}>
        <ProgressChart
          data={dataProgress}
          width={100}
          height={100}
          strokeWidth={18}
          radius={30}
          chartConfig={{
            backgroundGradientFromOpacity: 0,
            backgroundGradientToOpacity: 0,
            color: (opacity = 0.49) => `rgba(255, 56, 56, ${opacity})`
          }}
          hideLegend={true}
        />
        <View style={tw`flex-1`}>
          <Text style={tw`pl-3 text-sm font-bold text-black/70`}>
            It’s 14:30 and you’ve only eaten 300 kcal. Maybe try eating
            something?
          </Text>
          <Suggestion
            text='Get suggested recipes'
            image={image}
            onPress={() => {
              router.replace('/page');
            }}
          />
        </View>
      </View>
    </HeaderWidgetWrapper>
  );
}
