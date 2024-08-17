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
import Animated, {
  useAnimatedStyle,
  withTiming
} from 'react-native-reanimated';

function Tab({
  props,
  route,
  symbolName,
  materialIconName,
  active
}: {
  props: BottomTabBarProps;
  route: any;
  symbolName: SFSymbols5_0;
  materialIconName: string;
  active: boolean;
}) {
  const iconStyle = useAnimatedStyle(() => {
    return {
      paddingHorizontal: withTiming(6 + +active * 10, { duration: 170 })
    };
  });

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
    >
      <Animated.View style={[iconStyle, { paddingVertical: 4 }]}>
        <SymbolView
          name={symbolName}
          size={32}
          style={tw`font-bold`}
          weight='bold'
          tintColor={rgbaToHex(tw.color('black/50') as string)}
          resizeMode='scaleAspectFit'
          fallback={
            <Ionicons
              name={materialIconName as any}
              size={24}
              style={{
                padding: 4
              }}
              color={rgbaToHex(tw.color('black/50') as string)}
            />
          }
        />
      </Animated.View>
    </Pressable>
  );
}

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
      symbolName: 'heart.fill',
      materialIconName: 'heart'
    }
  ];

  const rStyle = useAnimatedStyle(() => {
    return {
      left: withTiming(44 * props.state.index + 8, { duration: 200 })
    };
  }, [props.state.index]);

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
          colors={['transparent', '#00000070']}
          style={tw`android:pb-4 w-full items-center pb-8`}
        >
          <View style={tw`overflow-hidden rounded-full`}>
            <BlurView
              style={tw`flex-row rounded-full bg-white/70 p-2 py-2`}
            >
              <Animated.View
                style={[
                  {
                    width: 64,
                    backgroundColor: 'white',
                    position: 'absolute',
                    top: 6,
                    height: 44,
                    borderRadius: 100,
                    shadowOffset: { width: 0, height: 0 },
                    shadowColor: 'black',
                    shadowOpacity: 0.07,
                    shadowRadius: 5
                  },
                  rStyle
                ]}
              />
              {props.state.routes.map((route, index) => {
                return (
                  <Tab
                    key={route.key}
                    props={props}
                    route={route}
                    symbolName={tabs[index].symbolName}
                    materialIconName={tabs[index].materialIconName}
                    active={index === props.state.index}
                  />
                );
              })}
            </BlurView>
          </View>
        </LinearGradient>
      </View>
    </>
  );
}
