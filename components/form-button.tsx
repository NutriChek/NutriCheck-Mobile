import { Pressable, Text } from 'react-native';
import tw from 'twrnc';

interface FormButtonProps {
  onPress: () => void;
  title: string;
}

export default function FormButton({ onPress, title }: FormButtonProps) {
  return (
    <Pressable onPress={onPress} style={tw`h-16 w-full flex-row items-center justify-center rounded-full bg-[#000000]/60 mt-7`}>
      <Text style={tw`text-white/85 font-semibold text-base`}>{title}</Text>
    </Pressable>
  );
}
