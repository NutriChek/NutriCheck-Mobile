import * as React from 'react';

import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet
} from 'react-native';
import { BlurView } from 'expo-blur';
import tw from 'twrnc';

export default function App() {
  const intensities = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  return (
    <>
      <ScrollView pagingEnabled>
        <ImageBackground
          source={require('@/assets/images/logo-color.png')}
          style={styles.image}
        >
          <BlurView
            intensity={100}
            style={tw`absolute bottom-0 left-0 right-0 h-40 w-40`}
          />
        </ImageBackground>
      </ScrollView>
      <BlurView
        intensity={100}
        style={tw`absolute bottom-0 left-0 right-0 h-40 w-40`}
      />
      {/*<VariableBlurView maxBlurRadius={5} style={styles.top} />*/}
      {intensities.map((intensity, index) => (
        <BlurView
          key={index}
          intensity={intensity}
          style={tw`absolute bottom-[${index}] left-0 w-10 h-2`}
        />
      ))}
      {/*<VariableBlurView style={styles.bottom} />*/}
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  top: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.2,
    position: 'absolute'
  },
  bottom: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.2,
    position: 'absolute',
    bottom: 0,
    transform: [{ rotate: '180deg' }]
  }
});
