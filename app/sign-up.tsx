import { router } from 'expo-router';
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
import LargeButton from '@/components/form-button';
import OauthButtons from '@/components/oauth-buttons';
import NavigationCard from '@/components/navigation-card';
import * as yup from 'yup';
import { useSession } from '@/context/auth-context';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import LogoView from '@/components/logo-view';

const image = require('../assets/images/background-blur.png');

export default function SignIn() {
  const schema = yup
    .object({
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

  const { signIn } = useSession();

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
              paddingTop: 60
            }}
          >
            <View style={tw`flex-grow items-center justify-center`}>
              <LogoView />
            </View>
            <View style={tw`w-full gap-3 pt-10`}>
              <FormInput placeholder='Email' control={control} name='email' />
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
              <FormInput
                placeholder='Repeat password'
                control={control}
                name='passwordRep'
                password={true}
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
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
