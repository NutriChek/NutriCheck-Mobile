import tw from '@/lib/tailwind';
import { ScrollView, Text, View } from 'react-native';
import React from 'react';
import { router } from 'expo-router';
import ModalHeader from '@/components/modal-header';
import Ionicons from '@expo/vector-icons/Ionicons';
import List from '@/components/list';
import Caption from '@/components/caption';
import ModalWrapper from '@/components/modal-wrapper';
import { useSession } from '@/context/auth-context';
import { useGetAccount } from '@/api/account';
import LoadingView from '@/components/loading-view';
import ErrorView from '@/components/error-view';

export default function Account() {
  const { signOut } = useSession();
  const account = useGetAccount();

  if (account.isPending) {
    return (
      <ModalWrapper>
        <ModalHeader
          text='Account'
          onPress={() => {
            router.back();
          }}
        />
        <LoadingView />
      </ModalWrapper>
    );
  }

  if (account.isError) {
    if (account.error.message === 'Request failed with status code 401') {
      signOut();
    }
    return (
      <ModalWrapper>
        <ModalHeader
          text='Account'
          onPress={() => {
            router.back();
          }}
        />
        <ErrorView refetch={account.refetch} error={account.error.message} />
      </ModalWrapper>
    );
  }

  return (
    <ModalWrapper>
      <ModalHeader
        text='Account'
        onPress={() => {
          router.back();
        }}
      />
      <ScrollView style={tw`px-4`}>
        <View
          style={tw`items-center justify-center rounded-2xl bg-white/25 p-6`}
        >
          <Ionicons
            name='person-circle-outline'
            size={120}
            color={tw.color('white/90')}
          />
          <Text style={tw`pt-2 text-3xl font-bold text-white`}>
            {account.data.firstName} {account.data.lastName}
          </Text>
          <Text style={tw`text-base font-semibold text-white/90`}>
            @{account.data.username}
          </Text>
        </View>
        <Caption style='text-white' text={`Account`} />
        <List childrenStyle={tw`bg-white/25`} appearance='light'>
          <List.Item text={`Change password`} onPress={() => { }} />
          <List.Item text={'Edit account'} onPress={() => { router.push({ pathname: '/modals/edit-account', params: {
            firstName: account.data.firstName,
            email: account.data.email,
            lastName: account.data.lastName,
            username: account.data.username
          } }) }} />
          <List.Item
            text={`Log out`}
            textStyle='text-red-600'
            onPress={() => {
              signOut();
            }}
          />
        </List>
        <Caption style='text-white' text={`Preferences`} />
        <List childrenStyle={tw`bg-white/25`} appearance='light'>
          <List.Item
            text={`Body profile`}
            onPress={() => {
              router.push({ pathname: '/modals/body-profile' });
            }}
          />
          <List.Item
            text={`Nutritional preferences`}
            onPress={() => {
              router.push({ pathname: '/modals/nutritional-preferences' });
            }}
          />
        </List>
      </ScrollView>
    </ModalWrapper>
  );
}
