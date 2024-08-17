import HomeWrapper from '@/components/home-wrapper';
import { ScrollView, Text, useWindowDimensions, View } from 'react-native';
import tw from '@/lib/tailwind';
import WidgetBase from '@/components/widget-base';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { SymbolView } from 'expo-symbols';
import { rgbaToHex } from '@/lib/util';
import { AbstractChartConfig } from '@/modules/react-native-chart-kit/dist/AbstractChart';
import Caption from '@/components/caption';
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';
import { useRef, useState } from 'react';
import Animated, {
  useAnimatedStyle,
  withTiming
} from 'react-native-reanimated';

const image = require('@/assets/images/color-blur.png');

const dataBar = {
  datasets: [
    {
      data: [70, 90, 70, 80, 60, 10, 20, 30, 20, 70, 80, 60, 85, 70]
    }
  ]
};

const chartConfigBar: AbstractChartConfig = {
  backgroundGradientFromOpacity: 0,
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  barPercentage: 0.2,
  barRadius: 3,
  fillShadowGradientFrom: '#000000',
  fillShadowGradientTo: '#000000',
  fillShadowGradientOpacity: 0.2,
  fillShadowGradientToOpacity: 0.2
};

const graphStyle = {
  marginTop: -15,
  marginLeft: -60,
  marginBottom: -25
};

