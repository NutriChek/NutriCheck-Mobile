import { router } from 'expo-router';
import {
  ImageBackground,
  StatusBar,
  useWindowDimensions,
  View
} from 'react-native';
import tw from '@/lib/tailwind';
import FormInput from '@/components/form-input';
import LargeButton from '@/components/form-button';
import OauthButtons from '@/components/oauth-buttons';
import NavigationCard from '@/components/navigation-card';
import * as yup from 'yup';
import { useSession } from '@/context/auth-context';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import LogoView from '@/components/logo-view';
import Toast from 'react-native-toast-message';
import { AxiosError } from 'axios';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { KeyboardToolbar } from 'react-native-keyboard-controller';

const image = require('../assets/images/background-blur.png');

export default function SignIn() {
  const schema = yup
    .object({
      firstName: yup
        .string()
        .required('First name is required')
        .max(50, 'First name must have at most 50 characters'),
      lastName: yup
        .string()
        .required('Last name is required')
        .max(50, 'Last name must have at most 50 characters'),
      username: yup
        .string()
        .required('Username is required')
        .min(3, 'Username must have at least 3 characters')
        .max(50, 'Username must have at most 50 characters'),
      email: yup
        .string()
        .required('Email is required')
        .email('You must enter a valid email'),
      password: yup
        .string()
        .required('Password is required')
        .min(8, 'Password must have at least 8 characters'),
      passwordRep: yup
        .string()
        .oneOf([yup.ref('password')], 'Passwords must match')
        .required('Passwords must match')
    })
    .required();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: '',
      password: '',
      email: '',
      passwordRep: ''
    },
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  const { signIn, signUp } = useSession();

  const onSubmit: any = (data: {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
  }) => {
    signUp({
      firstName: data.firstName,
      lastName: data.lastName,
      username: data.username,
      email: data.email,
      password: data.password
    })
      .then(() => {
        signIn({ email: data.email, password: data.password })
          .then(() => {
            router.replace('/');
          })
          .catch((err: AxiosError<{ message: string }>) => {
            Toast.show({
              type: 'customToast',
              text1: `Can't sign you in!`,
              text2: err.response?.data
                ? err.response.data.message
                : err.message,
              position: 'bottom'
            });
          });
      })
      .catch((err: AxiosError<{ message: string }>) => {
        Toast.show({
          type: 'customToast',
          text1: `Can't sign you up!`,
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
              paddingTop: 60
            }}
          >
            <View style={tw`flex-grow items-center justify-center`}>
              <LogoView />
            </View>
            <View style={tw`w-full gap-3 pt-10`}>
              <FormInput
                placeholder='First name'
                control={control}
                name='firstName'
                inputAccessoryViewID='sign-up'
                textContentType='givenName'
              />
              <FormInput
                placeholder='Last name'
                control={control}
                name='lastName'
                inputAccessoryViewID='sign-up'
                textContentType='familyName'
              />
              <FormInput
                placeholder='Username'
                control={control}
                name='username'
                autoCapitalize='none'
                inputAccessoryViewID='sign-up'
                textContentType='username'
              />
              <FormInput
                placeholder='Email'
                control={control}
                name='email'
                autoCapitalize='none'
                inputAccessoryViewID='sign-up'
                textContentType='emailAddress'
                keyboardType='email-address'
              />
              <FormInput
                placeholder='Password'
                control={control}
                name='password'
                password={true}
                inputAccessoryViewID='sign-up'
                textContentType='newPassword'
              />
              <FormInput
                placeholder='Repeat password'
                control={control}
                name='passwordRep'
                password={true}
                inputAccessoryViewID='sign-up'
                textContentType='newPassword'
              />
              <LargeButton style='mt-7' onPress={handleSubmit(onSubmit)}>
                Sign up
              </LargeButton>
            </View>
            <View
              style={tw`flex-grow items-center justify-between gap-12 pb-11`}
            >
              <OauthButtons style='pt-8' />
              <NavigationCard
                text1='Have an account already?'
                text2='Sign in now'
                onPress={() => {
                  router.replace('/sign-in');
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
