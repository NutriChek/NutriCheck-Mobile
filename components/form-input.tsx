import { Pressable, Text, TextInput, View } from 'react-native';
import { Controller } from 'react-hook-form';
import tw from 'twrnc';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';

export default function FormInput({
  placeholder,
  control,
  name,
  password = false
}: {
  placeholder: string;
  control: any;
  name: string;
  password?: boolean;
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
        <View>
          <View
            style={tw.style(
              `h-16 w-full flex-row items-center justify-between rounded-full bg-white/60 px-6`,
              error && 'border border-red-500'
            )}
          >
            <TextInput
              style={tw`text-base leading-tight flex-1 font-semibold text-black`}
              placeholderTextColor={tw.color('text-black/40')}
              placeholder={placeholder}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry={password && showPassword}
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
