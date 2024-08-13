import { SFSymbols5_0 } from 'sf-symbols-typescript';
import { VariableBlurView } from '../modules/blur-view';
import { Platform, Pressable, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { SymbolView } from 'expo-symbols';
import { rgbaToHex } from '@/lib/util';
import Ionicons from '@expo/vector-icons/Ionicons';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import tw from '@/lib/tailwind';

export default function TabBar(props: BottomTabBarProps) {
  const tabs: {
    symbolName: SFSymbols5_0;
    materialIconName: string;
  }[] = [
    {
      symbolName: 'house.fill',
      materialIconName: 'home'
    },
    {
      symbolName: 'sparkles',
      materialIconName: 'sparkles'
    },
    {
      symbolName: 'fork.knife',
      materialIconName: 'restaurant'
    },
    {
      symbolName: 'dumbbell.fill',
      materialIconName: 'body'
    }
  ];

  return (
    <>
      {Platform.OS === 'ios' && (
        <VariableBlurView
          style={{
            ...tw`absolute bottom-0 left-0 right-0 h-28 w-full`,
            transform: [{ rotate: '180deg' }]
          }}
          maxBlurRadius={5}
        />
      )}
      <View
        style={tw`absolute bottom-0 left-0 w-full items-center justify-center`}
      >
        <LinearGradient
          colors={['transparent', '#00000050']}
          style={tw`android:pb-4 w-full items-center pb-8`}
        >
          <View style={tw`overflow-hidden rounded-full`}>
            <BlurView
              experimentalBlurMethod='dimezisBlurView'
              style={tw`flex-row gap-2 rounded-full bg-white/70 p-2`}
            >
              {props.state.routes.map((route, index) => {
                return (
                  <Pressable
                    onPress={() => {
                      props.navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true
                      });
                      props.navigation.navigate(route.name);
                    }}
                    key={route.key}
                    style={tw.style(
                      `rounded-full px-2 py-2`,
                      index === props.state.index ? tw`bg-white/70 px-4` : tw``
                    )}
                  >
                    <SymbolView
                      name={tabs[index].symbolName}
                      size={22}
                      style={tw`font-bold`}
                      weight='bold'
                      tintColor={rgbaToHex(tw.color('black/50') as string)}
                      resizeMode='scaleAspectFill'
                      fallback={
                        <Ionicons
                          name={tabs[index].materialIconName as any}
                          size={24}
                          color={rgbaToHex(tw.color('black/70') as string)}
                        />
                      }
                    />
                  </Pressable>
                );
              })}
            </BlurView>
          </View>
        </LinearGradient>
      </View>
    </>
  );
}
