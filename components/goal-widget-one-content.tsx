import { Text, View } from 'react-native';
import tw from '@/lib/tailwind';
import { ProgressChart } from '@/lib/react-native-chart-kit';
import WidgetWrapper from '@/components/widget-wrapper';

const dataProgress = {
  data: [0.75, 0.75, 0.75],
  colors: ['rgba(255, 122, 65, .49)', 'rgba(123, 76, 255, .49)', 'rgba(0, 133, 255, .49)']
};

function ChartContainer() {
  return (
    <View>
      <ProgressChart
        data={dataProgress}
        width={140}
        height={140}
        strokeWidth={13}
        radius={16}
        chartConfig={{
          backgroundGradientFromOpacity: 0,
          backgroundGradientToOpacity: 0,
          color: (opacity: number, index?: number) => index !== undefined ? dataProgress.colors[index] : 'rgba(0, 0, 0, 1)',
          backgroundColor: 'rgba(255, 255, 255, 1)'
        }}
        hideLegend={true}
      />
    </View>
  );
}

export default function GoalWidgetOneContent() {
  return (
    <WidgetWrapper style={tw`flex-row`}>
      <ChartContainer />
      <View style={tw`flex-1 justify-center`}>
        <Text style={tw`pl-2 text-lg font-bold text-black/70`}>
          7546/10000 steps
        </Text>
        <Text style={tw`pl-2 text-lg font-bold text-black/70`}>
          1550/2500 kcal consumed
        </Text>
        <Text style={tw`pl-2 text-lg font-bold text-black/70`}>
          270/350 kcal burned
        </Text>
      </View>
    </WidgetWrapper>
  );
}

