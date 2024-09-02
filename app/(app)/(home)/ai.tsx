import HomeWrapper from '@/components/home-wrapper';
import { SuggestionChip } from '@/components/suggestion-chip';
import tw from '@/lib/tailwind';
import { androidRipple, rgbaToHex } from '@/lib/util';
import { BlurView } from 'expo-blur';
import { Image } from 'expo-image';
import { useFocusEffect } from 'expo-router';
import { SymbolView } from 'expo-symbols';
import { MaterialCommunityIcons } from 'expo-vector-icons';
import React, { useState } from 'react';
import {
  ImageBackground,
  Platform,
  Pressable,
  Text,
  TextInput,
  useWindowDimensions,
  View
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Animated, {
  SharedValue,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming
} from 'react-native-reanimated';
import { SFSymbols5_0 } from 'sf-symbols-typescript';
import { ClassInput, Style } from 'twrnc';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function AI() {
  const [suggestionsShown, setSuggestionsShown] = useState(false);
  const textColor = useSharedValue('rgb(255,255,255)');
  const color = useSharedValue('rgb(255,255,255)');
  const transparentColor = useSharedValue('rgba(255,255,255,0.7)');
  const darkColor = useSharedValue('rgb(255,255,255)');
  const [searchScale, setSearchScale] = useState(0.8);
  const { height } = useWindowDimensions();

  useFocusEffect(() => {
    setSuggestionsShown(true);
    setSearchScale(1.05);

    textColor.value = withRepeat(
      withSequence(
        withTiming('rgb(236,233,255)', { duration: 1250 }),
        withTiming('rgb(255,230,230)', { duration: 1250 }),
        withTiming('rgb(255,247,232)', { duration: 1250 }),
        withTiming('rgb(202,217,255)', { duration: 1250 })
      ),
      -1,
      true
    );

    color.value = withRepeat(
      withSequence(
        withTiming('rgb(161,153,224)', { duration: 1250 }),
        withTiming('rgb(225,162,162)', { duration: 1250 }),
        withTiming('rgb(220,197,159)', { duration: 1250 }),
        withTiming('rgb(176,185,231)', { duration: 1250 })
      ),
      -1,
      true
    );

    transparentColor.value = withRepeat(
      withSequence(
        withTiming('rgba(178,171,217,0.7)', { duration: 1250 }),
        withTiming('rgba(213,174,174,0.7)', { duration: 1250 }),
        withTiming('rgba(208,191,167,0.7)', { duration: 1250 }),
        withTiming('rgba(166,176,213,0.7)', { duration: 1250 })
      ),
      -1,
      true
    );

    darkColor.value = withRepeat(
      withSequence(
        withTiming('rgb(70,62,119)', { duration: 1250 }),
        withTiming('rgb(126,66,66)', { duration: 1250 }),
        withTiming('rgb(121,101,67)', { duration: 1250 }),
        withTiming('rgb(68,78,129)', { duration: 1250 })
      ),
      -1,
      true
    );

    return () => {
      setSuggestionsShown(false);
      setSearchScale(0.8);
      textColor.value = 'rgb(255,255,255)';
      color.value = 'rgb(255,255,255)';
      transparentColor.value = 'rgba(255,255,255,0.7)';
      darkColor.value = 'rgb(255,255,255)';
    };
  });

  const animatedColorStyle = useAnimatedStyle(() => {
    return {
      color: textColor.value
    };
  });
  const animatedTransparentColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: transparentColor.value
    };
  });

  const animatedSemiCircleStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withTiming(+suggestionsShown * height, { duration: 800 })
        }
      ],
      opacity: withSequence(
        withTiming(suggestionsShown ? 0.6 : 0, { duration: 600 }),
        withTiming(0, { duration: 200 })
      )
    };
  });

  const animatedOpacityStyle = useAnimatedStyle(() => {
    return {
      opacity: withDelay(150, withTiming(+suggestionsShown))
    };
  });

  return (
    <HomeWrapper
      style={tw`ios:bg-black/70`}
      imageStyle={tw`android:opacity-70`}
    >
      <Wrapper>
        <KeyboardAwareScrollView
          style={tw`px-4`}
          contentContainerStyle={tw`pb-30 pt-32`}
        >
          <Animated.Text
            style={[
              animatedColorStyle,
              tw`pb-4 pt-0 text-center font-brand text-xl text-white`
            ]}
          >
            Ask Cook AI for anything
          </Animated.Text>
          <AISearchBar
            suggestionsShown={suggestionsShown}
            color={color}
            transparentColor={transparentColor}
            darkColor={darkColor}
            searchScale={searchScale}
          />
          <View style={tw`mt-64`}>
            <Animated.Text
              style={[
                animatedColorStyle,
                animatedOpacityStyle,
                tw`py-4 text-xl font-bold text-white`
              ]}
            >
              Suggestions
            </Animated.Text>
            <View style={tw`gap-2.5`}>
              <View style={tw`flex-row gap-2.5`}>
                <AISuggestion
                  animationIndex={0}
                  animatedTransparentColorStyle={animatedTransparentColorStyle}
                  shown={suggestionsShown}
                  text={'Scan to create a recipe'}
                  symbolName={'text.viewfinder'}
                  materialIconName={'camera'}
                />
                <AISuggestion
                  animationIndex={0}
                  animatedTransparentColorStyle={animatedTransparentColorStyle}
                  shown={suggestionsShown}
                  text={'Scan to create a recipe'}
                  symbolName={'text.viewfinder'}
                  materialIconName={'camera'}
                />
              </View>
              <AIInlineSuggestion
                animationIndex={1}
                animatedTransparentColorStyle={animatedTransparentColorStyle}
                shown={suggestionsShown}
                text={'Scan to create a recipe'}
                symbolName={'note.text.badge.plus'}
                materialIconName={'camera'}
              />
              <AIInlineSuggestion
                animationIndex={2}
                animatedTransparentColorStyle={animatedTransparentColorStyle}
                shown={suggestionsShown}
                text={'Adapt recipe to your preferences'}
                symbolName={'pencil.and.outline'}
                materialIconName={'camera'}
              />
              <AIInlineSuggestion
                animationIndex={3}
                animatedTransparentColorStyle={animatedTransparentColorStyle}
                shown={suggestionsShown}
                text={'Modify a recipe'}
                symbolName={'pencil.and.scribble'}
                materialIconName={'camera'}
              />
            </View>
          </View>
        </KeyboardAwareScrollView>
      </Wrapper>

      <Animated.View
        style={[
          animatedSemiCircleStyle,
          {
            ...tw`h-160 w-120 absolute top-[-80] self-center overflow-hidden`,
            zIndex: -1
          }
        ]}
      >
        <ImageBackground
          source={require('@/assets/images/Line 4.png')}
          style={tw`z-1 h-full w-full`}
          imageStyle={tw`rounded-full`}
        />
      </Animated.View>
      {/*<Animated.View*/}
      {/*  style={[*/}
      {/*    animatedCircleStyle,*/}
      {/*    {*/}
      {/*      ...tw`top-70 absolute h-20 w-20 self-center overflow-hidden rounded-full`,*/}
      {/*      zIndex: -1*/}
      {/*    }*/}
      {/*  ]}*/}
      {/*>*/}
      {/*  <ImageBackground*/}
      {/*    source={require('@/assets/images/Line 4.png')}*/}
      {/*    style={tw`z-1 h-full w-full`}*/}
      {/*    tintColor={'white'}*/}
      {/*  />*/}
      {/*</Animated.View>*/}
    </HomeWrapper>
  );
}

