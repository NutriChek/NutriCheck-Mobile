import { Pressable, ScrollView, Text, View } from 'react-native';
import tw from '@/lib/tailwind';
import List from '@/components/list';
import { Controller, useForm } from 'react-hook-form';
import * as Menu from 'zeego/dropdown-menu';
import Ionicons from '@expo/vector-icons/Ionicons';
import LargeButton from '@/components/form-button';
import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { NutritionalPreferences, useUpdateNutritionalPreferences } from '@/api/nutritional-preferences';
import ModalWrapper from './modal-wrapper';
import ModalHeader from './modal-header';
import Caption from './caption';
import Nutriments from './nutriments';
import { router } from 'expo-router';
import Alergens from './alergens';
import KeyboardAccessory from './keyboard-accessory';

const schema = yup
  .object({
    palmOil: yup.boolean().required(),
    diet: yup.number().required(),
    searchIngredient: yup.number(),
    nutriscore: yup.number().required(),
    salt: yup.boolean().required(),
    sugar: yup.boolean().required(),
    fat: yup.boolean().required(),
    saturatedFat: yup.boolean().required(),
    gluten: yup.boolean().required(),
    milk: yup.boolean().required(),
    eggs: yup.boolean().required(),
    nuts: yup.boolean().required(),
    peanuts: yup.boolean().required(),
    sesameSeeds: yup.boolean().required(),
    soybeans: yup.boolean().required(),
    celery: yup.boolean().required(),
    mustard: yup.boolean().required(),
    lupin: yup.boolean().required(),
    fish: yup.boolean().required(),
    crustaceans: yup.boolean().required(),
    molluscs: yup.boolean().required(),
    sulphurDioxide: yup.boolean().required()
  })
  .required();

