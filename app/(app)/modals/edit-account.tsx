import tw from '@/lib/tailwind';
import { ScrollView, View } from 'react-native';
import React from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import ModalHeader from '@/components/modal-header';
import ModalWrapper from '@/components/modal-wrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import LargeButton from '@/components/form-button';
import FormInput from '@/components/form-input';
import { useGetAccount, useUpdateAccount } from '@/api/account';
import { KeyboardToolbar } from 'react-native-keyboard-controller';

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
      .email('You must enter a valid email')
  })
  .required();

export default function EditAccount() {
  const { firstName, lastName, username, email } =
    useLocalSearchParams<string>();

  const updateAccount = useUpdateAccount();
  const account = useGetAccount();

  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      username: username as string,
      email: email as string,
      firstName: firstName as string,
      lastName: lastName as string
    },
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  const usernameChanged = watch('username');
  const emailChanged = watch('email');
  const lastnameChanged = watch('lastName');
  const firstnameChanged = watch('firstName');

  const isChanged = () => {
    return (
      username != usernameChanged ||
      firstName != firstnameChanged ||
      lastName != lastnameChanged ||
      email != emailChanged
    );
  };

  const onSubmit: any = (data: {
    username: string;
    firstname: string;
    email: string;
    lastname: string;
  }) => {
    updateAccount.mutate(data, {
      onSuccess: () => {
        account.refetch();
        router.back();
      }
    });
  };

  return (
    <ModalWrapper>
      <ModalHeader
        text='Edit account'
        onPress={() => {
          router.back();
        }}
      />
      <ScrollView style={tw`px-4`}>
        <View style={tw`gap-6`}>
          <View style={tw`gap-2`}>
            <FormInput
              placeholder='Username'
              control={control}
              name='username'
              containerStyle={tw`bg-white/25 h-12 rounded-2xl px-3`}
              style={tw`font-normal text-white`}
              placeholderTextColor={tw.color('text-white/50')}
              titleText='Username'
              keyboardType='default'
            />
            <FormInput
              placeholder='Email'
              control={control}
              name='email'
              containerStyle={tw`bg-white/25 h-12 rounded-2xl px-3`}
              style={tw`font-normal text-white`}
              placeholderTextColor={tw.color('text-white/50')}
              titleText='Email'
              keyboardType='email-address'
            />
            <FormInput
              placeholder='First name'
              control={control}
              name='firstName'
              containerStyle={tw`bg-white/25 h-12 rounded-2xl px-3`}
              style={tw`font-normal text-white`}
              placeholderTextColor={tw.color('text-white/50')}
              titleText='Firstname'
              keyboardType='default'
            />
            <FormInput
              placeholder='Last name'
              control={control}
              name='lastName'
              containerStyle={tw`bg-white/25 h-12 rounded-2xl px-3`}
              style={tw`font-normal text-white`}
              placeholderTextColor={tw.color('text-white/50')}
              titleText='Lastname'
              keyboardType='default'
            />

            <LargeButton
              style={tw`mt-4`}
              contentContainerStyle={tw.style(`bg-white/70`)}
              textStyle={tw`text-black/80 text-lg`}
              onPress={handleSubmit(onSubmit)}
              active={isChanged()}
            >
              Save
            </LargeButton>
          </View>
        </View>
      </ScrollView>
      <KeyboardToolbar />
    </ModalWrapper>
  );
}
