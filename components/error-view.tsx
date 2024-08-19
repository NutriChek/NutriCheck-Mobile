import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import LargeButton from '@/components/form-button';
import tw from '@/lib/tailwind';

export default function ErrorView({
  refetch,
  error
}: {
  refetch: () => void;
  error: string;
}) {
  return (
    <View style={tw`w-full flex-1 items-center justify-center bg-transparent`}>
      <Ionicons
        name='cloud-offline-outline'
        size={100}
        color={'rgba(255, 255, 255, 0.5)'}
      />
      <Text style={tw`text-lg text-white`}>
        There was a problem while loading.
      </Text>
      <Text style={tw`text-lg text-white`}>{error}</Text>
      <LargeButton onPress={() => refetch()} style={`mt-4 w-1/3`}>
        Retry
      </LargeButton>
    </View>
  );
}
