import { Text, View } from 'react-native';
import tw from '@/lib/tailwind';
import { ReactNode } from 'react';
import { Style } from 'twrnc';
import WidgetWrapper from '@/components/widget-wrapper';

export default function HeaderWidgetWrapper({
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
    <WidgetWrapper>
      <View style={tw`flex-row items-center pb-3`}>
        {icon}
        <Text style={tw`pl-2 text-sm font-bold text-black/56`}>
          {title}
        </Text>
      </View>
      <View style={{ ...tw``, ...style }}>{children}</View>
    </WidgetWrapper>
  );
}
