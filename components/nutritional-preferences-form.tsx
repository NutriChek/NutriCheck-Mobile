import {
  NutritionalPreferences,
  useUpdateNutritionalPreferences
} from '@/api/nutritional-preferences';
import LargeButton from '@/components/form-button';
import List from '@/components/list';
import tw from '@/lib/tailwind';
import Ionicons from '@expo/vector-icons/Ionicons';
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { View } from 'react-native';
import * as yup from 'yup';
import * as Menu from 'zeego/dropdown-menu';
import Caption from './caption';
import KeyboardAccessory from './keyboard-accessory';
import Nutriments from './nutriments';
import SelectController from './select-controller';
import YesNoController from './yes-no-controller';
import Allergens from '@/components/allergens';

const schema = yup
  .object({
    nutriscore: yup.number().required(),
    lowSalt: yup.boolean().required(),
    lowSugar: yup.boolean().required(),
    lowFat: yup.boolean().required(),
    lowSaturatedFat: yup.boolean().required(),

    palmOil: yup.boolean().required(),
    diet: yup.number().required(),

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
    sulphurs: yup.boolean().required()
  })
  .required();

export default function NutritionalPreferencesForm({
  data,
  onSuccess
}: {
  data: NutritionalPreferences;
  onSuccess: () => void;
}) {
  const updateNutritionalPreferences = useUpdateNutritionalPreferences();

  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      nutriscore: data.nutriscore || (0 as unknown as number),
      lowSalt: data.lowSalt || false,
      lowSugar: data.lowSugar || false,
      lowFat: data.lowFat || false,
      lowSaturatedFat: data.lowSaturatedFat || false,

      palmOil: data.palmOil || false,
      diet: data.diet || (2.0 as unknown as number),

      gluten: data.gluten || false,
      milk: data.milk || false,
      eggs: data.eggs || false,
      nuts: data.nuts || false,
      peanuts: data.peanuts || false,
      sesameSeeds: data.sesameSeeds || false,
      soybeans: data.soybeans || false,
      celery: data.celery || false,
      mustard: data.mustard || false,
      lupin: data.lupin || false,
      fish: data.fish || false,
      crustaceans: data.crustaceans || false,
      molluscs: data.molluscs || false,
      sulphurs: data.sulphurs || false
    },
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  const formWatch = watch();

  const isChanged = () => {
    return (
      data.nutriscore != formWatch.nutriscore ||
      data.lowSalt != formWatch.lowSalt ||
      data.lowSugar != formWatch.lowSugar ||
      data.lowFat != formWatch.lowFat ||
      data.lowSaturatedFat != formWatch.lowSaturatedFat ||
      data.palmOil != formWatch.palmOil ||
      data.diet != formWatch.diet ||
      data.gluten != formWatch.gluten ||
      data.milk != formWatch.gluten ||
      data.eggs != formWatch.eggs ||
      data.nuts != formWatch.nuts ||
      data.peanuts != formWatch.peanuts ||
      data.sesameSeeds != formWatch.sesameSeeds ||
      data.soybeans != formWatch.soybeans ||
      data.celery != formWatch.celery ||
      data.mustard != formWatch.mustard ||
      data.lupin != formWatch.lupin ||
      data.fish != formWatch.fish ||
      data.crustaceans != formWatch.crustaceans ||
      data.molluscs != formWatch.molluscs ||
      data.sulphurs != formWatch.sulphurs
    );
  };

  const onSubmit: any = (data: NutritionalPreferences) => {
    updateNutritionalPreferences.mutate(data, {
      onSuccess
    });
  };

  return (
    <>
      <Nutriments />
      <View>
        <Caption style={tw`text-white`} text={'Ingredients'} />
        <List childrenStyle={tw`bg-white/25`} appearance='light'>
          <List.Item
            text={`Palm oil`}
            shouldPress={false}
            rightComponent={
              <YesNoController control={control} name='palmOil' />
            }
          />
          <List.Item
            text={`Diet`}
            shouldPress={false}
            rightComponent={
              <SelectController
                control={control}
                name='diet'
                data={[
                  { value: 1, key: 'vegan', label: 'Vegan' },
                  { value: 1.4, key: 'keto', label: 'Keto' },
                  { value: 1.7, key: 'vegetarian', label: 'Vegetarian' },
                  { value: 2.0, key: 'nodiet', label: 'None' }
                ]}
                defaultLabel='None'
              />
            }
          />
        </List>
      </View>
      <View>
        <Caption text='Restricted ingredients' style={tw`text-white`} />
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
      <Allergens />
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