const AnimatedImage = Animated.createAnimatedComponent(Image);

function AISearchBar({
  suggestionsShown,
  color,
  transparentColor,
  darkColor,
  searchScale
}: {
  suggestionsShown: boolean;
  color: SharedValue<string>;
  transparentColor: SharedValue<string>;
  darkColor: SharedValue<string>;
  searchScale: number;
}) {
  useFocusEffect(() => {
    color.value = withRepeat(
      withSequence(
        withTiming('rgb(124,114,204)', { duration: 1250 }),
        withTiming('rgb(217,116,116)', { duration: 1250 }),
        withTiming('rgb(217,179,115)', { duration: 1250 }),
        withTiming('rgb(111,177,218)', { duration: 1250 })
      ),
      -1,
      true
    );

    transparentColor.value = withRepeat(
      withSequence(
        withTiming('rgba(199,194,227,0.7)', { duration: 1250 }),
        withTiming('rgba(224,195,195,0.7)', { duration: 1250 }),
        withTiming('rgba(224,212,195,0.7)', { duration: 1250 }),
        withTiming('rgba(188,209,224,0.7)', { duration: 1250 })
      ),
      -1,
      true
    );

    darkColor.value = withRepeat(
      withSequence(
        withTiming('rgb(70,62,119)', { duration: 1250 }),
        withTiming('rgb(126,66,66)', { duration: 1250 }),
        withTiming('rgb(121,101,67)', { duration: 1250 }),
        withTiming('rgb(68,104,129)', { duration: 1250 })
      ),
      -1,
      true
    );
  });

  const animatedTransparentColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: transparentColor.value
    };
  });
  const animatedColorStyle = useAnimatedStyle(() => {
    return {
      borderColor: color.value,
      shadowColor: color.value
    };
  });
  const animatedColorProps = useAnimatedProps(() => {
    return {
      tintColor: darkColor.value
    };
  });

  const animatedSearchStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: withSequence(withTiming(searchScale), withTiming(1))
      }
    ]
  }));

  return (
    <View style={tw`relative`}>
      <Animated.View
        style={[
          animatedColorStyle,
          Platform.OS === 'ios' && animatedSearchStyle,
          {
            ...tw`h-14 w-full rounded-full bg-transparent`,
            borderStyle: 'solid',
            borderWidth: 7,
            zIndex: -10,
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 1,
            shadowRadius: 12
          }
        ]}
      >
        <Animated.View
          style={[
            animatedTransparentColorStyle,
            {
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              margin: -8,
              borderRadius: 100,
              overflow: 'hidden'
            }
          ]}
        >
          {/*<MeshGradient*/}
          {/*  style={{*/}
          {/*    flex: 1,*/}
          {/*    height: '100%',*/}
          {/*    width: '100%',*/}
          {/*    // position: 'absolute',*/}
          {/*    // top: 0,*/}
          {/*    // left: 0,*/}
          {/*    // right: 0,*/}
          {/*    // bottom: 0,*/}
          {/*    zIndex: -10*/}
          {/*  }}*/}
          {/*  points={[*/}
          {/*    [0.0, 0.0],*/}
          {/*    [1.0, 0.0],*/}
          {/*    [0.0, 1.0],*/}
          {/*    [1.0, 1.0]*/}
          {/*  ]}*/}
          {/*  colors={['#c49ed7', '#96aed0', '#dea4a1', '#c49ed7']}*/}
          {/*  animatedColors={['#c49ed7', '#dea4a1', '#96aed0', '#c49ed7']}*/}
          {/*  animationDuration={2}*/}
          {/*/>*/}
          <BlurView intensity={16} style={{ ...tw`h-100 h-full w-full` }} />
          <View
            style={tw`absolute bottom-0 left-0 right-0 top-0 flex-row items-center gap-2 px-4`}
          >
            <AnimatedImage
              source={require('@/assets/images/logo-mono.png')}
              style={tw`h-6 w-6`}
              animatedProps={animatedColorProps}
            />
            <TextInput
              style={tw`z-10 h-full flex-1 text-base leading-tight`}
              keyboardAppearance='light'
              inputAccessoryViewID='ai'
              returnKeyType='search'
              placeholder='Ask for anything...'
              placeholderTextColor={tw.color('black/50')}
              clearButtonMode='while-editing'
              onSubmitEditing={() => {}}
            />
          </View>
        </Animated.View>
      </Animated.View>
      {(
        [
          {
            text: 'Sarmale de post',
            symbolName: 'magnifyingglass',
            materialIconName: 'search',
            onPress: () => {},
            transformSize: 250,
            transformDelay: 250,
            opacityDelay: 250
          },
          {
            text: 'Tochitura cu mamaliga',
            symbolName: 'magnifyingglass',
            materialIconName: 'search',
            onPress: () => {},
            transformSize: 190,
            transformDelay: 200,
            opacityDelay: 200
          },
          {
            text: 'Reteta de cartofi prajiti sanatosi',
            symbolName: 'magnifyingglass',
            materialIconName: 'search',
            onPress: () => {},
            transformSize: 130,
            transformDelay: 150,
            opacityDelay: 150
          },
          {
            text: 'elon musk',
            symbolName: 'clock',
            materialIconName: 'access-time',
            onPress: () => {},
            transformSize: 70,
            transformDelay: 100,
            opacityDelay: 50
          }
        ] as any[]
      ).map((props, index) => {
        return (
          <SuggestionChip
            key={index}
            {...props}
            state={suggestionsShown}
            pressableContainerStyle={[
              animatedTransparentColorStyle,
              tw`rounded-full`
            ]}
            pressableStyle={`bg-white/30`}
            pressablePressedStyle={`ios:bg-transparent`}
            chipStyle={[
              { left: 0, shadowRadius: 2, shadowOpacity: 1 },
              animatedColorStyle
            ]}
          />
        );
      })}
    </View>
  );
}

