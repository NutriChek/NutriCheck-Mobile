import { Text, View } from 'react-native';
import WidgetWrapper from '@/components/widget-wrapper';
import tw from '@/lib/tailwind';
import { ProgressChart } from '@/components/react-native-chart-kit';

const dataProgress = {
  data: [0.75, 0.75, 0.75],
  colors: [
    'rgba(255, 122, 65, .49)',
    'rgba(123, 76, 255, .49)',
    'rgba(0, 133, 255, .49)'
  ]
};

export default function SmallGoalWidget() {
  return (
    <WidgetWrapper style={tw`aspect-square gap-2`}>
      <View>
        <ProgressChart
          data={dataProgress}
          width={120}
          height={120}
          strokeWidth={9}
          radius={9}
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
      <View style={tw`flex-1 justify-center`}>
        <Text style={tw`pl-2 text-base font-bold text-black/70`}>
          7546 <Text style={tw`text-sm`}>steps</Text>
        </Text>
        <Text style={tw`pl-2 text-base font-bold text-black/70`}>
          1550 <Text style={tw`text-sm`}>kcal eaten</Text>
        </Text>
        <Text style={tw`pl-2 text-base font-bold text-black/70`}>
          270 <Text style={tw`text-sm`}>kcal burned</Text>
        </Text>
      </View>
    </WidgetWrapper>
  );
}
