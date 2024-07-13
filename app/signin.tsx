import tw from 'twrnc';
import { Link, Stack } from 'expo-router';
import { Text, View, Pressable, ScrollView } from 'react-native';
import React from 'react';
import { useForm } from 'react-hook-form';
import InputField from '../components/input-field';
import LargeButton from '@/components/large-button';

export default function SignInPage() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const callApi = (data: any) => {
    console.log('Data', data);
  };

  return (
    <>
      <ScrollView style={tw`bg-cyan-50 px-4`}>
        <Text style={tw`pt-19 pb-12 text-3xl font-black`}>Sign in</Text>
        <View style={tw`flex gap-1.5`}>
          <InputField
            placeholder='Email'
            name='email'
            control={control}
            textContentType='emailAddress'
          />
          <InputField
            password={true}
            placeholder='Password'
            name='password'
            control={control}
            textContentType='password'
          />
        </View>
        <LargeButton text='Sign in' onPress={handleSubmit(callApi)} />
        <Link style={tw`underline`} href='/signup'>
          Don't have an account? Sign up
        </Link>
      </ScrollView>
    </>
  );
}