function AIInlineSuggestion({
  animatedTransparentColorStyle,
  shown,
  text,
  symbolName,
  materialIconName,
  animationIndex,
  onPress,
  containerStyle,
  contentContainerStyle,
  textStyle
}: {
  text: string;
  animationIndex: number;
  animatedTransparentColorStyle: Style;
  shown: boolean;
  symbolName: SFSymbols5_0;
  materialIconName: string;
  onPress?: () => void;
  contentContainerStyle?: ClassInput;
  textStyle?: ClassInput;
  containerStyle?: ClassInput;
}) {
  const animatedOpacityStyle = useAnimatedStyle(() => {
    return {
      opacity: withDelay(
        +animationIndex.toFixed(0) * 50 + 300,
        withTiming(+shown)
      )
    };
  });

  return (
    <Animated.View
      style={[
        animatedTransparentColorStyle,
        animatedOpacityStyle,
        tw.style(`flex-1 overflow-hidden rounded-full`, containerStyle)
      ]}
    >
      <Pressable
        android_ripple={androidRipple}
        onPress={onPress}
        style={({ pressed }) => tw.style(`grow`, pressed && `ios:bg-white/30`)}
      >
        <BlurView
          intensity={100}
          style={tw.style(
            `z-10 grow flex-row items-center justify-between gap-2 px-5 py-4`,
            contentContainerStyle
          )}
        >
          <View style={tw`flex-row items-center gap-2`}>
            <SymbolView
              name={symbolName}
              size={32}
              weight='bold'
              resizeMode='scaleAspectFit'
              tintColor={rgbaToHex(tw.color('black/70') as string)}
              fallback={
                <MaterialCommunityIcons
                  name={materialIconName as any}
                  size={20}
                  color={rgbaToHex(tw.color('black/70') as string)}
                />
              }
            />
            <Text
              style={{
                ...tw.style(
                  `text-base font-medium leading-tight text-black/80`,
                  textStyle
                ),
                includeFontPadding: false
              }}
            >
              {text}
            </Text>
          </View>
          <Ionicons
            name='chevron-forward'
            color={tw.color('black/50')}
            size={24}
          />
        </BlurView>
      </Pressable>
    </Animated.View>
  );
}