export default function Goals() {
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
    <HomeWrapper>
      <ScrollView contentContainerStyle={tw`pb-30 pt-32`}>
        <Caption text='Nutrition' style='mx-4 pt-0 text-white' />
        <View style={tw`gap-4`}>
          <WidgetBase
            symbolName='chart.line.uptrend.xyaxis'
            materialIconName='chart-line'
            title='Your dietary goal'
            containerStyle={tw`mx-4`}
          >
            <View style={tw`flex-row`}>
              <View
                style={tw`border-r-black/15 w-1/2 flex-row items-center justify-center gap-3 border-r`}
              >
                <AnimatedCircularProgress
                  size={50}
                  width={12}
                  fill={75}
                  rotation={0}
                  tintColor='#2ecc71aa'
                  backgroundColor='#ffffff80'
                  lineCap='round'
                />
                <View>
                  <Text style={tw`text-base font-bold text-black/80`}>
                    3.2kg lost
                  </Text>
                  <Text style={tw`font-semibold text-black/60`}>
                    out of 5kg
                  </Text>
                </View>
              </View>
              <View
                style={tw`w-1/2 flex-row items-center justify-center gap-3`}
              >
                <AnimatedCircularProgress
                  size={50}
                  width={12}
                  fill={75}
                  rotation={0}
                  tintColor='#2ecc71aa'
                  onAnimationComplete={() => console.log('onAnimationComplete')}
                  backgroundColor='#ffffff80'
                  lineCap='round'
                />
                <View>
                  <Text style={tw`text-base font-bold text-black/80`}>
                    2 weeks
                  </Text>
                  <Text style={tw`font-semibold text-black/60`}>remaining</Text>
                </View>
              </View>
            </View>
          </WidgetBase>
          <View>
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
                >
                  <View style={tw`flex-row px-2`}>
                    <View style={tw`w-1/2 items-center justify-center`}>
                      <AnimatedCircularProgress
                        size={120}
                        width={12}
                        fill={75}
                        rotation={0}
                        tintColor='#2ecc71aa'
                        onAnimationComplete={() =>
                          console.log('onAnimationComplete')
                        }
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
                            tintColor={rgbaToHex(
                              tw.color('black/55') as string
                            )}
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
                            tintColor={rgbaToHex(
                              tw.color('black/55') as string
                            )}
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
                            tintColor={rgbaToHex(
                              tw.color('black/55') as string
                            )}
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
                >
                  <View style={tw`flex-row px-2`}>
                    <View style={tw`w-1/2 items-center justify-center`}>
                      <AnimatedCircularProgress
                        size={120}
                        width={12}
                        fill={75}
                        rotation={0}
                        tintColor='#2ecc71aa'
                        onAnimationComplete={() =>
                          console.log('onAnimationComplete')
                        }
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
                            tintColor={rgbaToHex(
                              tw.color('black/55') as string
                            )}
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
                            tintColor={rgbaToHex(
                              tw.color('black/55') as string
                            )}
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
                            tintColor={rgbaToHex(
                              tw.color('black/55') as string
                            )}
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
                </WidgetBase>
              ]}
              onSnapToItem={(index) => {
                setProgress(index);
              }}
              // onProgressChange={(index) => {
              //   console.log(index);
              // }}
              // onProgressChange={onPressPagination}
              renderItem={({ item, index }) => {
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
          {/*<WidgetBase*/}
          {/*  symbolName='flame.fill'*/}
          {/*  materialIconName='fire'*/}
          {/*  title='Your calorie goal'*/}
          {/*>*/}
          {/*  <View style={tw`flex-row px-2`}>*/}
          {/*    <View style={tw`w-1/2 items-center justify-center`}>*/}
          {/*      <AnimatedCircularProgress*/}
          {/*        size={120}*/}
          {/*        width={12}*/}
          {/*        fill={75}*/}
          {/*        rotation={0}*/}
          {/*        tintColor='#2ecc71aa'*/}
          {/*        onAnimationComplete={() => console.log('onAnimationComplete')}*/}
          {/*        backgroundColor='#ffffff80'*/}
          {/*        lineCap='round'*/}
          {/*      >*/}
          {/*        {() => (*/}
          {/*          <View style={tw`items-center`}>*/}
          {/*            <Text*/}
          {/*              style={tw`text-xl font-bold leading-tight text-black/80`}*/}
          {/*            >*/}
          {/*              1550*/}
          {/*            </Text>*/}
          {/*            <Text*/}
          {/*              style={tw`text-xs font-bold leading-tight text-black/60`}*/}
          {/*            >*/}
          {/*              / 2500 kcal*/}
          {/*            </Text>*/}
          {/*          </View>*/}
          {/*        )}*/}
          {/*      </AnimatedCircularProgress>*/}
          {/*    </View>*/}
          {/*    <View style={tw`w-1/2 items-start pl-4`}>*/}
          {/*      <View style={tw`items-start gap-2`}>*/}
          {/*        <View style={tw`flex-row items-center gap-2`}>*/}
          {/*          <SymbolView*/}
          {/*            name='chart.line.uptrend.xyaxis'*/}
          {/*            size={24}*/}
          {/*            resizeMode='scaleAspectFit'*/}
          {/*            tintColor={rgbaToHex(tw.color('black/55') as string)}*/}
          {/*          />*/}
          {/*          <View>*/}
          {/*            <Text*/}
          {/*              style={tw`text-sm font-semibold leading-tight text-black/60`}*/}
          {/*            >*/}
          {/*              Base goal*/}
          {/*            </Text>*/}
          {/*            <Text*/}
          {/*              style={tw`text-base font-bold leading-tight text-black/80`}*/}
          {/*            >*/}
          {/*              1550 kcal*/}
          {/*            </Text>*/}
          {/*          </View>*/}
          {/*        </View>*/}
          {/*        <View style={tw`flex-row items-center gap-2`}>*/}
          {/*          <SymbolView*/}
          {/*            name='carrot.fill'*/}
          {/*            size={24}*/}
          {/*            resizeMode='scaleAspectFit'*/}
          {/*            tintColor={rgbaToHex(tw.color('black/55') as string)}*/}
          {/*          />*/}
          {/*          <View>*/}
          {/*            <Text*/}
          {/*              style={tw`text-sm font-semibold leading-tight text-black/60`}*/}
          {/*            >*/}
          {/*              Food intake*/}
          {/*            </Text>*/}
          {/*            <Text*/}
          {/*              style={tw`text-base font-bold leading-tight text-black/80`}*/}
          {/*            >*/}
          {/*              1550 kcal*/}
          {/*            </Text>*/}
          {/*          </View>*/}
          {/*        </View>*/}
          {/*        <View style={tw`flex-row items-center gap-2`}>*/}
          {/*          <SymbolView*/}
          {/*            name='flame.fill'*/}
          {/*            size={24}*/}
          {/*            resizeMode='scaleAspectFit'*/}
          {/*            tintColor={rgbaToHex(tw.color('black/55') as string)}*/}
          {/*          />*/}
          {/*          <View>*/}
          {/*            <Text*/}
          {/*              style={tw`text-sm font-semibold leading-tight text-black/60`}*/}
          {/*            >*/}
          {/*              Active energy*/}
          {/*            </Text>*/}
          {/*            <Text*/}
          {/*              style={tw`text-base font-bold leading-tight text-black/80`}*/}
          {/*            >*/}
          {/*              1550 kcal*/}
          {/*            </Text>*/}
          {/*          </View>*/}
          {/*        </View>*/}
          {/*      </View>*/}
          {/*    </View>*/}
          {/*  </View>*/}
          {/*</WidgetBase>*/}
          {/*<WidgetBase*/}
          {/*  symbolName='flame.fill'*/}
          {/*  materialIconName='fire'*/}
          {/*  title='Active energy'*/}
          {/*  rightComponent={*/}
          {/*    <View style={tw`flex-row items-center gap-1`}>*/}
          {/*      <Text style={tw`text-sm font-bold leading-tight text-black/50`}>*/}
          {/*        12:32*/}
          {/*      </Text>*/}
          {/*      <SymbolView*/}
          {/*        name='chevron.right'*/}
          {/*        size={16}*/}
          {/*        tintColor={rgbaToHex(tw.color('black/55') as string)}*/}
          {/*        resizeMode='scaleAspectFit'*/}
          {/*        fallback={*/}
          {/*          <MaterialCommunityIcons*/}
          {/*            name='chevron-right'*/}
          {/*            size={20}*/}
          {/*            color={tw.color('black/55')}*/}
          {/*          />*/}
          {/*        }*/}
          {/*      />*/}
          {/*    </View>*/}
          {/*  }*/}
          {/*>*/}
          {/*  <View style={tw`flex-row items-end justify-between`}>*/}
          {/*    <View style={tw`flex-row items-center gap-3`}>*/}
          {/*      <AnimatedCircularProgress*/}
          {/*        size={50}*/}
          {/*        width={12}*/}
          {/*        fill={75}*/}
          {/*        rotation={0}*/}
          {/*        tintColor='#2ecc71aa'*/}
          {/*        onAnimationComplete={() => console.log('onAnimationComplete')}*/}
          {/*        backgroundColor='#ffffff80'*/}
          {/*        lineCap='round'*/}
          {/*      />*/}
          {/*      <View>*/}
          {/*        <Text style={tw`text-base font-bold text-black/80`}>*/}
          {/*          234 / 300*/}
          {/*        </Text>*/}
          {/*        <Text style={tw`font-semibold text-black/60`}>kcal</Text>*/}
          {/*      </View>*/}
          {/*    </View>*/}
          {/*    <BarChart*/}
          {/*      style={graphStyle}*/}
          {/*      // @ts-ignore*/}
          {/*      data={dataBar}*/}
          {/*      width={200}*/}
          {/*      height={70}*/}
          {/*      withVerticalLabels={false}*/}
          {/*      chartConfig={chartConfigBar}*/}
          {/*      yAxisLabel=''*/}
          {/*      yAxisSuffix=''*/}
          {/*      withInnerLines={false}*/}
          {/*      withHorizontalLabels={false}*/}
          {/*      showBarTops={false}*/}
          {/*      fromZero={true}*/}
          {/*    />*/}
          {/*  </View>*/}
          {/*</WidgetBase>*/}
          {/*<WidgetBase*/}
          {/*  symbolName='figure.walk'*/}
          {/*  materialIconName='walk'*/}
          {/*  title='Steps'*/}
          {/*  rightComponent={*/}
          {/*    <View style={tw`flex-row items-center gap-1`}>*/}
          {/*      <Text style={tw`text-sm font-bold leading-tight text-black/50`}>*/}
          {/*        12:32*/}
          {/*      </Text>*/}
          {/*      <SymbolView*/}
          {/*        name='chevron.right'*/}
          {/*        size={16}*/}
          {/*        tintColor={rgbaToHex(tw.color('black/55') as string)}*/}
          {/*        resizeMode='scaleAspectFit'*/}
          {/*        fallback={*/}
          {/*          <MaterialCommunityIcons*/}
          {/*            name='chevron-right'*/}
          {/*            size={20}*/}
          {/*            color={tw.color('black/55')}*/}
          {/*          />*/}
          {/*        }*/}
          {/*      />*/}
          {/*    </View>*/}
          {/*  }*/}
          {/*>*/}
          {/*  <View style={tw`flex-row items-end justify-between`}>*/}
          {/*    <View style={tw`flex-row items-center gap-3`}>*/}
          {/*      <AnimatedCircularProgress*/}
          {/*        size={50}*/}
          {/*        width={12}*/}
          {/*        fill={75}*/}
          {/*        rotation={0}*/}
          {/*        tintColor='#2ecc71aa'*/}
          {/*        onAnimationComplete={() => console.log('onAnimationComplete')}*/}
          {/*        backgroundColor='#ffffff80'*/}
          {/*        lineCap='round'*/}
          {/*      />*/}
          {/*      <View>*/}
          {/*        <Text style={tw`text-base font-bold text-black/80`}>*/}
          {/*          3214 / 6000*/}
          {/*        </Text>*/}
          {/*        <Text style={tw`font-semibold text-black/60`}>steps</Text>*/}
          {/*      </View>*/}
          {/*    </View>*/}
          {/*    <BarChart*/}
          {/*      style={graphStyle}*/}
          {/*      // @ts-ignore*/}
          {/*      data={dataBar}*/}
          {/*      width={200}*/}
          {/*      height={70}*/}
          {/*      withVerticalLabels={false}*/}
          {/*      chartConfig={chartConfigBar}*/}
          {/*      yAxisLabel=''*/}
          {/*      yAxisSuffix=''*/}
          {/*      withInnerLines={false}*/}
          {/*      withHorizontalLabels={false}*/}
          {/*      showBarTops={false}*/}
          {/*      fromZero={true}*/}
          {/*    />*/}
          {/*  </View>*/}
          {/*</WidgetBase>*/}
          {/*<View style={tw`w-full flex-row gap-4`}>*/}
          {/*  <WidgetBase*/}
          {/*    symbolName='figure.walk'*/}
          {/*    materialIconName='walk'*/}
          {/*    title='Steps'*/}
          {/*    containerStyle={tw`grow aspect-square`}*/}
          {/*    rightComponent={*/}
          {/*      <View style={tw`flex-row items-center gap-1`}>*/}
          {/*        <Text*/}
          {/*          style={tw`text-sm font-bold leading-tight text-black/50`}*/}
          {/*        >*/}
          {/*          12:32*/}
          {/*        </Text>*/}
          {/*        <SymbolView*/}
          {/*          name='chevron.right'*/}
          {/*          size={16}*/}
          {/*          tintColor={rgbaToHex(tw.color('black/55') as string)}*/}
          {/*          resizeMode='scaleAspectFit'*/}
          {/*          fallback={*/}
          {/*            <MaterialCommunityIcons*/}
          {/*              name='chevron-right'*/}
          {/*              size={20}*/}
          {/*              color={tw.color('black/55')}*/}
          {/*            />*/}
          {/*          }*/}
          {/*        />*/}
          {/*      </View>*/}
          {/*    }*/}
          {/*  >*/}
          {/*    <View style={tw`grow`}></View>*/}
          {/*  </WidgetBase>*/}
          {/*  <WidgetBase*/}
          {/*    symbolName='figure.walk'*/}
          {/*    materialIconName='walk'*/}
          {/*    title='Steps'*/}
          {/*    containerStyle={tw`grow aspect-square`}*/}
          {/*    rightComponent={*/}
          {/*      <View style={tw`flex-row items-center gap-1`}>*/}
          {/*        <Text*/}
          {/*          style={tw`text-sm font-bold leading-tight text-black/50`}*/}
          {/*        >*/}
          {/*          12:32*/}
          {/*        </Text>*/}
          {/*        <SymbolView*/}
          {/*          name='chevron.right'*/}
          {/*          size={16}*/}
          {/*          tintColor={rgbaToHex(tw.color('black/55') as string)}*/}
          {/*          resizeMode='scaleAspectFit'*/}
          {/*          fallback={*/}
          {/*            <MaterialCommunityIcons*/}
          {/*              name='chevron-right'*/}
          {/*              size={20}*/}
          {/*              color={tw.color('black/55')}*/}
          {/*            />*/}
          {/*          }*/}
          {/*        />*/}
          {/*      </View>*/}
          {/*    }*/}
          {/*  >*/}
          {/*    <View style={tw`grow`}></View>*/}
          {/*  </WidgetBase>*/}
          {/*  </View>*/}
        </View>
        {/* macros */}
      </ScrollView>
    </HomeWrapper>
  );
}
