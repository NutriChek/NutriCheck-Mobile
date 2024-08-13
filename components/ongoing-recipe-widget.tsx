import tw from '@/lib/tailwind';
import HeaderWidgetWrapper from '@/components/header-widget-wrapper';
import { Text, View } from 'react-native';
import { Image } from 'expo-image';
import { ProgressChart } from '../modules/react-native-chart-kit';
import { SymbolView } from 'expo-symbols';

function ImageDetailsWrapper() {
  return (
    <View style={tw`flex-row items-center pb-2 pl-4 pt-1`}>
      <Image
        source={require('../assets/images/sarmale.png')}
        style={tw`h-18 w-18 mr-4 rounded-2xl`}
      />
      <View style={tw`flex-1`}>
        <Text style={tw`text-base font-bold text-black/70`}>
          Sarmale de post
        </Text>
        <Text style={tw`text-sm font-bold text-black/60`}>
          by Jamila Cuisine
        </Text>
        <Text style={tw`text-black/45 text-[12px] font-bold`}>
          350kcal | 20g protein | 7g fat | 100g carbs
        </Text>
      </View>
    </View>
  );
}

const image = require('../assets/images/logo-mono.png');

const dataProgress = {
  data: [0.25]
};

export default function OngoingRecipeWidget() {
  return (
    <HeaderWidgetWrapper
      title='Ongoing recipe'
      icon={<Image source={image} style={tw`h-5 w-5 opacity-50`} />}
    >
      <ImageDetailsWrapper />
      <Text style={tw`pl-4 pt-2 text-base font-bold text-black/70`}>
        Current step
      </Text>
      <View style={tw`flex-row items-center pl-4 pt-2`}>
        <SymbolView
          name='cooktop.fill'
          size={35}
          tintColor='black'
          resizeMode='scaleAspectFill'
        />
        <View style={tw`pl-4`}>
          <Text style={tw`text-[15px] font-bold text-black/60`}>
            Frying the vegetables
          </Text>
          <View style={tw`flex-row items-center`}>
            <ProgressChart
              data={dataProgress}
              width={35}
              height={35}
              strokeWidth={7}
              radius={10}
              chartConfig={{
                backgroundGradientFromOpacity: 0,
                backgroundGradientToOpacity: 0,
                color: (opacity = 0.49) => `rgba(88, 201, 86, ${opacity})`
              }}
              hideLegend={true}
            />
            <Text style={tw`text-black/45 pl-2 text-[12px] font-bold`}>
              3:14 left
            </Text>
          </View>
        </View>
      </View>
      <View style={tw`flex-row items-center pb-2`}>
        <Text style={tw`pl-4 pt-2 text-base font-bold text-black/70`}>
          Next up •
        </Text>
        <Text style={tw`pl-1 pt-2 text-[15px] font-bold text-black/60`}>
          Mixing up the dough
        </Text>
      </View>
    </HeaderWidgetWrapper>
  );
}
