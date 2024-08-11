import { SafeAreaView, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import tw from '@/lib/tailwind';
import BaseButton from '@/components/base-button';

export default function ModalHeader({
  text,
  onPress
}: {
  text: string;
  onPress: () => void;
}) {
  return (
    <SafeAreaView style={tw`flex-row items-center bg-transparent px-4 py-6`}>
      <View style={tw`flex-row items-center px-4 py-6`}>
        <Text style={tw`flex-1 text-4xl font-bold text-white`}>{text}</Text>
        <View style={tw`overflow-hidden rounded-full`}>
          <BaseButton
            onPress={onPress}
            style={tw`rounded-full bg-white/30 p-2`}
          >
            <Ionicons name='close' size={30} color={tw.color(`white/80`)} />
          </BaseButton>
        </View>
      </View>
    </SafeAreaView>
  );
}
