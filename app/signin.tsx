import { View } from 'react-native';
import SignIn from '../components/SignIn';
import tw from 'twrnc';

export default function SignInPage() {
  return (
    <View style={tw`h-full bg-cyan-50`}>
      <SignIn />
    </View>
  );
}
