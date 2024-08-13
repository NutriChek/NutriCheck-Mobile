import {
  KeyboardTypeOptions,
  Pressable,
  Text,
  TextInput,
  View
} from 'react-native';
import { Controller } from 'react-hook-form';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import tw from '@/lib/tailwind';
import { ClassInput } from 'twrnc';

export default function FormInput({
  placeholder,
  control,
  name,
  password = false,
  style,
  containerStyle,
  placeholderTextColor,
  titleText,
  titleStyle,
  keyboardType,
  inputAccessoryViewID = 'id'
}: {
  placeholder: string;
  control: any;
  name: string;
  password?: boolean;
  style?: ClassInput;
  containerStyle?: ClassInput;
  placeholderTextColor?: string;
  titleText?: string;
  titleStyle?: ClassInput;
  keyboardType?: KeyboardTypeOptions;
  inputAccessoryViewID?: string;
}) {
  const [showPassword, setShowPassword] = useState(true);

  return (
    <Controller
      control={control}
      rules={{
        required: true
      }}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error }
      }) => (
        <View style={tw`gap-1`}>
          {titleText && (
            <Text
              style={tw.style(
                `pl-3 text-sm font-medium text-white`,
                titleStyle
              )}
            >
              {titleText}
            </Text>
          )}
          <View
            style={tw.style(
              `h-16 w-full flex-row items-center justify-between rounded-full bg-white/60 px-6`,
              error && 'border border-red-500',
              containerStyle
            )}
          >
            <TextInput
              style={tw.style(
                `flex-1 text-base font-semibold leading-tight text-black`,
                style
              )}
              placeholderTextColor={
                placeholderTextColor
                  ? placeholderTextColor
                  : tw.color('text-black/40')
              }
              placeholder={placeholder}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry={password && showPassword}
              keyboardType={keyboardType}
              inputAccessoryViewID={inputAccessoryViewID}
            />
            {password && (
              <Pressable
                onPress={() => {
                  setShowPassword(!showPassword);
                }}
              >
                <Ionicons
                  name={showPassword ? 'eye-off' : 'eye'}
                  size={24}
                  color={tw.color('black/50')}
                  password={password}
                />
              </Pressable>
            )}
          </View>
          {error && (
            <Text style={tw`mt-1 text-sm text-red-500`}>{error.message}</Text>
          )}
        </View>
      )}
      name={name}
    />
  );
}
