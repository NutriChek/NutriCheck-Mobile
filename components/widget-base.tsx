import { Text, View } from 'react-native';
import tw from '@/lib/tailwind';
import { ReactNode } from 'react';
import { Style } from 'twrnc';
import { SFSymbols5_0 } from 'sf-symbols-typescript';
import { SymbolView } from 'expo-symbols';
import { rgbaToHex } from '@/lib/util';
import { MaterialCommunityIcons } from 'expo-vector-icons';
import { BlurView } from 'expo-blur';

export default function WidgetBase({
  children,
  title,
  symbolName,
  materialIconName,
  rightComponent,
  style,
  containerStyle,
}: {
  children: ReactNode;
  title?: string;
  symbolName?: SFSymbols5_0;
  materialIconName?: string;
  rightComponent?: ReactNode;
  style?: Style;
  containerStyle?: Style;
}) {
  return (
    <View style={tw.style(`overflow-hidden rounded-3xl`, containerStyle)}>
      <BlurView
        intensity={100}
        style={tw.style(`grow gap-4 rounded-3xl bg-white/70 p-4`, style)}
      >
        {(title || rightComponent) && (
          <View style={tw`flex-row items-center justify-between`}>
            {title && symbolName && materialIconName && (
              <View style={tw`flex-row gap-2`}>
                <SymbolView
                  name={symbolName}
                  size={20}
                  tintColor={rgbaToHex(tw.color('black/55') as string)}
                  resizeMode='scaleAspectFit'
                  fallback={
                    <MaterialCommunityIcons
                      name={materialIconName}
                      size={20}
                      color={tw.color('black/55')}
                    />
                  }
                />
                <Text style={tw`text-black/55 text-sm font-bold`}>{title}</Text>
              </View>
            )}
            {rightComponent}
          </View>
        )}
        {children}
      </BlurView>
    </View>
  );
}
