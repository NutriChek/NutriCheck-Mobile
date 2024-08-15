import tw from '@/lib/tailwind';
import { Text, View } from 'react-native';
import React from 'react';
import { router } from 'expo-router';
import * as Menu from 'zeego/dropdown-menu';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import List from '@/components/list';

const schema = yup
  .object({
    gluten:  yup.boolean(),
    milk:  yup.boolean(),
    eggs:  yup.boolean(),
    nuts:  yup.boolean(),
    peanuts:  yup.boolean(),
    sesameseeds:  yup.boolean(),
    soybeans:  yup.boolean(),
    celery:  yup.boolean(),
    mustard:  yup.boolean(),
    lupin:  yup.boolean(),
    fish:  yup.boolean(),
    crustaceans:  yup.boolean(),
    molluscs:  yup.boolean(),
    sulphurs:  yup.boolean()
  })
  .required();

export default function Alergens() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
        gluten:  false,
        milk:  false,
        eggs:  false,
        nuts:  false,
        peanuts:  false,
        sesameseeds:  false,
        soybeans:  false,
        celery:  false,
        mustard:  false,
        lupin:  false,
        fish:  false,
        crustaceans:  false,
        molluscs:  false,
        sulphurs:  false
    },
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  const onSubmit: any = (data: typeof schema.fields) => {
    console.log(data);
    router.back();
  };

  return (
    <View style={tw`gap-3`}>
          <Text style={tw`text-xl font-bold text-white pt-4 pl-4`}>Alergens</Text>
          <List childrenStyle={tw`bg-white/25`} appearance='light'>
            <List.Item
              text={`Gluten`}
              shouldPress={false}
              rightComponent={
                <Controller
                  control={control}
                  name='gluten'
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
              text={`Milk`}
              shouldPress={false}
              rightComponent={
                <Controller
                  control={control}
                  name='milk'
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
              text={`Eggs`}
              shouldPress={false}
              rightComponent={
                <Controller
                  control={control}
                  name='eggs'
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
              text={`Nuts`}
              shouldPress={false}
              rightComponent={
                <Controller
                  control={control}
                  name='nuts'
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
              text={`Peanuts`}
              shouldPress={false}
              rightComponent={
                <Controller
                  control={control}
                  name='peanuts'
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
              text={`Sesame Seeds`}
              shouldPress={false}
              rightComponent={
                <Controller
                  control={control}
                  name='sesameseeds'
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
              text={`Soybeans`}
              shouldPress={false}
              rightComponent={
                <Controller
                  control={control}
                  name='soybeans'
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
              text={`Celery`}
              shouldPress={false}
              rightComponent={
                <Controller
                  control={control}
                  name='celery'
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
              text={`Mustard`}
              shouldPress={false}
              rightComponent={
                <Controller
                  control={control}
                  name='mustard'
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
              text={`Lupin`}
              shouldPress={false}
              rightComponent={
                <Controller
                  control={control}
                  name='lupin'
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
              text={`Fish`}
              shouldPress={false}
              rightComponent={
                <Controller
                  control={control}
                  name='fish'
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
              text={`Crustaceans`}
              shouldPress={false}
              rightComponent={
                <Controller
                  control={control}
                  name='crustaceans'
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
              text={`Molluscs`}
              shouldPress={false}
              rightComponent={
                <Controller
                  control={control}
                  name='molluscs'
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
              text={`Sulphur dioxide and sulphites`}
              shouldPress={false}
              rightComponent={
                <Controller
                  control={control}
                  name='sulphurs'
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
        </View>
  );
}