export default function NutritionalPreferencesForm({
    palmOil, 
    diet, 
    searchIngredient, 
    nutriscore, 
    salt, 
    sugar, 
    fat, 
    saturatedFat, 
    gluten,
    milk, 
    eggs, 
    nuts, 
    peanuts, 
    sesameSeeds, 
    soybeans, 
    celery, 
    mustard, 
    lupin, 
    fish, 
    crustaceans,
    molluscs, 
    sulphurDioxide,
    onSuccess
}: {
    palmOil: boolean,
    diet: number | null | undefined,
    searchIngredient : number | null | undefined, 
    nutriscore: number | null | undefined, 
    salt: boolean, 
    sugar: boolean, 
    fat: boolean, 
    saturatedFat: boolean, 
    gluten: boolean,
    milk: boolean, 
    eggs: boolean, 
    nuts: boolean, 
    peanuts: boolean, 
    sesameSeeds: boolean, 
    soybeans: boolean, 
    celery: boolean, 
    mustard: boolean, 
    lupin: boolean, 
    fish: boolean, 
    crustaceans: boolean,
    molluscs: boolean, 
    sulphurDioxide: boolean,
    onSuccess: () => void;
}) {
  const updateNutritionalPreferences = useUpdateNutritionalPreferences();

  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      palmOil: palmOil || false,
      diet: diet || 2.0 as unknown as number,
      searchIngredient: searchIngredient as unknown as number,
      nutriscore: nutriscore || 0 as unknown as number,
      salt: salt || false,
      sugar: sugar || false,
      fat: fat || false,
      saturatedFat: saturatedFat || false,
      gluten: gluten || false,
      milk: milk || false,
      eggs: eggs || false,
      nuts: nuts || false,
      peanuts: peanuts || false,
      sesameSeeds: sesameSeeds || false,
      soybeans: soybeans || false,
      celery: celery || false,
      mustard: mustard || false,
      lupin: lupin || false,
      fish: fish || false,
      crustaceans: crustaceans || false,
      molluscs: molluscs || false,
      sulphurDioxide: sulphurDioxide || false,
    },
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  const formWatch = watch();

  const isChanged = () => {
    return palmOil != formWatch.palmOil
      || diet != formWatch.diet
      || searchIngredient != formWatch.searchIngredient
      || nutriscore != formWatch.nutriscore
      || salt != formWatch.salt
      || sugar != formWatch.sugar
      || fat != formWatch.fat
      || saturatedFat != formWatch.saturatedFat
      || gluten != formWatch.gluten
      || milk != formWatch.gluten
      || eggs != formWatch.eggs
      || nuts != formWatch.nuts
      || peanuts != formWatch.peanuts
      || sesameSeeds != formWatch.sesameSeeds
      || soybeans != formWatch.soybeans
      || celery != formWatch.celery
      || mustard != formWatch.mustard
      || lupin != formWatch.lupin
      || fish != formWatch.fish
      || crustaceans != formWatch.crustaceans
      || molluscs != formWatch.molluscs
      || sulphurDioxide != formWatch.sulphurDioxide
  }

  const onSubmit: any = (data: NutritionalPreferences) => {
    updateNutritionalPreferences.mutate(data, {
      onSuccess
    });
  };

  return (
    <>
      <Nutriments />
      <View>
        <Caption style='text-white' text={'Ingredients'} />
        <List childrenStyle={tw`bg-white/25`} appearance='light'>
          <List.Item
            text={`Palm oil`}
            shouldPress={false}
            rightComponent={
              <Controller
                control={control}
                name='palmOil'
                render={({ field: { onChange, value } }) => (
                  <Menu.Root>
                    <Menu.Trigger>
                      <Pressable style={tw`flex-row gap-1`}>
                        <Text style={tw`p-0 text-base text-white`}>
                          {value ? 'Yes' : 'No'}
                        </Text>
                        <Ionicons
                          name='chevron-expand-outline'
                          size={24}
                          color={'rgba(255 255 255 / 0.7)'}
                        />
                      </Pressable>
                    </Menu.Trigger>
                    {/*@ts-ignore*/}
                    <Menu.Content>
                      <Menu.Item
                        key='yes'
                        onSelect={() => {
                          onChange(true);
                        }}
                      >
                        <Menu.ItemIndicator />
                        <Menu.ItemTitle>Yes</Menu.ItemTitle>
                      </Menu.Item>
                      <Menu.Item
                        key='no'
                        onSelect={() => {
                          onChange(false);
                        }}
                      >
                        <Menu.ItemIndicator />
                        <Menu.ItemTitle>No</Menu.ItemTitle>
                      </Menu.Item>
                    </Menu.Content>
                  </Menu.Root>
                )}
              />
            }
          />
          <List.Item
            text={`Diet`}
            shouldPress={false}
            rightComponent={
              <Controller
                control={control}
                name='diet'
                render={({ field: { onChange, value } }) => (
                  <Menu.Root>
                    <Menu.Trigger>
                      <Pressable style={tw`flex-row gap-1`}>
                        <Text style={tw`p-0 text-base text-white`}>
                          {value == 1
                            ? 'Vegan'
                            : value == 1.4
                              ? 'Keto'
                              : value == 1.7
                                ? 'Vegetarian'
                                : 'None'}
                        </Text>
                        <Ionicons
                          name='chevron-expand-outline'
                          size={24}
                          color={'rgba(255 255 255 / 0.7)'}
                        />
                      </Pressable>
                    </Menu.Trigger>
                    {/*@ts-ignore*/}
                    <Menu.Content>
                      <Menu.Item
                        key='vegan'
                        onSelect={() => {
                          onChange(1);
                        }}
                      >
                        <Menu.ItemIndicator />
                        <Menu.ItemTitle>Vegan</Menu.ItemTitle>
                      </Menu.Item>
                      <Menu.Item
                        key='keto'
                        onSelect={() => {
                          onChange(1.4);
                        }}
                      >
                        <Menu.ItemIndicator />
                        <Menu.ItemTitle>Keto</Menu.ItemTitle>
                      </Menu.Item>
                      <Menu.Item
                        key='vegetarian'
                        onSelect={() => {
                          onChange(1.7);
                        }}
                      >
                        <Menu.ItemIndicator />
                        <Menu.ItemTitle>Vegetarian</Menu.ItemTitle>
                      </Menu.Item>
                      <Menu.Item
                        key='nodiet'
                        onSelect={() => {
                          onChange(2.0);
                        }}
                      >
                        <Menu.ItemIndicator />
                        <Menu.ItemTitle>None</Menu.ItemTitle>
                      </Menu.Item>
                    </Menu.Content>
                  </Menu.Root>
                )}
              />
            }
          />
        </List>
      </View>
      <View>
        <Caption text='Restricted ingredients' style={`text-white`} />
        <List childrenStyle={tw`bg-white/25`} appearance='light'>
          <List.Item
            text={`Search for an ingredient`}
            shouldPress={false}
            rightComponent={
              <Controller
                control={control}
                name='searchIngredient'
                render={({ field: { onChange, value } }) => (
                  <Menu.Root>
                    <Menu.Trigger>
                      <Ionicons
                        name='chevron-down-outline'
                        size={20}
                        color={'rgba(255 255 255 / 0.7)'}
                      />
                    </Menu.Trigger>
                    {/*@ts-ignore*/}
                    <Menu.Content></Menu.Content>
                  </Menu.Root>
                )}
              />
            }
          />
        </List>
      </View>
      <Alergens />
      <LargeButton
        style={tw`mt-4`}
        contentContainerStyle={tw.style(`bg-white/70`)}
        textStyle={tw`text-black/80 text-lg`}
        onPress={handleSubmit(onSubmit)}
        active={isChanged()}
      >
        Save
      </LargeButton>
    <KeyboardAccessory inputAccessoryViewID={'id'} />
    </>
  );
}
