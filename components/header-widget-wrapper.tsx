import { Text, View } from 'react-native';
import tw from '@/lib/tailwind';
import { ReactNode } from 'react';
import { Style } from 'twrnc';
import WidgetBase from '@/components/widgets/widget-base';

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
    <WidgetBase>
      <View style={tw`flex-row items-center`}>
        {icon}
        <Text style={tw`text-black/56 pl-2 text-sm font-bold`}>{title}</Text>
      </View>
      <View style={{ ...tw``, ...style }}>{children}</View>
    </WidgetBase>
  );
}
