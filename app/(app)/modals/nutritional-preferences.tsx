import tw from '@/lib/tailwind';
import { ScrollView, Text, View } from 'react-native';
import React from 'react';
import { router } from 'expo-router';
import ModalHeader from '@/components/modal-header';
import * as Menu from 'zeego/dropdown-menu';
import Ionicons from '@expo/vector-icons/Ionicons';
import ModalWrapper from '@/components/modal-wrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import LargeButton from '@/components/form-button';
import KeyboardAccessory from '@/components/keyboard-accessory';
import List from '@/components/list';
import Alergens from '@/components/alergens';
import Nutriments from '@/components/nutriments';

const schema = yup
  .object({
    palmOil: yup.boolean().required(),
    diet: yup.number().required(),
    searchIngredient: yup.number().required(),
  })
  .required();

export default function NutritionalPreferences() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      palmOil: false,
      diet: 'Choose' as unknown as number,
      searchIngredient: ' ' as unknown as number
    },
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  const onSubmit: any = (data: typeof schema.fields) => {
    console.log(data);
    router.back();
  };

  return (
    <ModalWrapper>
      <ModalHeader
        text='Nutritional Preferences'
        onPress={() => {
          router.back();
        }}
      />
      <ScrollView style={tw`px-4`}>
        <Nutriments/>
        <View style={tw`gap-3`}>
          <Text style={tw`text-xl font-bold text-white pt-4 pl-4`}>Ingredients</Text>
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
                        <View style={tw`flex-row gap-1`}>
                          <Text style={tw`p-0 text-base text-white`}>
                            {value ? 'Yes' : 'No'}
                          </Text>
                          <Ionicons
                            name='chevron-expand-outline'
                            size={24}
                            color={'rgba(255 255 255 / 0.7)'}
                          />
                        </View>
                      </Menu.Trigger>
                      {/*@ts-ignore*/}
                      <Menu.Content>
                        <Menu.CheckboxItem
                          value={value ? 'on' : 'off'}
                          key='yes'
                          onValueChange={() => {
                            onChange(true);
                          }}
                        >
                          <Menu.ItemIndicator />
                          <Menu.ItemTitle>Yes</Menu.ItemTitle>
                        </Menu.CheckboxItem>
                        <Menu.CheckboxItem
                          value={!value ? 'on' : 'off'}
                          key='no'
                          onValueChange={() => {
                            onChange(false);
                          }}
                        >
                          <Menu.ItemIndicator />
                          <Menu.ItemTitle>No</Menu.ItemTitle>
                        </Menu.CheckboxItem>
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
                        <View style={tw`flex-row gap-1`}>
                          <Text style={tw`p-0 text-base text-white`}>
                            {value == 1
                              ? 'Vegan'
                              : value == 1.4
                                ? 'Keto'
                                : value == 1.7
                                  ? 'Vegetarian'
                                  : value == 2.0
                                    ? 'None'
                                    : value}
                          </Text>
                          <Ionicons
                            name='chevron-expand-outline'
                            size={24}
                            color={'rgba(255 255 255 / 0.7)'}
                          />
                        </View>
                      </Menu.Trigger>
                      {/*@ts-ignore*/}
                      <Menu.Content>
                        <Menu.CheckboxItem
                          value={value === 1 ? 'on' : 'off'}
                          key='vegan'
                          onValueChange={() => {
                            onChange(1);
                          }}
                        >
                          <Menu.ItemIndicator />
                          <Menu.ItemTitle>Vegan</Menu.ItemTitle>
                        </Menu.CheckboxItem>
                        <Menu.CheckboxItem
                          value={value === 1.4 ? 'on' : 'off'}
                          key='keto'
                          onValueChange={() => {
                            onChange(1.4);
                          }}
                        >
                          <Menu.ItemIndicator />
                          <Menu.ItemTitle>Keto</Menu.ItemTitle>
                        </Menu.CheckboxItem>
                        <Menu.CheckboxItem
                          value={value === 1.7 ? 'on' : 'off'}
                          key='vegetarian'
                          onValueChange={() => {
                            onChange(1.7);
                          }}
                        >
                          <Menu.ItemIndicator />
                          <Menu.ItemTitle>Vegetarian</Menu.ItemTitle>
                        </Menu.CheckboxItem>
                        <Menu.CheckboxItem
                          value={value === 2.0 ? 'on' : 'off'}
                          key='nodiet'
                          onValueChange={() => {
                            onChange(2.0);
                          }}
                        >
                          <Menu.ItemIndicator />
                          <Menu.ItemTitle>None</Menu.ItemTitle>
                        </Menu.CheckboxItem>
                      </Menu.Content>
                    </Menu.Root>
                  )}
                />
              }
            />
            
          </List>
        </View>
        <View style={tw`gap-3`}>
          <Text style={tw`text-base font-bold text-white pt-2 pl-4`}>Restricted Ingredients</Text>
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
                      <Menu.Content>
                       
                      </Menu.Content>
                    </Menu.Root>
                  )}
                />
              }
            />
          </List>
        </View>
        <Alergens/>
        <LargeButton
            style={tw`mt-4`}
            contentContainerStyle={tw`bg-white/70`}
            textStyle={tw`text-black/80 text-lg`}
            onPress={handleSubmit(onSubmit)}
          >
            Save
          </LargeButton>
      </ScrollView>
      <KeyboardAccessory inputAccessoryViewID={'id'} />
    </ModalWrapper>
  );
}
