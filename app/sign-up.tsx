import { router } from 'expo-router';
import {
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  Text,
  useWindowDimensions,
  View
} from 'react-native';
import tw from 'twrnc';
import FormInput from '@/components/form-input';
import FormButton from '@/components/form-button';
import Oauth from '@/components/oauth-button';
import NavigationCard from '@/components/navigation-card';
import * as yup from 'yup';
import { useSession } from '@/context/auth-context';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Image } from 'expo-image';
import { useRef } from 'react';

const image = require('../assets/images/Frame_47.png');

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
    })
    .required();

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
      email: '',
      passwordRep: ''
    },
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  function onSubmit(data: typeof schema.fields) {
    console.log(data);
  }

  const { signIn } = useSession();

  const { height } = useWindowDimensions();

  const middleRef = useRef(null);

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
            <View style={tw`flex-grow items-center justify-center`}>
              <Image
                source={require('@/assets/images/logopng.png')}
                style={tw`h-18 w-18 mb-6`}
              />
              <Text style={tw`text-5xl font-bold text-[#5D5D5D]`}>
                NutriCheck
              </Text>
            </View>
            <View ref={middleRef} style={tw`w-full gap-3`}>
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
              <FormButton
                onPress={() => {
                  signIn();
                  router.replace('/');
                }}
              >
                Sign Up
              </FormButton>
            </View>
            <View
              style={tw`flex-grow items-center justify-between gap-12 pb-11`}
            >
              <Oauth />
              <NavigationCard
                text1='Have an account already?'
                text2='Sign in now'
                goto='/sign-in'
              />
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
