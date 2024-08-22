import ModalWrapper from '@/components/modal-wrapper';
import { Pressable, TextInput, View } from 'react-native';
import ModalHeader from '@/components/modal-header';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import Animated, {
  useAnimatedKeyboard,
  useAnimatedStyle,
  withDelay,
  withSequence,
  withTiming
} from 'react-native-reanimated';
import tw from '@/lib/tailwind';
import { SymbolView } from 'expo-symbols';
import { rgbaToHex } from '@/lib/util';
import { MaterialCommunityIcons, MaterialIcons } from 'expo-vector-icons';
import { SuggestionChip } from '@/components/suggestion-chip';

export default function Search() {
  const keyboard = useAnimatedKeyboard({ isStatusBarTranslucentAndroid: true });
  const [suggestionsShown, setSuggestionsShown] = useState(false);
  const [searchScale, setSearchScale] = useState(0.9);

  useEffect(() => {
    setSuggestionsShown(true);
    setSearchScale(1.015);
  }, []);

  const animatedInputStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: -keyboard.height.value - 20 }]
  }));

  const animatedSearchStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: withDelay(
          500,
          withSequence(withTiming(searchScale), withTiming(1))
        )
      }
    ]
  }));

  return (
    <ModalWrapper>
      <ModalHeader
        text='Search'
        onPress={() => {
          router.back();
        }}
      />
      <Animated.View
        style={[
          animatedInputStyle,
          {
            flex: 1,
            alignItems: 'flex-start',
            justifyContent: 'flex-end',
            paddingHorizontal: 16,
            bottom: 0
          }
        ]}
      >
        <SuggestionChip
          text='Sarmale de post'
          symbolName='magnifyingglass'
          materialIconName='search'
          onPress={() => {}}
          state={suggestionsShown}
          transformSize={-250}
          transformDelay={250}
          opacityDelay={250}
        />
        <SuggestionChip
          text='Tochitura cu mamaliga'
          symbolName='magnifyingglass'
          materialIconName='search'
          onPress={() => {}}
          state={suggestionsShown}
          transformSize={-190}
          transformDelay={200}
          opacityDelay={200}
        />
        <SuggestionChip
          text='Reteta de cartofi prajiti sanatosi'
          symbolName='magnifyingglass'
          materialIconName='search'
          onPress={() => {}}
          state={suggestionsShown}
          transformSize={-130}
          transformDelay={150}
          opacityDelay={150}
        />
        <SuggestionChip
          text='elon musk'
          symbolName='clock'
          materialIconName='access-time'
          onPress={() => {}}
          state={suggestionsShown}
          transformSize={-70}
          transformDelay={100}
          opacityDelay={50}
        />
        <Animated.View
          style={[
            animatedSearchStyle,
            {
              flexDirection: 'row',
              gap: 8
            }
          ]}
        >
          <View
            style={[
              tw`grow flex-row items-center gap-2 rounded-2xl bg-white/70 px-4`,
              {
                shadowOffset: { width: 0, height: 0 },
                shadowColor: 'black',
                shadowOpacity: 0.3,
                shadowRadius: 16
              }
            ]}
          >
            <SymbolView
              name={'magnifyingglass'}
              size={20}
              tintColor={rgbaToHex(tw.color('black/70') as string)}
              fallback={
                <MaterialIcons
                  name={'search'}
                  size={20}
                  color={rgbaToHex(tw.color('black/70') as string)}
                />
              }
            />
            <TextInput
              autoFocus={true}
              style={tw`h-13 grow text-base leading-tight`}
              keyboardAppearance='light'
              inputAccessoryViewID='inputAccessoryView1'
              returnKeyType='search'
              placeholder='Search for anything...'
              placeholderTextColor={tw.color('black/60')}
              clearButtonMode='while-editing'
              onSubmitEditing={() => {}}
            />
          </View>
          <Pressable
            style={({ pressed }) => [
              tw`h-full flex-row items-center gap-2 rounded-2xl bg-white/90 px-4`,
              {
                shadowOffset: { width: 0, height: 0 },
                shadowColor: 'black',
                shadowOpacity: 0.3,
                shadowRadius: 16
              },
              pressed && tw`ios:bg-white/55`
            ]}
          >
            <SymbolView
              name={'barcode.viewfinder'}
              size={28}
              tintColor={rgbaToHex(tw.color('black/70') as string)}
              resizeMode='scaleAspectFit'
              fallback={
                <MaterialCommunityIcons
                  name={'barcode-scan'}
                  size={28}
                  color={rgbaToHex(tw.color('black/70') as string)}
                />
              }
            />
          </Pressable>
        </Animated.View>
      </Animated.View>
    </ModalWrapper>
  );
}
