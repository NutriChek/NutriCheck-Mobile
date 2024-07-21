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
import Oauth from '@/components/oauth-button';
import NavigationCard from '@/components/navigation-card';
import * as yup from 'yup';

import { useSession } from '@/context/auth-context';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Image } from 'expo-image';
import { useRef } from 'react';
import FormButton from '@/components/form-button';
import { router } from 'expo-router';

const image = require('../assets/images/Frame_47.png');

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
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      username: '',
      password: ''
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
              minHeight: height + StatusBar.currentHeight! / 2 + 1
            }}
          >
            <View style={tw`h-1/3 flex-grow items-center justify-center`}>
              <Image
                source={require('@/assets/images/logopng.png')}
                style={tw`h-18 w-18 mb-6`}
              />
              <Text style={tw`text-5xl font-bold text-[#5D5D5D]`}>
                NutriCheck
              </Text>
            </View>
            <View ref={middleRef} style={tw`w-full gap-3`}>
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
              <FormButton
                onPress={() => {
                  signIn();
                  router.replace('/');
                }}
              >
                Sign In
              </FormButton>
            </View>
            <View
              style={tw`h-1/3 flex-grow items-center justify-between pb-11`}
            >
              <Oauth />
              <NavigationCard
                text1='No account?'
                text2='Create one now'
                goto='/sign-up'
              />
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
