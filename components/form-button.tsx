import { Pressable, Text, View } from 'react-native';
import tw from '@/lib/tailwind';
import { ReactNode } from 'react';
import { androidRipple } from '@/lib/util';

export default function FormButton({
  onPress,
  children,
  style
}: {
  onPress: () => void;
  children: ReactNode;
  style?: string;
}) {
  return (
    <View style={tw.style(`overflow-hidden rounded-full`, style)}>
      <Pressable
        onPress={onPress}
        android_ripple={androidRipple}
        style={({ pressed }) =>
          tw.style(`rounded-full bg-black/60`, pressed && `ios:bg-black/70`)
        }
      >
        <View style={tw`h-16 w-full flex-row items-center justify-center`}>
          <Text style={tw`text-white/85 text-base font-semibold`}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}
