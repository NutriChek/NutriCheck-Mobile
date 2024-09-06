import { Text, useWindowDimensions, View } from 'react-native';
import tw from '@/lib/tailwind';
import { ReactNode } from 'react';
import { Style } from 'twrnc';
import { BlurView } from 'expo-blur';
import BaseButton from '@/components/base-button';

export default function WidgetBase({
  children,
  title,
  icon,
  rightComponent,
  style,
  containerStyle,
  size = 'auto',
  inset = 0,
  onPress
}: {
  children: ReactNode;
  title?: string;
  icon?: ReactNode;
  rightComponent?: ReactNode;
  style?: Style;
  containerStyle?: Style;
  size?: 'sm' | 'md' | 'lg' | 'auto';
  inset?: number;
  onPress?: () => void;
}) {
  const { width } = useWindowDimensions();

  return (
    <View
      style={tw.style(
        `overflow-hidden rounded-3xl`,
        containerStyle,
        size === 'sm' && {
          width: width / 2 - inset,
          height: width / 2 - inset
        },
        size === 'md' && { width: width - inset, height: width / 2 - inset },
        size === 'lg' && { width: width - inset, height: width - inset }
      )}
    >
      <BlurView
        intensity={100}
        style={tw.style(`grow rounded-3xl bg-white/70`)}
      >
        <BaseButton style={tw.style(`gap-3 p-4`, style)} onPress={onPress}>
          {(title || rightComponent) && (
            <View style={tw`flex-row items-center justify-between`}>
              {title && icon && (
                <View style={tw`flex-row gap-2`}>
                  {icon}
                  <Text style={tw`text-black/55 text-sm font-bold`}>
                    {title}
                  </Text>
                </View>
              )}
              {rightComponent}
            </View>
          )}
          {children}
        </BaseButton>
      </BlurView>
    </View>
  );
}
