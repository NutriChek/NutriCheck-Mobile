import tw from '@/lib/tailwind';
import { ScrollView } from 'react-native';
import React from 'react';
import { router } from 'expo-router';
import ModalHeader from '@/components/modal-header';
import ModalWrapper from '@/components/modal-wrapper';
import KeyboardAccessory from '@/components/keyboard-accessory';
import { useGetBodyProfile } from '@/api/body-profile';
import LoadingView from '@/components/loading-view';
import ErrorView from '@/components/error-view';
import { useGetNutritionalPreferences } from '@/api/nutritional-preferences';
import NutritionalPreferencesForm from '@/components/nutritional-preferences-form';

export default function NutritionalPreferences() {
  const nutritionalPreferences = useGetNutritionalPreferences();

  if (nutritionalPreferences.isPending) {
    return <LoadingView />;
  }

  if (nutritionalPreferences.isError) {
    return (
      <ErrorView
        refetch={nutritionalPreferences.refetch}
        error={nutritionalPreferences.error.message}
      />
    );
  }

  return (
    <ModalWrapper>
      <ModalHeader
        text='Nutritional preferences'
        onPress={() => {
          router.back();
        }}
      />
      <ScrollView style={tw`px-4`}>
        <NutritionalPreferencesForm
          data={nutritionalPreferences.data}
          onSuccess={() => {
            nutritionalPreferences.refetch();
            router.back();
          }}
        />
      </ScrollView>
      <KeyboardAccessory inputAccessoryViewID={'id'} />
    </ModalWrapper>
  );
}
