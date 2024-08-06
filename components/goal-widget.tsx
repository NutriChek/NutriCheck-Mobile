import { Text, View } from 'react-native';
import tw from '@/lib/tailwind';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AbstractChartConfig } from '@/lib/react-native-chart-kit/dist/AbstractChart';
import { BarChart, ProgressChart } from '@/lib/react-native-chart-kit';

const dataProgress = {
  data: [0.75]
};

const dataBar = {
  datasets: [
    {
      data: [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2
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
};

function ChartsContainer({ text, color }: { text: string; color: string }) {
  dataBar.datasets[0].data = dataBar.datasets[0].data.map((value) => value / 200);

  return (
    <View style={tw`w-full flex-row items-center`}>
      <ProgressChart
        data={dataProgress}
        width={85}
        height={85}
        strokeWidth={14}
        radius={27}
        chartConfig={{
          backgroundGradientFromOpacity: 0,
          backgroundGradientToOpacity: 0,
          color: (opacity: number) => color,
        }}
        hideLegend={true}
        style={{ paddingTop: 10, paddingLeft: 5, marginRight: 8 }}
      />
      <View style={tw`flex-1`}>
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

export default function GoalWidget() {
  return (
    <View>
      <View style={tw`rounded-3xl bg-white/80 p-3`}>
        <View style={tw`flex-row items-center`}>
          <Ionicons name='pie-chart' size={24} color={tw.color('black/50')} />
          <Text style={tw`pl-2 text-lg font-bold text-black/60`}>
            Your goals for today
          </Text>
        </View>
        <ChartsContainer
          color='rgba(0, 133, 255, .49)'
          text='270/350 kcal burned'
        />
        <ChartsContainer
          color='rgba(255, 122, 65, .49)'
          text='7546/10000 steps'
        />
        <ChartsContainer
          color='rgba(123, 76, 255, .49)'
          text='1550/2500 kcal consumed'
        />
      </View>
    </View>
  );
}
