import tw from 'twrnc';
import { Link } from 'expo-router';
import { Text, TextInput, View, Pressable } from 'react-native';
import React from 'react';

function SignIn() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const inputStyle = tw`bg-white px-3.5 py-3 rounded-2xl`;

  const callApi = () => {
    console.log('Email: ' + email);
    console.log('Password: ' + password);

    setEmail('');
    setPassword('');
  };

  return (
    <>
      <View style={tw`px-4`}>
        <Text style={tw`mt-19 mb-12 text-3xl font-black`}>Sign in</Text>
        <View style={tw`flex gap-1.5`}>
          <TextInput
            style={inputStyle}
            placeholder='Email'
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
          <TextInput
            style={inputStyle}
            secureTextEntry={true}
            placeholder='Password'
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
        </View>
        <Pressable
          style={tw`mb-3 mt-3 rounded-full bg-blue-900 p-3.5`}
          onPress={callApi}
        >
          <Text style={tw`text-center text-white`}>Sign In</Text>
        </Pressable>
        <Link style={tw`underline`} href='/signup'>
          Don't have an account? Sign up
        </Link>
      </View>
    </>
  );
}

export default SignIn;
