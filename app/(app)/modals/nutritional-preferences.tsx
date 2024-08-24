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
        palmOil = {nutritionalPreferences.data.palmOil}
        diet = {nutritionalPreferences.data.diet}
        searchIngredient = {nutritionalPreferences.data.searchIngredient} 
        nutriscore = {nutritionalPreferences.data.nutriscore}
        salt = {nutritionalPreferences.data.salt}
        sugar = {nutritionalPreferences.data.sugar} 
        fat = {nutritionalPreferences.data.fat}
        saturatedFat = {nutritionalPreferences.data.saturatedFat} 
        gluten = {nutritionalPreferences.data.gluten}
        milk = {nutritionalPreferences.data.milk}
        eggs = {nutritionalPreferences.data.eggs}
        nuts = {nutritionalPreferences.data.nuts}
        peanuts = {nutritionalPreferences.data.peanuts} 
        sesameSeeds = {nutritionalPreferences.data.sesameSeeds}
        soybeans = {nutritionalPreferences.data.soybeans} 
        celery = {nutritionalPreferences.data.celery} 
        mustard = {nutritionalPreferences.data.mustard} 
        lupin = {nutritionalPreferences.data.lupin} 
        fish = {nutritionalPreferences.data.fish} 
        crustaceans = {nutritionalPreferences.data.crustaceans}
        molluscs = {nutritionalPreferences.data.molluscs} 
        sulphurDioxide = {nutritionalPreferences.data.sulphurDioxide}
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
