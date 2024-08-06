import { Text, View } from 'react-native';
import tw from '@/lib/tailwind';
import { AbstractChartConfig } from '@/lib/react-native-chart-kit/dist/AbstractChart';
import { BarChart, ProgressChart } from '@/lib/react-native-chart-kit';
import HeaderWidgetWrapper from '@/components/header-widget-wrapper';
import Ionicons from '@expo/vector-icons/Ionicons';

const dataProgress = {
  data: [0.75]
};

const dataBar = {
  datasets: [
    {
      data: [
        70, 90, 70, 80, 60, 10, 20, 30, 20, 70, 80, 60, 85, 70, 90, 60, 30, 50,
        60, 20
      ]
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
  marginBottom: -15
};

function ChartsContainer({ text, color }: { text: string; color: string }) {
  return (
    <View style={tw`w-full flex-row items-center gap-2`}>
      <ProgressChart
        data={dataProgress}
        width={80}
        height={80}
        strokeWidth={14}
        radius={26}
        chartConfig={{
          backgroundGradientFromOpacity: 0,
          backgroundGradientToOpacity: 0,
          color: (_opacity: number) => color
        }}
        hideLegend={true}
      />
      <View style={tw`justify-between flex-1`}>
        <Text style={tw`pl-2 text-lg font-bold text-black/70`}>{text}</Text>
        <BarChart
          style={graphStyle}
          // @ts-ignore
          data={dataBar}
          width={250}
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
    </View>
  );
}

export default function LargeGoalWidget() {
  return (
    <HeaderWidgetWrapper
      title='Your goals for today'
      icon={
        <Ionicons
          name='pie-chart'
          size={24}
          color={tw.color('black/50')}
          style={tw`pb-3`}
        />
      }
    >
      <ChartsContainer
        text='7546/10000 steps'
        color='rgba(255, 122, 65, .49)'
      />
      <ChartsContainer
        text='1550/2500 kcal consumed'
        color='rgba(123, 76, 255, .49)'
      />
      <ChartsContainer
        text='270/350 kcal burned'
        color='rgba(0, 133, 255, .49)'
      />
    </HeaderWidgetWrapper>
  );
}
