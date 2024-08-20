import { androidRipple } from '@/lib/util';
import tw from '@/lib/tailwind';
import { Pressable } from 'react-native';
import { ReactNode } from 'react';
import { ClassInput } from 'twrnc';

export default function BaseButton({
  children,
  style,
  onPress,
  active = true
}: {
  children: ReactNode;
  style?: ClassInput;
  onPress?: () => void;
  active?: boolean
}) {
  const props = active ? { android_ripple: androidRipple } : null;

  return (
    <Pressable
      {...props}
      style={({ pressed }) => tw.style(style, pressed && active && 'ios:opacity-70')}
      onPress={active ? onPress : null}
    >
      {children}
    </Pressable>
  );
}
