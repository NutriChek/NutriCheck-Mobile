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
import SelectController from './select-controller';

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
      <Caption style={tw`text-white`} text={'Nutriments'} />
      <List childrenStyle={tw`bg-white/25`} appearance='light'>
        <List.Item
          text={`Nutriscore`}
          shouldPress={false}
          rightComponent={
            <SelectController
              control={control}
              name='nutriscore'
              data={[
                { value: 1, key: 'A', label: 'A' },
                { value: 1.4, key: 'B', label: 'B' },
                { value: 1.7, key: 'C', label: 'C' },
                { value: 2.0, key: 'D', label: 'D' }
              ]}
            />
          }
        />
        <List.Item
          text={`Salt in low quantity`}
          shouldPress={false}
          rightComponent={<YesNoController control={control} name="lowSalt" />}
        />
        <List.Item
          text={`Sugars in low quantity`}
          shouldPress={false}
          rightComponent={<YesNoController control={control} name="lowSugar" />}
        />
        <List.Item
          text={`Fat in low quantity`}
          shouldPress={false}
          rightComponent={<YesNoController control={control} name="lowFat" />}
        />
        <List.Item
          text={`Saturated fat in low quantity`}
          shouldPress={false}
          rightComponent={<YesNoController control={control} name="lowSaturatedFat" />}
        />
      </List>
    </View>
  );
}