function AISuggestion({
  animatedTransparentColorStyle,
  shown,
  text,
  symbolName,
  materialIconName,
  animationIndex,
  onPress,
  containerStyle,
  contentContainerStyle,
  textStyle
}: {
  text: string;
  animationIndex: number;
  animatedTransparentColorStyle: Style;
  shown: boolean;
  symbolName: SFSymbols5_0;
  materialIconName: string;
  onPress?: () => void;
  contentContainerStyle?: ClassInput;
  textStyle?: ClassInput;
  containerStyle?: ClassInput;
}) {
  const animatedOpacityStyle = useAnimatedStyle(() => {
    return {
      opacity: withDelay(
        +animationIndex.toFixed(0) * 50 + 300,
        withTiming(+shown)
      )
    };
  });

  return (
    <Animated.View
      style={[
        animatedTransparentColorStyle,
        animatedOpacityStyle,
        tw.style(`flex-1 overflow-hidden rounded-3xl`, containerStyle)
      ]}
    >
      <Pressable
        android_ripple={androidRipple}
        onPress={onPress}
        style={({ pressed }) => tw.style(`grow`, pressed && `ios:bg-white/30`)}
      >
        {/*<MeshGradient*/}
        {/*  style={{*/}
        {/*    // flex: 1,*/}
        {/*    position: 'absolute',*/}
        {/*    top: 0,*/}
        {/*    left: 0,*/}
        {/*    right: 0,*/}
        {/*    bottom: 0,*/}
        {/*    zIndex: -10*/}
        {/*  }}*/}
        {/*  points={[*/}
        {/*    [0.0, 0.0],*/}
        {/*    [1.0, 0.0],*/}
        {/*    [0.0, 1.0],*/}
        {/*    [1.0, 1.0]*/}
        {/*  ]}*/}
        {/*  colors={['#c49ed7', '#96aed0', '#dea4a1', '#c49ed7']}*/}
        {/*  animatedColors={['#c49ed7', '#dea4a1', '#96aed0', '#c49ed7']}*/}
        {/*  animationDuration={2}*/}
        {/*/>*/}
        <BlurView
          intensity={100}
          style={tw.style(
            `z-10 grow items-center justify-center gap-2 px-8 py-4`,
            contentContainerStyle
          )}
        >
          <SymbolView
            name={symbolName}
            size={32}
            weight='bold'
            resizeMode='scaleAspectFit'
            tintColor={rgbaToHex(tw.color('black/70') as string)}
            fallback={
              <MaterialCommunityIcons
                name={materialIconName as any}
                size={20}
                color={rgbaToHex(tw.color('black/70') as string)}
              />
            }
          />
          <Text
            style={{
              ...tw.style(
                `text-center text-sm font-medium leading-tight text-black/80`,
                textStyle
              ),
              includeFontPadding: false
            }}
          >
            {text}
          </Text>
        </BlurView>
      </Pressable>
    </Animated.View>
  );
}

function Wrapper({ children }: { children: React.ReactNode }) {
  if (Platform.OS === 'ios') {
    return (
      <BlurView style={tw`flex-1`} intensity={80}>
        {children}
      </BlurView>
    );
  }

  return <View>{children}</View>;
}
