import { Controller, Control } from 'react-hook-form';
import { TextInput } from 'react-native';
import tw from '@/lib/tailwind';

export default function InputField({
  name,
  control,
  placeholder,
  password = false,
  textContentType
}: {
  name: string;
  control: Control<any>;
  placeholder?: string;
  password?: boolean;
  textContentType?: 'emailAddress' | 'password';
}) {
  return (
    <>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={tw`rounded-2xl bg-white px-3.5 py-3`}
            placeholder={placeholder}
            onChange={onChange}
            secureTextEntry={password}
            value={value}
            textContentType={textContentType}
          />
        )}
        name={name}
      />
    </>
  );
}
