import { Text, View } from 'react-native';
import tw from '@/lib/tailwind';
import HeaderWidgetWrapper from '@/components/header-widget-wrapper';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ProgressChart } from '@/components/react-native-chart-kit';

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
        width={150}
        height={150}
        strokeWidth={14}
        radius={12}
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
        style={{ marginTop: -20, marginLeft: -20, marginBottom: -20 }}
      />
    </View>
  );
}

export default function MediumGoalWidget() {
  return (
    <HeaderWidgetWrapper
      style={tw`flex-row items-center`}
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
    </HeaderWidgetWrapper>
  );
}
