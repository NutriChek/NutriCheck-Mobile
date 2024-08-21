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
import BodyProfileForm from '@/components/body-profile-form';

export default function BodyProfile() {
  const bodyProfile = useGetBodyProfile();

  if (bodyProfile.isPending) {
    return <LoadingView />;
  }

  if (bodyProfile.isError) {
    return (
      <ErrorView
        refetch={bodyProfile.refetch}
        error={bodyProfile.error.message}
      />
    );
  }

  return (
    <ModalWrapper>
      <ModalHeader
        text='Body profile'
        onPress={() => {
          router.back();
        }}
      />
      <ScrollView style={tw`px-4`}>
        <BodyProfileForm
          height={bodyProfile.data.height}
          weight={bodyProfile.data.weight}
          age={bodyProfile.data.age}
          sex={bodyProfile.data.sex}
          activityLevel={bodyProfile.data.activityLevel}
          pregnant={bodyProfile.data.pregnant ?? false}
          breastfeeding={bodyProfile.data.breastfeeding ?? false}
          onSuccess={() => {
            bodyProfile.refetch();
            router.back();
          }}
        />
      </ScrollView>
      <KeyboardAccessory inputAccessoryViewID={'id'} />
    </ModalWrapper>
  );
}
