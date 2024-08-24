import tw from '@/lib/tailwind';
import { Pressable, Text, View } from 'react-native';
import React from 'react';
import { router } from 'expo-router';
import * as Menu from 'zeego/dropdown-menu';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import List from '@/components/list';
import Caption from '@/components/caption';

const schema = yup
  .object({
    nutriscore: yup.number().required(),
    lowSalt: yup.boolean(),
    lowSugar: yup.boolean().required(),
    lowFat: yup.boolean().required(),
    lowSaturatedFat: yup.boolean().required()
  })
  .required();

export default function Nutriments() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      nutriscore: 'Choose' as unknown as number,
      lowSalt: false,
      lowSugar: false,
      lowFat: false,
      lowSaturatedFat: false
    },
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  const onSubmit: any = (data: typeof schema.fields) => {
    console.log(data);
    router.back();
  };

  return (
    <View>
      <Caption style='text-white' text={'Nutriments'} />
      <List childrenStyle={tw`bg-white/25`} appearance='light'>
        <List.Item
          text={`Nutriscore`}
          shouldPress={false}
          rightComponent={
            <Controller
              control={control}
              name='nutriscore'
              render={({ field: { onChange, value } }) => (
                <Menu.Root>
                  <Menu.Trigger>
                    <Pressable style={tw`flex-row gap-1`}>
                      <Text style={tw`p-0 text-base text-white`}>
                        {value == 1
                          ? 'A'
                          : value == 1.4
                            ? 'B'
                            : value == 1.7
                              ? 'C'
                              : value == 2.0
                                ? 'D'
                                : value}
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
                      key='A'
                      onSelect={() => {
                        onChange(1);
                      }}
                    >
                      <Menu.ItemIndicator />
                      <Menu.ItemTitle>A</Menu.ItemTitle>
                    </Menu.Item>
                    <Menu.Item
                      key='B'
                      onSelect={() => {
                        onChange(1.4);
                      }}
                    >
                      <Menu.ItemIndicator />
                      <Menu.ItemTitle>B</Menu.ItemTitle>
                    </Menu.Item>
                    <Menu.Item
                      key='C'
                      onSelect={() => {
                        onChange(1.7);
                      }}
                    >
                      <Menu.ItemIndicator />
                      <Menu.ItemTitle>C</Menu.ItemTitle>
                    </Menu.Item>
                    <Menu.Item
                      key='D'
                      onSelect={() => {
                        onChange(2.0);
                      }}
                    >
                      <Menu.ItemIndicator />
                      <Menu.ItemTitle>D</Menu.ItemTitle>
                    </Menu.Item>
                  </Menu.Content>
                </Menu.Root>
              )}
            />
          }
        />
        <List.Item
          text={`Salt in low quantity`}
          shouldPress={false}
          rightComponent={
            <Controller
              control={control}
              name='lowSalt'
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
          text={`Sugars in low quantity`}
          shouldPress={false}
          rightComponent={
            <Controller
              control={control}
              name='lowSugar'
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
          text={`Fat in low quantity`}
          shouldPress={false}
          rightComponent={
            <Controller
              control={control}
              name='lowFat'
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
          text={`Saturated fat in low quantity`}
          shouldPress={false}
          rightComponent={
            <Controller
              control={control}
              name='lowSaturatedFat'
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
      </List>
    </View>
  );
}
