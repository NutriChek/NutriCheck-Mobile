import {
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  useWindowDimensions,
  View
} from 'react-native';
import tw from '@/lib/tailwind';
import FormInput from '@/components/form-input';
import OauthButtons from '@/components/oauth-buttons';
import NavigationCard from '@/components/navigation-card';
import * as yup from 'yup';
import { useSession } from '@/context/auth-context';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import LargeButton from '@/components/form-button';
import { router } from 'expo-router';
import LogoView from '@/components/logo-view';

const image = require('../assets/images/background-blur.png');

const schema = yup
  .object({
    username: yup
      .string()
      .required('Username is required')
      .min(3, 'Username must have at least 3 characters')
      .max(50, 'Username must have at most 50 characters'),
    password: yup
      .string()
      .required('Password is required')
      .min(8, 'Password must have at least 8 characters')
  })
  .required();

export default function SignIn() {
  const { signIn } = useSession();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: '',
      password: ''
    },
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  const onSubmit: any = (data: typeof schema.fields) => {
    console.log(data);
    signIn();
    router.replace('/');
  };

  const { height } = useWindowDimensions();

  return (
    <KeyboardAvoidingView behavior='height'>
      <StatusBar barStyle='dark-content' />
      <ScrollView>
        <ImageBackground
          resizeMode='cover'
          source={image}
          style={tw`grow items-center justify-center px-8`}
        >
          <View
            style={{
              minHeight: height + StatusBar.currentHeight! / 2 + 1,
              paddingTop: 40
            }}
          >
            <View style={tw`h-1/3 flex-grow items-center justify-center`}>
              <LogoView />
            </View>
            <View style={tw`w-full gap-3`}>
              <FormInput
                placeholder='Username'
                control={control}
                name='username'
              />
              <FormInput
                placeholder='Password'
                control={control}
                name='password'
                password={true}
              />
              <LargeButton style='mt-7' onPress={handleSubmit(onSubmit)}>
                Sign in
              </LargeButton>
            </View>
            <View
              style={tw`h-1/3 flex-grow items-center justify-between pb-11`}
            >
              <OauthButtons style='pt-8' />
              <NavigationCard
                text1='No account?'
                text2='Create one now'
                onPress={() => {
                  router.replace('/sign-up');
                }}
              />
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
