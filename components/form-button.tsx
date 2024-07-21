import { Pressable, Text, View } from 'react-native';
import tw from 'twrnc';
import { ReactNode } from 'react';

export default function FormButton({
  onPress,
  children
}: {
  onPress: () => void;
  children: ReactNode;
}) {
  return (
    <Pressable onPress={onPress} style={tw`mt-7 rounded-full bg-[#000000]/60`}>
      <View style={tw`h-16 w-full flex-row items-center justify-center`}>
        <Text style={tw`text-white/85 text-base font-semibold`}>
          {children}
        </Text>
      </View>
    </Pressable>
  );
}
