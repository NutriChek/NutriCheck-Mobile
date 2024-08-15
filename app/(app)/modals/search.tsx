import ModalWrapper from '@/components/modal-wrapper';
import { Pressable, Text, TextInput, View } from 'react-native';
import ModalHeader from '@/components/modal-header';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import Animated, {
  useAnimatedKeyboard,
  useAnimatedStyle,
  withDelay,
  withSequence,
  withSpring,
  withTiming
} from 'react-native-reanimated';
import tw from '@/lib/tailwind';
import { BlurView } from 'expo-blur';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SymbolView } from 'expo-symbols';
import { androidRipple, rgbaToHex } from '@/lib/util';
import { SFSymbols5_0 } from 'sf-symbols-typescript';
import { MaterialIcons } from 'expo-vector-icons';

function SuggestionCard({
  text,
  state,
  transformSize,
  transformDelay,
  opacityDelay,
  symbolName,
  materialIconName,
  onPress
}: {
  text: string;
  state: boolean;
  transformSize: number;
  transformDelay: number;
  opacityDelay: number;
  symbolName: SFSymbols5_0;
  materialIconName: string;
  onPress: () => void;
}) {
  const style = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withDelay(
            transformDelay,
            withSpring(+state * transformSize, {
              damping: 13.5
            })
          )
        }
      ],
      opacity: withDelay(opacityDelay, withTiming(+state))
    };
  });

  return (
    <Animated.View
      style={[
        style,
        {
          height: 50,
          position: 'absolute',
          left: 16,
          bottom: 0,
          shadowOffset: { width: 0, height: 0 },
          shadowColor: 'black',
          shadowOpacity: 0.15,
          shadowRadius: 10
        }
      ]}
    >
      <View style={tw`overflow-hidden rounded-2xl`}>
        <Pressable
          android_ripple={androidRipple}
          onPress={onPress}
          style={({ pressed }) => tw.style(pressed && 'ios:bg-white/20')}
        >
          <BlurView
            intensity={50}
            style={tw`bg-white/45 h-full flex-row items-center justify-center gap-1.5 p-4`}
          >
            <SymbolView
              name={symbolName}
              size={20}
              tintColor={rgbaToHex(tw.color('black/70') as string)}
              fallback={
                <MaterialIcons
                  name={materialIconName as any}
                  size={20}
                  color={rgbaToHex(tw.color('black/70') as string)}
                />
              }
            />
            <Text
              style={{
                ...tw`text-[16px] font-medium text-black/80`,
                includeFontPadding: false
              }}
            >
              {text}
            </Text>
          </BlurView>
        </Pressable>
      </View>
    </Animated.View>
  );
}

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
        <SuggestionCard
          text='Sarmale de post'
          symbolName='magnifyingglass'
          materialIconName='search'
          onPress={() => {}}
          state={suggestionsShown}
          transformSize={-250}
          transformDelay={250}
          opacityDelay={250}
        />
        <SuggestionCard
          text='Tochitura cu mamaliga'
          symbolName='magnifyingglass'
          materialIconName='search'
          onPress={() => {}}
          state={suggestionsShown}
          transformSize={-190}
          transformDelay={200}
          opacityDelay={200}
        />
        <SuggestionCard
          text='Reteta de cartofi prajiti sanatosi'
          symbolName='magnifyingglass'
          materialIconName='search'
          onPress={() => {}}
          state={suggestionsShown}
          transformSize={-130}
          transformDelay={150}
          opacityDelay={150}
        />
        <SuggestionCard
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
            tw`w-full flex-row items-center gap-2 rounded-2xl bg-white/70 px-4`,
            {
              shadowOffset: { width: 0, height: 0 },
              shadowColor: 'black',
              shadowOpacity: 0.3,
              shadowRadius: 16
            }
          ]}
        >
          <Ionicons name='search' size={20} color={tw.color('black/60')} />
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
        </Animated.View>
      </Animated.View>
    </ModalWrapper>
  );
}
