import tw from '@/lib/tailwind';
import { BlurView } from 'expo-blur';
import {
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View
} from 'react-native';
import React, { ReactNode } from 'react';
import { router } from 'expo-router';
import ModalHeader from '@/components/modal-header';
import * as Menu from 'zeego/dropdown-menu';
import Ionicons from '@expo/vector-icons/Ionicons';

const Wrapper = ({ children }: { children: ReactNode }) =>
  Platform.OS === 'ios' ? (
    // <View style={tw`flex-1 bg-[#000000]`}>{children}</View>
    <BlurView style={tw`flex-1`} intensity={70}>
      {children}
    </BlurView>
  ) : (
    <View style={tw`flex-1 bg-[#000000]`}>{children}</View>
    // <BlurView style={tw`flex-1`} intensity={70} experimentalBlurMethod='dimezisBlurView'>
    //   {children}
    // </BlurView>
  );

export default function BodyProfile() {
  return (
    <Wrapper>
      <ModalHeader
        text='Body profile'
        onPress={() => {
          router.back();
        }}
      />
      <ScrollView style={tw`px-4`}>
        <View style={tw`gap-3`}>
          <View>
            <Text style={tw`pb-1 pl-3 text-base text-white`}>Height</Text>
            <TextInput
              style={tw`rounded-2xl bg-white/25 p-3 text-base text-white`}
              placeholder='Height'
              placeholderTextColor={tw.color('text-white/40')}
              keyboardType='numeric'
            />
          </View>
          <View>
            <Text style={tw`pb-1 pl-3 text-base text-white`}>Weight</Text>
            <TextInput
              style={tw`rounded-2xl bg-white/25 p-3 text-base text-white`}
              placeholder='Weight'
              placeholderTextColor={tw.color('text-white/40')}
              keyboardType='numeric'
            />
          </View>
          <View>
            <Text style={tw`pb-1 pl-3 text-base text-white`}>Age</Text>
            <TextInput
              style={tw`rounded-2xl bg-white/25 p-3 text-base text-white`}
              placeholder='Age'
              placeholderTextColor={tw.color('text-white/40')}
              keyboardType='numeric'
            />
          </View>
          <View
            style={tw`flex-row justify-between border-b-[0.7px] border-b-black/10 py-3 pb-3 pr-4 dark:border-b-white/10`}
          >
            <Text style={tw`p-0 text-lg text-black dark:text-white`}>
              Activity Level
            </Text>
            <Menu.Root>
              <Menu.Trigger>
                <View style={tw`flex-row gap-1`}>
                  <Text
                    style={tw`p-0 text-lg text-white`}
                  >
                    Activity Level
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
                <Menu.Item key='extremely-inactive'>
                  Extremely inactive
                </Menu.Item>
                <Menu.Item key='sedentary'>Sedentary</Menu.Item>
                <Menu.Item key='moderately-active'>Moderately active</Menu.Item>
                <Menu.Item key='vigotously-active'>Vigorously active</Menu.Item>
                <Menu.Item key='extremely-active'>Extremely active</Menu.Item>
              </Menu.Content>
            </Menu.Root>
          </View>
          <Pressable style={tw`items-center rounded-2xl bg-blue-500 p-3`}>
            <Text style={tw`text-base text-white`}>Save</Text>
          </Pressable>
        </View>
      </ScrollView>
    </Wrapper>
  );
}
