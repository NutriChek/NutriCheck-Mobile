import { Text, View } from 'react-native';
import tw from '@/lib/tailwind';
import { ReactNode } from 'react';
import { Style } from 'twrnc';

export default function WidgetWrapper({
  children,
  title,
  icon,
  style = {}
}: {
  children: ReactNode;
  title?: string;
  icon?: ReactNode;
  style?: Style;
}) {
  return (
    <View style={tw`rounded-3xl bg-white/80 p-3`}>
      <View style={tw`flex-row items-center pb-3`}>
        {icon}
        <Text style={tw`pl-2 text-lg font-bold text-black/60`}>
          {title}
        </Text>
      </View>
      <View style={{ ...tw``, ...style }}>{children}</View>
    </View>
  );
}
