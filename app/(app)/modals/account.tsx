import tw from '@/lib/tailwind';
import { ScrollView, Text, View } from 'react-native';
import React from 'react';
import { router } from 'expo-router';
import ModalHeader from '@/components/modal-header';
import Ionicons from '@expo/vector-icons/Ionicons';
import List from '@/components/list';
import Caption from '@/components/caption';
import ModalWrapper from '@/components/modal-wrapper';

export default function Account() {
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
            Test sau text
          </Text>
          <Text style={tw`text-base font-semibold text-white/90`}>
            @testsautext
          </Text>
        </View>
        <Caption style='text-white' text={`Account`} />
        <List childrenStyle={tw`bg-white/25`} appearance='light'>
          <List.Item text={`Change password`} onPress={() => {}} />
          <List.Item
            text={`Log out`}
            textStyle='text-red-600'
            onPress={() => {}}
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
