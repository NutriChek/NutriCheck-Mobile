import { SFSymbols5_0 } from 'sf-symbols-typescript';
import { Platform, PlatformColor, Text, View } from 'react-native';
import tw from '@/lib/tailwind';
import BaseButton from '@/components/base-button';

export default function LargeButton({
  children,
  symbolName,
  materialIconName,
  onPress,
  style,
  textStyle
}: {
  children: string;
  symbolName: SFSymbols5_0;
  materialIconName: string;
  onPress: () => void;
  style: string;
  textStyle: string;
}) {
  return (
    <View style={tw`overflow-hidden rounded-[4.125]`}>
      <BaseButton
        style={{
          ...tw`h-14 w-full flex-row items-center justify-center`,
          backgroundColor:
            Platform.OS === 'ios'
              ? PlatformColor('systemBlue')
              : tw.color('red-500')
        }}
      >
        <View style={{}}>
          <Text>{children}</Text>
        </View>
      </BaseButton>
    </View>
  );
}
