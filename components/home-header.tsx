import { SafeAreaView, Text, View } from 'react-native';
import tw from '@/lib/tailwind';
import { SymbolView } from 'expo-symbols';
import { rgbaToHex } from '@/lib/util';
import { MaterialIcons } from 'expo-vector-icons';
import { Image } from 'expo-image';
import BaseButton from '@/components/base-button';
import { VariableBlurView } from '@/components/blur-view';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeHeader() {
  return (
    <>
      <VariableBlurView
        style={{
          ...tw`absolute left-0 right-0 top-0 h-32 w-full`
        }}
        maxBlurRadius={5}
      />
      <LinearGradient
        colors={['#000000aa', 'transparent']}
        style={tw`absolute left-0 right-0 top-0 h-32 w-full`}
      />
      <SafeAreaView>
        <View style={tw`flex-row items-center justify-between px-4 pt-3`}>
          <Text style={tw`font-brand text-2xl font-semibold text-white`}>
            Good morning, Alex
          </Text>
          <View style={tw`flex-row gap-3`}>
            <View style={tw`overflow-hidden rounded-full`}>
              <BaseButton
                style={tw`aspect-square items-center justify-center rounded-full bg-white/70 p-2`}
              >
                <SymbolView
                  name='magnifyingglass'
                  size={16}
                  style={tw`font-bold`}
                  weight='bold'
                  tintColor={rgbaToHex(tw.color('black/70') as string)}
                  fallback={
                    <MaterialIcons
                      name='search'
                      size={16}
                      color={rgbaToHex(tw.color('black/70') as string)}
                    />
                  }
                />
              </BaseButton>
            </View>
            <View style={tw`overflow-hidden rounded-full`}>
              <BaseButton
                style={tw`aspect-square items-center justify-center rounded-full bg-white/70`}
              >
                <Image
                  source={require('@/assets/images/profile.jpeg')}
                  style={tw`h-8 w-8 rounded-full`}
                />
              </BaseButton>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
