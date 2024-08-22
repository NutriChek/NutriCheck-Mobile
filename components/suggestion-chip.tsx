import { SFSymbols5_0 } from 'sf-symbols-typescript';
import Animated, {
  useAnimatedStyle,
  withDelay,
  withSpring,
  withTiming
} from 'react-native-reanimated';
import { Pressable, StyleSheet, Text } from 'react-native';
import tw from '@/lib/tailwind';
import { androidRipple, rgbaToHex } from '@/lib/util';
import { BlurView } from 'expo-blur';
import { SymbolView } from 'expo-symbols';
import { MaterialIcons } from 'expo-vector-icons';
import React from 'react';
import { Style } from 'twrnc';

export function SuggestionChip({
  text,
  state,
  transformSize,
  transformDelay,
  opacityDelay,
  symbolName,
  materialIconName,
  onPress,
  chipStyle,
  pressableStyle,
  pressablePressedStyle,
  pressableContainerStyle
}: {
  text: string;
  state: boolean;
  transformSize: number;
  transformDelay: number;
  opacityDelay: number;
  symbolName: SFSymbols5_0;
  materialIconName: string;
  onPress: () => void;
  chipStyle?: Style | Style[];
  pressableStyle?: string;
  pressablePressedStyle?: string;
  pressableContainerStyle?: Style;
}) {
  const style = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withDelay(
            transformDelay,
            withSpring(+state * transformSize, {
              damping: 13.5
            })
          )
        }
      ],
      opacity: withDelay(opacityDelay, withTiming(+state))
    };
  });

  return (
    <Animated.View
      style={[
        style,
        {
          height: 50,
          position: 'absolute',
          left: 16,
          bottom: 0,
          shadowOffset: { width: 0, height: 0 },
          shadowColor: 'black',
          shadowOpacity: 0.15,
          shadowRadius: 10
        },
        chipStyle
      ]}
    >
      <Animated.View
        style={[tw`overflow-hidden rounded-2xl`, pressableContainerStyle]}
      >
        <Pressable
          android_ripple={androidRipple}
          onPress={onPress}
          style={({ pressed }) =>
            tw.style(
              `bg-white/45 ${pressableStyle ?? ''}`,
              pressed && `ios:bg-white/30 ${pressablePressedStyle ?? ''}`,
            )
          }
        >
          <BlurView
            intensity={50}
            style={tw`h-full flex-row items-center justify-center gap-1.5 p-4`}
          >
            <SymbolView
              name={symbolName}
              size={20}
              tintColor={rgbaToHex(tw.color('black/70') as string)}
              fallback={
                <MaterialIcons
                  name={materialIconName as any}
                  size={20}
                  color={rgbaToHex(tw.color('black/70') as string)}
                />
              }
            />
            <Text
              style={{
                ...tw`text-[16px] font-medium text-black/80`,
                includeFontPadding: false
              }}
            >
              {text}
            </Text>
          </BlurView>
        </Pressable>
      </Animated.View>
    </Animated.View>
  );
}
