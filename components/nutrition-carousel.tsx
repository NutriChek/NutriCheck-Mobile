import { Text, useWindowDimensions, View } from 'react-native';
import { useRef, useState } from 'react';
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import tw from '@/lib/tailwind';
import WidgetBase from '@/components/widgets/widget-base';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { SymbolView } from 'expo-symbols';
import { rgbaToHex } from '@/lib/util';
import Progress from 'react-native-progress';

export default function NutritionCarousel() {
  const { width } = useWindowDimensions();
  const ref = useRef<ICarouselInstance>(null);

  const [progress, setProgress] = useState(0);

  const animatedProgressStyle1 = useAnimatedStyle(() => {
    return {
      opacity: withTiming(progress === 0 ? 1 : 0.5)
    };
  });
  const animatedProgressStyle2 = useAnimatedStyle(() => {
    return {
      opacity: withTiming(progress === 1 ? 1 : 0.5)
    };
  });

  return (
    <View style={tw`gap-2`}>
      <Carousel
        ref={ref}
        vertical={false}
        loop={false}
        width={width - 16}
        height={205}
        style={tw`w-full`}
        mode='parallax'
        modeConfig={{
          parallaxScrollingScale: 1,
          parallaxScrollingOffset: 8
        }}
        data={[
          <WidgetBase
            symbolName='flame.fill'
            materialIconName='fire'
            title='Your calorie goal'
            containerStyle={tw`h-full`}
          >
            <View style={tw`flex-row px-2`}>
              <View style={tw`w-1/2 items-center justify-center`}>
                <AnimatedCircularProgress
                  size={120}
                  width={12}
                  fill={75}
                  rotation={0}
                  tintColor='#2ecc71aa'
                  backgroundColor='#ffffff80'
                  lineCap='round'
                >
                  {() => (
                    <View style={tw`items-center`}>
                      <Text
                        style={tw`text-xl font-bold leading-tight text-black/80`}
                      >
                        1550
                      </Text>
                      <Text
                        style={tw`text-xs font-bold leading-tight text-black/60`}
                      >
                        / 2500 kcal
                      </Text>
                    </View>
                  )}
                </AnimatedCircularProgress>
              </View>
              <View style={tw`w-1/2 items-start pl-4`}>
                <View style={tw`items-start gap-2`}>
                  <View style={tw`flex-row items-center gap-2`}>
                    <SymbolView
                      name='chart.line.uptrend.xyaxis'
                      size={24}
                      resizeMode='scaleAspectFit'
                      tintColor={rgbaToHex(tw.color('black/55') as string)}
                    />
                    <View>
                      <Text
                        style={tw`text-sm font-semibold leading-tight text-black/60`}
                      >
                        Base goal
                      </Text>
                      <Text
                        style={tw`text-base font-bold leading-tight text-black/80`}
                      >
                        1550 kcal
                      </Text>
                    </View>
                  </View>
                  <View style={tw`flex-row items-center gap-2`}>
                    <SymbolView
                      name='carrot.fill'
                      size={24}
                      resizeMode='scaleAspectFit'
                      tintColor={rgbaToHex(tw.color('black/55') as string)}
                    />
                    <View>
                      <Text
                        style={tw`text-sm font-semibold leading-tight text-black/60`}
                      >
                        Food intake
                      </Text>
                      <Text
                        style={tw`text-base font-bold leading-tight text-black/80`}
                      >
                        1550 kcal
                      </Text>
                    </View>
                  </View>
                  <View style={tw`flex-row items-center gap-2`}>
                    <SymbolView
                      name='flame.fill'
                      size={24}
                      resizeMode='scaleAspectFit'
                      tintColor={rgbaToHex(tw.color('black/55') as string)}
                    />
                    <View>
                      <Text
                        style={tw`text-sm font-semibold leading-tight text-black/60`}
                      >
                        Active energy
                      </Text>
                      <Text
                        style={tw`text-base font-bold leading-tight text-black/80`}
                      >
                        1550 kcal
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </WidgetBase>,
          <WidgetBase
            symbolName='flame.fill'
            materialIconName='fire'
            title='Your calorie goal'
            containerStyle={tw`h-full`}
          >
            <View
              style={tw`grow flex-row items-center justify-center gap-4 px-2`}
            >
              <View style={tw`w-1/3 items-stretch justify-center gap-1`}>
                <Text
                  style={tw`text-center text-lg font-bold leading-tight text-black/80`}
                >
                  Protein
                </Text>
                <Text
                  style={tw`text-center text-xs font-bold leading-tight text-black/60`}
                >
                  30 / 50g
                </Text>
                <Progress.Bar
                  progress={0.3}
                  width={null}
                  borderWidth={0}
                  unfilledColor={'#ffffff80'}
                  color={'#2ecc71aa'}
                  height={10}
                  borderRadius={100}
                />
              </View>
              <AnimatedCircularProgress
                size={width / 4}
                width={12}
                fill={75}
                rotation={0}
                tintColor='#2ecc71aa'
                backgroundColor='#ffffff80'
                lineCap='round'
              >
                {() => (
                  <View style={tw`items-center`}>
                    <Text
                      style={tw`text-xl font-bold leading-tight text-black/80`}
                    >
                      1550
                    </Text>
                    <Text
                      style={tw`text-xs font-bold leading-tight text-black/60`}
                    >
                      / 2500 kcal
                    </Text>
                  </View>
                )}
              </AnimatedCircularProgress>
              <AnimatedCircularProgress
                size={width / 4}
                width={12}
                fill={75}
                rotation={0}
                tintColor='#2ecc71aa'
                backgroundColor='#ffffff80'
                lineCap='round'
              >
                {() => (
                  <View style={tw`items-center`}>
                    <Text
                      style={tw`text-xl font-bold leading-tight text-black/80`}
                    >
                      1550
                    </Text>
                    <Text
                      style={tw`text-xs font-bold leading-tight text-black/60`}
                    >
                      / 2500 kcal
                    </Text>
                  </View>
                )}
              </AnimatedCircularProgress>
              <AnimatedCircularProgress
                size={width / 4}
                width={12}
                fill={75}
                rotation={0}
                tintColor='#2ecc71aa'
                backgroundColor='#ffffff80'
                lineCap='round'
              >
                {() => (
                  <View style={tw`items-center`}>
                    <Text
                      style={tw`text-xl font-bold leading-tight text-black/80`}
                    >
                      1550
                    </Text>
                    <Text
                      style={tw`text-xs font-bold leading-tight text-black/60`}
                    >
                      / 2500 kcal
                    </Text>
                  </View>
                )}
              </AnimatedCircularProgress>
            </View>
          </WidgetBase>
        ]}
        onSnapToItem={(index) => {
          setProgress(index);
        }}
        renderItem={({ item }) => {
          return <View style={tw`ml-4 flex-1`}>{item}</View>;
        }}
      />
      <View style={tw`flex-row justify-center gap-1`}>
        <Animated.View
          style={[
            tw.style(`h-2 w-2 rounded-full bg-white`),
            animatedProgressStyle1
          ]}
        />
        <Animated.View
          style={[
            tw.style(`h-2 w-2 rounded-full bg-white`),
            animatedProgressStyle2
          ]}
        />
      </View>
    </View>
  );
}
