import tw from 'twrnc';
import { Pressable, Text } from 'react-native';

export default function InputField({
  text,
  onPress
}: {
  text: string;
  onPress: Function;
}) {
  return (
    <>
      <Pressable
        style={tw`mb-3 mt-3 rounded-full bg-blue-900 p-3.5`}
        onPress={() => onPress()}
      >
        <Text style={tw`text-center text-white`}>{text}</Text>
      </Pressable>
    </>
  );
}
