import tw from '@/lib/tailwind';
import { View } from 'react-native';
import React from 'react';
import { router } from 'expo-router';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import List from '@/components/list';
import Caption from '@/components/caption';
import YesNoController from './yes-no-controller';

const schema = yup
  .object({
    gluten: yup.boolean(),
    milk: yup.boolean(),
    eggs: yup.boolean(),
    nuts: yup.boolean(),
    peanuts: yup.boolean(),
    sesameSeeds: yup.boolean(),
    soybeans: yup.boolean(),
    celery: yup.boolean(),
    mustard: yup.boolean(),
    lupin: yup.boolean(),
    fish: yup.boolean(),
    crustaceans: yup.boolean(),
    molluscs: yup.boolean(),
    sulphurs: yup.boolean()
  })
  .required();

export default function Allergens() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      gluten: false,
      milk: false,
      eggs: false,
      nuts: false,
      peanuts: false,
      sesameSeeds: false,
      soybeans: false,
      celery: false,
      mustard: false,
      lupin: false,
      fish: false,
      crustaceans: false,
      molluscs: false,
      sulphurs: false
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
      <Caption text='Allergens' style={tw`text-white`} />
      <List childrenStyle={tw`bg-white/25`} appearance='light'>
        <List.Item
          text={`Gluten`}
          shouldPress={false}
          rightComponent={<YesNoController control={control} name='gluten' />}
        />
        <List.Item
          text={`Milk`}
          shouldPress={false}
          rightComponent={<YesNoController control={control} name='milk' />}
        />
        <List.Item
          text={`Eggs`}
          shouldPress={false}
          rightComponent={<YesNoController control={control} name='eggs' />}
        />
        <List.Item
          text={`Nuts`}
          shouldPress={false}
          rightComponent={<YesNoController control={control} name='nuts' />}
        />
        <List.Item
          text={`Peanuts`}
          shouldPress={false}
          rightComponent={<YesNoController control={control} name='peanuts' />}
        />
        <List.Item
          text={`Sesame Seeds`}
          shouldPress={false}
          rightComponent={
            <YesNoController control={control} name='sesameSeeds' />
          }
        />
        <List.Item
          text={`Soybeans`}
          shouldPress={false}
          rightComponent={<YesNoController control={control} name='soybeans' />}
        />
        <List.Item
          text={`Celery`}
          shouldPress={false}
          rightComponent={<YesNoController control={control} name='celery' />}
        />
        <List.Item
          text={`Mustard`}
          shouldPress={false}
          rightComponent={<YesNoController control={control} name='mustard' />}
        />
        <List.Item
          text={`Lupin`}
          shouldPress={false}
          rightComponent={<YesNoController control={control} name='lupin' />}
        />
        <List.Item
          text={`Fish`}
          shouldPress={false}
          rightComponent={<YesNoController control={control} name='fish' />}
        />
        <List.Item
          text={`Crustaceans`}
          shouldPress={false}
          rightComponent={
            <YesNoController control={control} name='crustaceans' />
          }
        />
        <List.Item
          text={`Molluscs`}
          shouldPress={false}
          rightComponent={<YesNoController control={control} name='molluscs' />}
        />
        <List.Item
          text={`Sulphur dioxide and sulphites`}
          shouldPress={false}
          rightComponent={<YesNoController control={control} name='sulphurs' />}
        />
      </List>
    </View>
  );
}
