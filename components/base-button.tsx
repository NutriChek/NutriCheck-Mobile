import { androidRipple } from '@/lib/util';
import tw from '@/lib/tailwind';
import { Pressable } from 'react-native';
import { ReactNode } from 'react';
import { Style } from 'twrnc';

export default function BaseButton({
  children,
  style,
  onPress
}: {
  children: ReactNode;
  style?: Style;
  onPress?: () => void;
}) {
  return (
    <Pressable
      android_ripple={androidRipple}
      style={({ pressed }) => tw.style(style, pressed && 'ios:opacity-70')}
      onPress={onPress}
    >
      {children}
    </Pressable>
  );
}
