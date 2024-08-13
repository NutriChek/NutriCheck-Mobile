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
import FormInput from '@/components/form-input';
import KeyboardAccessory from '@/components/keyboard-accessory';
import List from '@/components/list';
import { kebabToTitleCase } from '@/lib/util';

const schema = yup
  .object({
    height: yup.number().required(),
    weight: yup.number().required(),
    age: yup.number().required(),
    activityLevel: yup.number().required(),
    sex: yup.string().required(),
    pregnant: yup.boolean(),
    breastfeeding: yup.boolean().required()
  })
  .required();

export default function BodyProfile() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      height: '0' as unknown as number,
      weight: '0' as unknown as number,
      age: '0' as unknown as number,
      activityLevel: '1' as unknown as number,
      sex: 'male',
      pregnant: false,
      breastfeeding: false
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
        text='Body profile'
        onPress={() => {
          router.back();
        }}
      />
      <ScrollView style={tw`px-4`}>
        <View style={tw`gap-6`}>
          <View style={tw`gap-2`}>
            <FormInput
              placeholder='Height'
              control={control}
              name='height'
              containerStyle={tw`bg-white/25 h-12 rounded-2xl px-3`}
              style={tw`font-normal text-white`}
              placeholderTextColor={tw.color('text-white/50')}
              titleText='Height'
              keyboardType='numeric'
            />
            <FormInput
              placeholder='Weight'
              control={control}
              name='weight'
              containerStyle={tw`bg-white/25 h-12 rounded-2xl px-3`}
              style={tw`font-normal text-white`}
              placeholderTextColor={tw.color('text-white/50')}
              titleText='Weight'
              keyboardType='numeric'
            />
            <FormInput
              placeholder='Age'
              control={control}
              name='age'
              containerStyle={tw`bg-white/25 h-12 rounded-2xl px-3`}
              style={tw`font-normal text-white`}
              placeholderTextColor={tw.color('text-white/50')}
              titleText='Age'
              keyboardType='numeric'
            />
          </View>
          <List childrenStyle={tw`bg-white/25`} appearance='light'>
            <List.Item
              text={`Activity Level`}
              shouldPress={false}
              rightComponent={
                <Controller
                  control={control}
                  name='activityLevel'
                  render={({ field: { onChange, value } }) => (
                    <Menu.Root>
                      <Menu.Trigger>
                        <View style={tw`flex-row gap-1`}>
                          <Text style={tw`p-0 text-base text-white`}>
                            {value == 1
                              ? 'Extremely inactive'
                              : value == 1.4
                                ? 'Sedentary'
                                : value == 1.7
                                  ? 'Moderately active'
                                  : value == 2.0
                                    ? 'Vigorously active'
                                    : value == 2.4
                                      ? 'Extremely active'
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
                          key='extremely-inactive'
                          onValueChange={() => {
                            onChange(1);
                          }}
                        >
                          <Menu.ItemIndicator />
                          <Menu.ItemTitle>Extremely inactive</Menu.ItemTitle>
                        </Menu.CheckboxItem>
                        <Menu.CheckboxItem
                          value={value === 1.4 ? 'on' : 'off'}
                          key='sedentary'
                          onValueChange={() => {
                            onChange(1.4);
                          }}
                        >
                          <Menu.ItemIndicator />
                          <Menu.ItemTitle>Sedentary</Menu.ItemTitle>
                        </Menu.CheckboxItem>
                        <Menu.CheckboxItem
                          value={value === 1.7 ? 'on' : 'off'}
                          key='moderately-active'
                          onValueChange={() => {
                            onChange(1.7);
                          }}
                        >
                          <Menu.ItemIndicator />
                          <Menu.ItemTitle>Moderately active</Menu.ItemTitle>
                        </Menu.CheckboxItem>
                        <Menu.CheckboxItem
                          value={value === 2.0 ? 'on' : 'off'}
                          key='vigorously-active'
                          onValueChange={() => {
                            onChange(2.0);
                          }}
                        >
                          <Menu.ItemIndicator />
                          <Menu.ItemTitle>Vigorously active</Menu.ItemTitle>
                        </Menu.CheckboxItem>
                        <Menu.CheckboxItem
                          value={value === 2.4 ? 'on' : 'off'}
                          key='extremely-active'
                          onValueChange={() => {
                            onChange(2.4);
                          }}
                        >
                          <Menu.ItemIndicator />
                          <Menu.ItemTitle>Extremely active</Menu.ItemTitle>
                        </Menu.CheckboxItem>
                      </Menu.Content>
                    </Menu.Root>
                  )}
                />
              }
            />
            <List.Item
              text={`Sex`}
              shouldPress={false}
              rightComponent={
                <Controller
                  control={control}
                  name='sex'
                  render={({ field: { onChange, value } }) => (
                    <Menu.Root>
                      <Menu.Trigger>
                        <View style={tw`flex-row gap-1`}>
                          <Text style={tw`p-0 text-base text-white`}>
                            {kebabToTitleCase(value)}
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
                          value={value === 'male' ? 'on' : 'off'}
                          key='male'
                          onValueChange={() => {
                            onChange('male');
                          }}
                        >
                          <Menu.ItemIndicator />
                          <Menu.ItemTitle>Male</Menu.ItemTitle>
                        </Menu.CheckboxItem>
                        <Menu.CheckboxItem
                          value={value === 'female' ? 'on' : 'off'}
                          key='female'
                          onValueChange={() => {
                            onChange('female');
                          }}
                        >
                          <Menu.ItemIndicator />
                          <Menu.ItemTitle>Female</Menu.ItemTitle>
                        </Menu.CheckboxItem>
                      </Menu.Content>
                    </Menu.Root>
                  )}
                />
              }
            />
            <List.Item
              text={`Pregnant`}
              shouldPress={false}
              rightComponent={
                <Controller
                  control={control}
                  name='pregnant'
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
              text={`Breastfeeding`}
              shouldPress={false}
              rightComponent={
                <Controller
                  control={control}
                  name='breastfeeding'
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
          </List>
          <LargeButton
            style={tw`mt-4`}
            contentContainerStyle={tw`bg-white/70`}
            textStyle={tw`text-black/80 text-lg`}
            onPress={handleSubmit(onSubmit)}
          >
            Save
          </LargeButton>
        </View>
      </ScrollView>
      <KeyboardAccessory inputAccessoryViewID={'id'} />
    </ModalWrapper>
  );
}
