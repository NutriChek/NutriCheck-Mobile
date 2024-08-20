import { Text, View } from 'react-native';
import tw from '@/lib/tailwind';
import { ReactNode } from 'react';
import { SFSymbols5_0 } from 'sf-symbols-typescript';
import { ClassInput } from 'twrnc';
import BaseButton from '@/components/base-button';
import { SymbolView } from 'expo-symbols';
import { MaterialIcons } from 'expo-vector-icons';

export default function LargeButton({
  onPress,
  children,
  style,
  contentContainerStyle,
  textStyle,
  symbolName,
  materialIconName,
  active = true
}: {
  children: ReactNode;
  onPress: () => void;
  style?: ClassInput;
  contentContainerStyle?: ClassInput;
  symbolName?: SFSymbols5_0;
  materialIconName?: string;
  textStyle?: ClassInput;
  active?: boolean;
}) {
  return (
    <View style={tw.style(`overflow-hidden rounded-full`, style)}>
      <BaseButton
        style={tw.style(`rounded-full bg-black/60`, contentContainerStyle, !active && `opacity-70`)}
        onPress={onPress}
        active={active}
      >
        <View style={tw`h-16 w-full flex-row items-center justify-center gap-2`}>
          {symbolName && (
            <SymbolView
              name={symbolName}
              tintColor='white'
              resizeMode='scaleAspectFill'
              size={24}
              fallback={
                <MaterialIcons
                  name={materialIconName ?? 'question-mark'}
                  size={24}
                  color='white'
                />
              }
            />
          )}
          <Text
            style={tw.style(`text-white/85 text-base font-semibold`, textStyle)}
          >
            {children}
          </Text>
        </View>
      </BaseButton>
    </View>
  );
}
