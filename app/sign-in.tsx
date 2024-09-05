import LargeButton from '@/components/form-button';
import FormInput from '@/components/form-input';
import LogoView from '@/components/logo-view';
import NavigationCard from '@/components/navigation-card';
import OauthButtons from '@/components/oauth-buttons';
import { useSession } from '@/context/auth-context';
import tw from '@/lib/tailwind';
import { yupResolver } from '@hookform/resolvers/yup';
import { AxiosError } from 'axios';
import { router } from 'expo-router';
import { useForm } from 'react-hook-form';
import {
  ImageBackground,
  StatusBar,
  useWindowDimensions,
  View
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { KeyboardToolbar } from 'react-native-keyboard-controller';
import Toast from 'react-native-toast-message';
import * as yup from 'yup';

const image = require('../assets/images/background-blur.png');

const schema = yup
  .object({
    email: yup.string().email('Invalid email').required('Email is required'),
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
      email: '',
      password: ''
    },
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  const onSubmit: any = (data: { email: string; password: string }) => {
    console.log(data);
    signIn({ email: data.email, password: data.password })
      .then(() => {
        router.replace('/');
      })
      .catch((err: AxiosError<{ message: string }>) => {
        Toast.show({
          type: 'customToast',
          text1: `Can't sign you in!`,
          text2: err.response?.data ? err.response.data.message : err.message,
          position: 'bottom'
        });
      });
  };

  const { height } = useWindowDimensions();

  return (
    <>
      <StatusBar barStyle='dark-content' />
      <KeyboardAwareScrollView>
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
                name='email'
                autoCapitalize='none'
                keyboardType='email-address'
                textContentType='emailAddress'
              />
              <FormInput
                placeholder='Password'
                control={control}
                name='password'
                password={true}
                textContentType='password'
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
      </KeyboardAwareScrollView>
      <KeyboardToolbar />
    </>
  );
}
