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
import * as yup from 'yup';

import { useSession } from '@/context/auth-context';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Image } from 'expo-image';

const image = require('../assets/images/Frame_47.png');

export default function SignIn() {
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
          <Image source={require('@/assets/images/logopng.png')} style={tw`h-18 w-18 mb-6`} />
          <Text style={tw`pb-20 text-5xl font-bold text-[#5D5D5D]`}>
            NutriCheck
          </Text>
          <View style={tw`w-full gap-3`}>
            <FormInput
              placeholder='Username'
              control={control}
              name='username'
            />
            <View>
              <FormInput
                placeholder='Password'
                control={control}
                name='password'
                password={true}
              />
            </View>
          </View>
          <FormButton
            onPress={() => {
              signIn();
              router.replace('/');
            }}
            title='Sign In'
          />
        </ImageBackground>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
