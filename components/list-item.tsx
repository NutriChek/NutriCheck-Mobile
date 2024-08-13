import { Pressable, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import tw from '@/lib/tailwind';

export default function ListItem({
  text,
  onPress,
  leftComponent,
  rightComponent,
  textStyle,
  firstItem,
  lastItem,
  shouldPress = true,
  style,
  appearance
}: {
  text: string;
  onPress?: () => void;
  leftComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
  textStyle?: string;
  firstItem?: boolean;
  lastItem?: boolean;
  shouldPress?: boolean;
  style?: string;
  appearance?: 'light' | 'dark';
}) {
  return (
    <Pressable
      onPress={() => {
        if (shouldPress && onPress) {
          onPress();
        }
      }}
      android_ripple={
        shouldPress ? { color: 'rgba(0, 0, 0, 0.1)', borderless: false } : null
      }
      style={({ pressed }) =>
        tw.style(
          'bg-neutral-50 active:bg-neutral-200 dark:bg-neutral-700 dark:active:bg-neutral-600 flex-row items-center justify-between pl-4',
          appearance === 'light' && 'bg-white',
          appearance === 'dark' && 'bg-black',
          lastItem && 'rounded-b-2xl',
          firstItem && 'rounded-t-2xl',
          shouldPress && pressed && 'ios:opacity-80',
          style
        )
      }
    >
      <View
        style={tw.style(
          'flex-1 flex-row items-center justify-between gap-4 py-3 pr-4',
          lastItem ??
            'border-b-[0.7px] border-b-black/10 dark:border-b-white/10',
          appearance === 'light' && 'border-b-white/20',
        )}
      >
        {leftComponent ? (
          leftComponent
        ) : (
          <Text
            style={tw.style(
              'flex-1 p-0 text-base text-black dark:text-white',
              appearance === 'light' && 'text-white',
              appearance === 'dark' && 'text-black',
              textStyle
            )}
          >
            {text}
          </Text>
        )}
        {rightComponent ? (
          rightComponent
        ) : (
          <Ionicons
            name='chevron-forward'
            size={20}
            color={
              appearance === 'dark'
                ? 'rgba(0, 0, 0, 0.4)'
                : 'rgba(255, 255, 255, 0.6)'
            }
          />
        )}
      </View>
    </Pressable>
  );
}
