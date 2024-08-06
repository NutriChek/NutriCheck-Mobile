import { View } from 'react-native';
import tw from '@/lib/tailwind';
import { ReactNode } from 'react';
import { Style } from 'twrnc';

export default function WidgetWrapper({
  children,
  style = {}
}: {
  children: ReactNode;
  style?: Style;
}) {
  return (
    <View style={{ ...tw`flex-1 rounded-3xl bg-white/80 p-3`, ...style }}>
      {children}
    </View>
  );
}
