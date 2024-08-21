import { Text, View } from 'react-native';
import tw from '@/lib/tailwind';
import FormInput from '@/components/form-input';
import List from '@/components/list';
import { Controller, useForm } from 'react-hook-form';
import * as Menu from 'zeego/dropdown-menu';
import Ionicons from '@expo/vector-icons/Ionicons';
import { kebabToTitleCase } from '@/lib/util';
import LargeButton from '@/components/form-button';
import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { BodyProfile, useUpdateBodyProfile } from '@/api/body-profile';

const schema = yup
  .object({
    weight: yup
      .number()
      .typeError('Weight is required')
      .required('Weight is required')
      .min(30, 'Weight must be between 30 and 200 kg')
      .max(200, 'Weight must be between 30 and 200 kg'),
    height: yup
      .number()
      .typeError('Height is required')
      .required('Height is required')
      .min(100, 'Height must be between 100 and 250 cm')
      .max(250, 'Height must be between 100 and 250 cm'),
    age: yup
      .number()
      .typeError('Age is required')
      .required('Age is required')
      .min(0, 'Age must be between 0 and 100 y/o')
      .max(100, 'Age must be between 0 and 100 y/o'),
    sex: yup.string().required('Sex is required'),
    activityLevel: yup
      .number()
      .typeError('Activity level is required')
      .required()
      .min(1)
      .max(2.4),
    pregnant: yup.boolean(),
    breastfeeding: yup.boolean().required()
  })
  .required();

export default function BodyProfileForm({
  height,
  weight,
  age,
  sex,
  activityLevel,
  pregnant,
  breastfeeding,
  onSuccess
}: {
  height: number | null | undefined;
  weight: number | null | undefined;
  age: number | null | undefined;
  sex: string | null | undefined;
  activityLevel: number | null | undefined;
  pregnant: boolean;
  breastfeeding: boolean;
  onSuccess: () => void;
}) {
  const updateBodyProfile = useUpdateBodyProfile();

  const { control, handleSubmit, watch, setValue, formState } = useForm({
    defaultValues: {
      height: (height ? height.toString() : '') as unknown as number,
      weight: (weight ? weight.toString() : '') as unknown as number,
      age: (age ? age.toString() : '') as unknown as number,
      activityLevel: (activityLevel
        ? activityLevel.toString()
        : '') as unknown as number,
      sex: sex ?? '',
      pregnant: pregnant,
      breastfeeding: breastfeeding
    },
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  const formWatch = watch();

  const isChanged = () => {
    return (
      height != formWatch.height ||
      weight != formWatch.weight ||
      age != formWatch.age ||
      activityLevel != formWatch.activityLevel ||
      sex != formWatch.sex ||
      pregnant != formWatch.pregnant ||
      breastfeeding != formWatch.breastfeeding
    );
  };

  const onSubmit: any = (data: BodyProfile) => {
    updateBodyProfile.mutate(data, {
      onSuccess
    });
  };

  return (
    <View style={tw`gap-6`}>
      <View style={tw`gap-2`}>
        <FormInput
          placeholder={height ? 'Height' : 'Unknown'}
          control={control}
          name='height'
          containerStyle={tw`bg-white/25 h-12 rounded-2xl px-3`}
          style={tw`font-normal text-white`}
          placeholderTextColor={tw.color('text-white/50')}
          titleText='Height (cm)'
          keyboardType='numeric'
        />
        <FormInput
          placeholder={weight ? 'Weight' : 'Unknown'}
          control={control}
          name='weight'
          containerStyle={tw`bg-white/25 h-12 rounded-2xl px-3`}
          style={tw`font-normal text-white`}
          placeholderTextColor={tw.color('text-white/50')}
          titleText='Weight (kg)'
          keyboardType='numeric'
        />
        <FormInput
          placeholder={age ? 'Age' : 'Unknown'}
          control={control}
          name='age'
          containerStyle={tw`bg-white/25 h-12 rounded-2xl px-3`}
          style={tw`font-normal text-white`}
          placeholderTextColor={tw.color('text-white/50')}
          titleText='Age'
          keyboardType='numeric'
        />
      </View>
      <View>
        <List
          childrenStyle={tw`bg-white/25`}
          style={tw.style(
            (formState.errors.activityLevel?.message ||
              formState.errors.sex?.message) &&
              `border border-red-500`
          )}
          appearance='light'
        >
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
                                    : 'Unknown'}
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
                        value={value == 1 ? 'on' : 'off'}
                        key='extremely-inactive'
                        onValueChange={() => {
                          onChange(1);
                        }}
                      >
                        <Menu.ItemIndicator />
                        <Menu.ItemTitle>Extremely inactive</Menu.ItemTitle>
                      </Menu.CheckboxItem>
                      <Menu.CheckboxItem
                        value={value == 1.4 ? 'on' : 'off'}
                        key='sedentary'
                        onValueChange={() => {
                          onChange(1.4);
                        }}
                      >
                        <Menu.ItemIndicator />
                        <Menu.ItemTitle>Sedentary</Menu.ItemTitle>
                      </Menu.CheckboxItem>
                      <Menu.CheckboxItem
                        value={value == 1.7 ? 'on' : 'off'}
                        key='moderately-active'
                        onValueChange={() => {
                          onChange(1.7);
                        }}
                      >
                        <Menu.ItemIndicator />
                        <Menu.ItemTitle>Moderately active</Menu.ItemTitle>
                      </Menu.CheckboxItem>
                      <Menu.CheckboxItem
                        value={value == 2.0 ? 'on' : 'off'}
                        key='vigorously-active'
                        onValueChange={() => {
                          onChange(2.0);
                        }}
                      >
                        <Menu.ItemIndicator />
                        <Menu.ItemTitle>Vigorously active</Menu.ItemTitle>
                      </Menu.CheckboxItem>
                      <Menu.CheckboxItem
                        value={value == 2.4 ? 'on' : 'off'}
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
                          {value ? kebabToTitleCase(value) : 'Unknown'}
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
                          setValue('pregnant', false);
                          setValue('breastfeeding', false);
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
                        disabled={!(formWatch.sex === 'female')}
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
                        disabled={
                          !(formWatch.sex === 'female') && !formWatch.pregnant
                        }
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
        {formState.errors.activityLevel?.message && (
          <Text style={tw`mt-1 text-sm text-red-400`}>
            {formState.errors.activityLevel?.message}
          </Text>
        )}
        {formState.errors.sex?.message && (
          <Text style={tw`mt-1 text-sm text-red-400`}>
            {formState.errors.sex?.message}
          </Text>
        )}
      </View>
      <LargeButton
        style={tw`mt-4`}
        contentContainerStyle={tw`bg-white/70`}
        textStyle={tw`text-black/80 text-lg`}
        onPress={handleSubmit(onSubmit)}
        active={isChanged()}
      >
        Save
      </LargeButton>
    </View>
  );
}
