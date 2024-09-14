import HomeWrapper from '@/components/home-wrapper';
import {
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  View
} from 'react-native';
import tw from '@/lib/tailwind';
import WidgetBase from '@/components/widgets/widget-base';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { SymbolView } from 'expo-symbols';
import { androidRipple, rgbaToHex } from '@/lib/util';
import { AbstractChartConfig } from '@/modules/react-native-chart-kit/dist/AbstractChart';
import Caption from '@/components/caption';
import * as Progress from 'react-native-progress';
import { MaterialCommunityIcons } from 'expo-vector-icons';
import { BarChart } from '@/modules/react-native-chart-kit';

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
  return (
    <HomeWrapper>
      <ScrollView contentContainerStyle={tw`pb-32 pt-32 px-4`}>
        <Caption text='Nutrition' style='pt-0 text-white' />
        <View style={tw`gap-4`}>
          <View style={tw`flex-1 overflow-hidden rounded-[20px]`}>
            <Pressable
              onPress={() => {}}
              android_ripple={androidRipple}
              style={({ pressed }) => tw.style(pressed && 'ios:opacity-80')}
            >
              <ImageBackground
                resizeMode='stretch'
                source={image}
                style={tw.style(`flex-row items-center gap-2 px-4 py-3`)}
              >
                <SymbolView
                  name='fork.knife'
                  size={32}
                  resizeMode='scaleAspectFit'
                  tintColor={rgbaToHex(tw.color('black/50') as string)}
                  fallback={
                    <MaterialCommunityIcons
                      name={'silverware-fork-knife'}
                      size={32}
                      color={tw.color('black/50')}
                    />
                  }
                />
                <View style={tw`grow gap-2`}>
                  <View style={tw`grow flex-row items-center justify-between`}>
                    <View>
                      <Text
                        style={tw`text-black/65 text-lg font-bold leading-tight`}
                      >
                        Log a meal
                      </Text>
                      <Text style={tw`font-semibold text-black/60`}>
                        1000 / 3200 kcal
                      </Text>
                    </View>
                    <SymbolView
                      name='arrow.forward'
                      resizeMode='scaleAspectFit'
                      weight='semibold'
                      size={20}
                      tintColor={rgbaToHex(tw.color('black/50') as string)}
                    />
                  </View>
                </View>
              </ImageBackground>
            </Pressable>
          </View>
          <WidgetBase
            title='Your dietary goal'
            icon={
              <SymbolView
                name='chart.line.uptrend.xyaxis'
                size={20}
                resizeMode='scaleAspectFit'
                tintColor={rgbaToHex(tw.color('black/50') as string)}
                fallback={
                  <MaterialCommunityIcons
                    name='chart-line'
                    size={20}
                    color={tw.color('black/50')}
                  />
                }
              />
            }
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

          <WidgetBase
            title='Your calorie goal'
            icon={
              <SymbolView
                name='flame.fill'
                size={20}
                resizeMode='scaleAspectFit'
                tintColor={rgbaToHex(tw.color('black/50') as string)}
                fallback={
                  <MaterialCommunityIcons
                    name='fire'
                    size={20}
                    color={tw.color('black/50')}
                  />
                }
              />
            }
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
          </WidgetBase>
          <WidgetBase>
            <View style={tw`flex-row items-center justify-center gap-4 px-2`}>
              {['Protein', 'Carbs', 'Fat'].map((value, index) => (
                <View key={index} style={tw`grow items-stretch justify-center`}>
                  <Text
                    style={tw`text-center text-base font-bold leading-tight text-black/80`}
                  >
                    {value}
                  </Text>
                  <Text
                    style={tw`pb-1 text-center text-xs font-bold leading-tight text-black/60`}
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
              ))}
            </View>
          </WidgetBase>

          <Caption text='Activity' style='pb-0 pt-0 text-white' />
          <WidgetBase
            title='Steps'
            icon={
              <SymbolView
                name='figure.walk'
                size={20}
                resizeMode='scaleAspectFit'
                tintColor={rgbaToHex(tw.color('black/50') as string)}
                fallback={
                  <MaterialCommunityIcons
                    name='walk'
                    size={20}
                    color={tw.color('black/50')}
                  />
                }
              />
            }
            rightComponent={
              <View style={tw`flex-row items-center gap-1`}>
                <Text style={tw`text-sm font-bold leading-tight text-black/50`}>
                  12:32
                </Text>
                <SymbolView
                  name='chevron.right'
                  size={16}
                  tintColor={rgbaToHex(tw.color('black/55') as string)}
                  resizeMode='scaleAspectFit'
                  fallback={
                    <MaterialCommunityIcons
                      name='chevron-right'
                      size={20}
                      color={tw.color('black/55')}
                    />
                  }
                />
              </View>
            }
          >
            <View style={tw`flex-row items-end justify-between`}>
              <View style={tw`flex-row items-center gap-3`}>
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
                    3214 / 6000
                  </Text>
                  <Text style={tw`font-semibold text-black/60`}>steps</Text>
                </View>
              </View>
              <BarChart
                style={graphStyle}
                // @ts-ignore
                data={dataBar}
                width={200}
                height={70}
                withVerticalLabels={false}
                chartConfig={chartConfigBar}
                yAxisLabel=''
                yAxisSuffix=''
                withInnerLines={false}
                withHorizontalLabels={false}
                showBarTops={false}
                fromZero={true}
              />
            </View>
          </WidgetBase>
          <WidgetBase
            title='Steps'
            icon={
              <SymbolView
                name='figure.walk'
                size={20}
                resizeMode='scaleAspectFit'
                tintColor={rgbaToHex(tw.color('black/50') as string)}
                fallback={
                  <MaterialCommunityIcons
                    name='walk'
                    size={20}
                    color={tw.color('black/50')}
                  />
                }
              />
            }
            rightComponent={
              <View style={tw`flex-row items-center gap-1`}>
                <Text style={tw`text-sm font-bold leading-tight text-black/50`}>
                  12:32
                </Text>
                <SymbolView
                  name='chevron.right'
                  size={16}
                  tintColor={rgbaToHex(tw.color('black/55') as string)}
                  resizeMode='scaleAspectFit'
                  fallback={
                    <MaterialCommunityIcons
                      name='chevron-right'
                      size={20}
                      color={tw.color('black/55')}
                    />
                  }
                />
              </View>
            }
          >
            <View style={tw`flex-row items-end justify-between`}>
              <View style={tw`flex-row items-center gap-3`}>
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
                    3214 / 6000
                  </Text>
                  <Text style={tw`font-semibold text-black/60`}>steps</Text>
                </View>
              </View>
              <BarChart
                style={graphStyle}
                // @ts-ignore
                data={dataBar}
                width={200}
                height={70}
                withVerticalLabels={false}
                chartConfig={chartConfigBar}
                yAxisLabel=''
                yAxisSuffix=''
                withInnerLines={false}
                withHorizontalLabels={false}
                showBarTops={false}
                fromZero={true}
              />
            </View>
          </WidgetBase>
        </View>
      </ScrollView>
    </HomeWrapper>
  );
}
