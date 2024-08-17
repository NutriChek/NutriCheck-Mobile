import { Text, View } from 'react-native';
import tw from '@/lib/tailwind';
import { ProgressChart } from '../modules/react-native-chart-kit';
import WidgetBase from '@/components/widget-base';

const dataProgress = {
  data: [0.75, 0.75, 0.75],
  colors: [
    'rgba(255, 122, 65, .49)',
    'rgba(123, 76, 255, .49)',
    'rgba(0, 133, 255, .49)'
  ]
};

function ChartContainer() {
  return (
    <View>
      <ProgressChart
        data={dataProgress}
        width={140}
        height={140}
        strokeWidth={13}
        radius={10}
        chartConfig={{
          backgroundGradientFromOpacity: 0,
          backgroundGradientToOpacity: 0,
          color: (opacity: number, index?: number) =>
            index !== undefined
              ? dataProgress.colors[index]
              : 'rgba(0, 0, 0, 1)',
          backgroundColor: 'rgba(255, 255, 255, 1)'
        }}
        hideLegend={true}
        style={{ marginTop: -20, marginLeft: -15, marginBottom: -20 }}
      />
    </View>
  );
}

export default function MediumGoalWidget() {
  return (
    <WidgetBase
      title='Your goals for today'
      symbolName='chart.pie.fill'
      materialIconName='chart-pie'
    >
      <View style={tw`flex-row items-center`}>
        <ChartContainer />
        <View style={tw`flex-1 justify-center`}>
          <Text style={tw`text-base font-bold text-black/60`}>
            7546/10000 steps
          </Text>
          <Text style={tw`text-base font-bold text-black/60`}>
            1550/2500 kcal consumed
          </Text>
          <Text style={tw`text-base font-bold text-black/60`}>
            270/350 kcal burned
          </Text>
        </View>
      </View>
    </WidgetBase>
  );
}
