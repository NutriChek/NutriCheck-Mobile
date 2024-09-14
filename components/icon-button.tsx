import { Pressable, View } from 'react-native';
import tw from '@/lib/tailwind';
import { androidRipple } from '@/lib/util';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function IconButton({
  icon,
  onPress,
  style,
  color = 'black',
  size = 28
}: {
  icon: string;
  onPress: () => void;
  style?: string;
  color?: string;
  size?: number;
}) {
  return (
    <View style={tw`overflow-hidden rounded-full`}>
      <Pressable
        onPress={onPress}
        android_ripple={{ ...androidRipple, radius: 50 }}
        style={({ pressed }) =>
          tw.style(pressed && 'ios:opacity-80', 'p-2', style)
        }
      >
        <Ionicons name={icon as any} size={size} color={color} />
      </Pressable>
    </View>
  );
}
