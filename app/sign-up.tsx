import { router } from 'expo-router';
import {
  ImageBackground,
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  View
} from 'react-native';
import tw from 'twrnc';
import FormInput from '@/components/form-input';
import FormButton from '@/components/form-button';
import Oauth from '@/components/oauth-button';
import Otherpage from '@/components/navigation-card';
import * as yup from 'yup';

import { useSession } from '@/context/auth-context';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Image } from 'expo-image';
import NavigationCard from '@/components/navigation-card';

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
        .oneOf([yup.ref('password')], 'Passwords must mtch')
    })
    .required();

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
  const onSubmit = (data: any) => console.log(data);

  const { signIn } = useSession();

  return (
    <KeyboardAvoidingView behavior='height' style={tw`grow`}>
      <SafeAreaView style={tw`grow`}>
        <ImageBackground
          resizeMode='cover'
          source={image}
          style={tw`grow items-center justify-center px-8`}
        >
          <Image
            source={require('@/assets/images/logopng.png')}
            style={tw`h-18 w-18 absolute top-10`}
          />
          <Text style={tw`pb-10 text-5xl font-bold text-[#5D5D5D]`}>
            NutriCheck
          </Text>
          <View style={tw`w-full gap-3`}>
            <FormInput
              placeholder='Username'
              control={control}
              name='username'
            />
            <FormInput placeholder='Email' control={control} name='email' />
            <View>
              <FormInput
                placeholder='Password'
                control={control}
                name='password'
                password={true}
              />
            </View>
            {/* / */}
            <View>
              <FormInput
                placeholder='Repeat Password'
                control={control}
                name='passwordRep'
                password={true}
              />
            </View>
          </View>
          <FormButton
            onPress={() => {
              signIn();
              router.replace('/');
            }}
            title='Sign Up'
          />
          <Oauth />
          <NavigationCard
            text1='Already have an account?'
            text2='Sign in'
            goto='/sign-in'
          />
        </ImageBackground>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
