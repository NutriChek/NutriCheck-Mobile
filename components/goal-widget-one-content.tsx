import { Text, View } from 'react-native';
import tw from '@/lib/tailwind';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ProgressChart } from '@/lib/react-native-chart-kit';

const dataProgress = {
  data: [0.75, 0.75, 0.75]
};

function ChartContainer() {
  return (
    <View style={tw`flex-1`}>
      <ProgressChart
        data={dataProgress}
        width={140}
        height={140}
        strokeWidth={13}
        radius={10}
        chartConfig={{
          backgroundGradientFromOpacity: 0,
          backgroundGradientToOpacity: 0,
          color: (opacity: number) => `rgba(0, 133, 255, ${opacity})`,
          backgroundColor: 'rgba(255, 255, 255, 1)'
        }}
        hideLegend={true}
      />
    </View>
  );
}

export default function GoalWidgetOneContent() {
  return (
    <View>
      <View style={tw`rounded-3xl bg-white/80 p-3`}>
        <View style={tw`flex-row items-center`}>
          <Ionicons name='pie-chart' size={24} color={tw.color('black/50')} />
          <Text style={tw`pl-2 text-lg font-bold text-black/60`}>
            Your goals for today
          </Text>
        </View>
        <View style={tw`flex-row`}>
          <ChartContainer />
          <View style={tw`flex-1`}>
            <Text style={tw`pl-2 text-lg font-bold text-black/70`}>
              270/350 kcal burned
            </Text>
            <Text style={tw`pl-2 text-lg font-bold text-black/70`}>
              3/5 workouts completed
            </Text>
            <Text style={tw`pl-2 text-lg font-bold text-black/70`}>
              2/3 meals eaten
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
