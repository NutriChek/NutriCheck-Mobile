import { Pressable, Text } from 'react-native';
import tw from '@/lib/tailwind';
import { Controller } from 'react-hook-form';
import * as Menu from 'zeego/dropdown-menu';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';

interface SelectControllerItem {
  key: string;
  value: any;
  label: string;
}

export default function SelectController({
  control,
  name,
  data,
  defaultLabel = 'Choose'
}: {
  control: any;
  name: string;
  data: SelectControllerItem[];
  defaultLabel?: string;
}) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <Menu.Root>
          <Menu.Trigger>
            <Pressable style={tw`flex-row gap-1`}>
              <Text style={tw`p-0 text-base text-white`}>
                {data.find((i) => i.value == value)?.label ?? defaultLabel}
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
            {data.map((item) => (
              <Menu.Item key={item.key} onSelect={() => onChange(item.value)}>
                <Menu.ItemIndicator />
                <Menu.ItemTitle>{item.label}</Menu.ItemTitle>
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Root>
      )}
    />
  );
}
