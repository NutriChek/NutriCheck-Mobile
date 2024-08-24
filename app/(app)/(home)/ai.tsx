import tw from '@/lib/tailwind';
import {
  ImageBackground, Platform,
  Pressable,
  Text,
  TextInput,
  useWindowDimensions,
  View
} from 'react-native';
import { BlurView } from 'expo-blur';
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
import React, { useState } from 'react';
import HomeWrapper from '@/components/home-wrapper';
import { Image } from 'expo-image';
import { useFocusEffect } from 'expo-router';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SuggestionChip } from '@/components/suggestion-chip';
import { androidRipple } from '@/lib/util';
import { Style } from 'twrnc';

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
        withTiming('rgb(236,233,255)', { duration: 1500 }),
        withTiming('rgb(255,230,230)', { duration: 1500 }),
        withTiming('rgb(255,247,232)', { duration: 1500 }),
        withTiming('rgb(202,217,255)', { duration: 1500 })
      ),
      -1,
      true
    );

    color.value = withRepeat(
      withSequence(
        withTiming('rgb(161,153,224)', { duration: 1500 }),
        withTiming('rgb(225,162,162)', { duration: 1500 }),
        withTiming('rgb(220,197,159)', { duration: 1500 }),
        withTiming('rgb(176,185,231)', { duration: 1500 })
      ),
      -1,
      true
    );

    transparentColor.value = withRepeat(
      withSequence(
        withTiming('rgba(199,194,227,0.7)', { duration: 1500 }),
        withTiming('rgba(224,195,195,0.7)', { duration: 1500 }),
        withTiming('rgba(224,212,195,0.7)', { duration: 1500 }),
        withTiming('rgba(188,196,224,0.7)', { duration: 1500 })
      ),
      -1,
      true
    );

    darkColor.value = withRepeat(
      withSequence(
        withTiming('rgb(70,62,119)', { duration: 1500 }),
        withTiming('rgb(126,66,66)', { duration: 1500 }),
        withTiming('rgb(121,101,67)', { duration: 1500 }),
        withTiming('rgb(68,78,129)', { duration: 1500 })
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
      // width: withTiming(+suggestionsShown * 500 + 20, { duration: 700 }),
      // height: withTiming(+suggestionsShown * 500 + 20, { duration: 700 }),
      transform: [
        {
          translateY: withTiming(+suggestionsShown * height, { duration: 800 })
        }
      ],
      opacity: withSequence(
        withTiming(suggestionsShown ? 1 : 0, { duration: 400 }),
        withTiming(0, { duration: 400 })
      )
      // backgroundColor: color.value
    };
  });
  const animatedCircleStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(+suggestionsShown * 500 + 20, { duration: 700 }),
      height: withTiming(+suggestionsShown * 500 + 20, { duration: 700 }),
      transform: [
        { translateY: withTiming(+suggestionsShown * -250, { duration: 700 }) }
      ],
      opacity: withSequence(
        withTiming(suggestionsShown ? 0.4 : 0, { duration: 400 }),
        withTiming(0, { duration: 300 })
      )
      // opacity: withTiming(suggestionsShown ? 0 : 0.5, { duration: 1000 }),
      // backgroundColor: color.value
    };
  });

  const animatedOpacityStyle = useAnimatedStyle(() => {
    return {
      opacity: withDelay(150, withTiming(+suggestionsShown))
    };
  });

  return (
    <HomeWrapper style={tw`ios:bg-black/70`} imageStyle={tw`android:opacity-70`}>
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
            <View style={{ ...tw`flex-row flex-wrap` }}>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, index) => (
                <AISuggestion
                  key={index}
                  index={index}
                  animatedTransparentColorStyle={animatedTransparentColorStyle}
                  shown={suggestionsShown}
                />
              ))}
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
        withTiming('rgb(124,114,204)', { duration: 1500 }),
        withTiming('rgb(217,116,116)', { duration: 1500 }),
        withTiming('rgb(217,179,115)', { duration: 1500 }),
        withTiming('rgb(111,177,218)', { duration: 1500 })
      ),
      -1,
      true
    );

    transparentColor.value = withRepeat(
      withSequence(
        withTiming('rgba(199,194,227,0.7)', { duration: 1500 }),
        withTiming('rgba(224,195,195,0.7)', { duration: 1500 }),
        withTiming('rgba(224,212,195,0.7)', { duration: 1500 }),
        withTiming('rgba(188,209,224,0.7)', { duration: 1500 })
      ),
      -1,
      true
    );

    darkColor.value = withRepeat(
      withSequence(
        withTiming('rgb(70,62,119)', { duration: 1500 }),
        withTiming('rgb(126,66,66)', { duration: 1500 }),
        withTiming('rgb(121,101,67)', { duration: 1500 }),
        withTiming('rgb(68,104,129)', { duration: 1500 })
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
          animatedSearchStyle,
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

function AISuggestion({
  index,
  animatedTransparentColorStyle,
  shown
}: {
  index: number;
  animatedTransparentColorStyle: Style;
  shown: boolean;
}) {
  const animatedOpacityStyle = useAnimatedStyle(() => {
    return {
      opacity: withDelay(
        +((index + 1) / 2).toFixed(0) * 50 + 150,
        withTiming(+shown)
      )
    };
  });

  return (
    <Animated.View
      style={[
        animatedOpacityStyle,
        {
          // width: '47%'
          width: '48.5%',
          marginRight: index % 2 == 0 ? '3%' : 0,
          marginBottom: '3%'
          // flexBasis: '47%',
          // flexShrink: 1
          // width: '50%'
          // height: 50,
          // position: 'absolute',
          // left: 16,
          // bottom: 0,
          // shadowOffset: { width: 0, height: 0 },
          // shadowColor: 'black',
          // shadowOpacity: 0.15,
          // shadowRadius: 10
        }
      ]}
      key={index}
    >
      <Animated.View
        style={[animatedTransparentColorStyle, tw`overflow-hidden rounded-2xl`]}
        key={index}
      >
        <Pressable
          android_ripple={androidRipple}
          // onPress={onPress}
          style={({ pressed }) =>
            tw.style(`bg-white/45 relative`, pressed && `ios:bg-white/30`)
          }
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
          {/*  colors={['#af65d5', '#5b8bcc', '#cc5f59', '#d2a95c']}*/}
          {/*  animatedColors={[*/}
          {/*    '#d2a95c',*/}
          {/*    '#cc5f59',*/}
          {/*    '#5b8bcc',*/}
          {/*    '#af65d5'*/}
          {/*  ]}*/}
          {/*  animationDuration={2}*/}
          {/*/>*/}
          <BlurView
            intensity={100}
            style={tw`z-10 flex-row items-center justify-center gap-1.5 bg-white/20 p-4`}
          >
            {/*<SymbolView*/}
            {/*  name={symbolname}*/}
            {/*  size={20}*/}
            {/*  tintColor={rgbaToHex(tw.color('black/70') as string)}*/}
            {/*  fallback={*/}
            {/*    <MaterialIcons*/}
            {/*      name={materialIconName as any}*/}
            {/*      size={20}*/}
            {/*      color={rgbaToHex(tw.color('black/70') as string)}*/}
            {/*    />*/}
            {/*  }*/}
            {/*/>*/}
            <Text
              style={{
                ...tw`text-[16px] font-medium text-black/80`,
                includeFontPadding: false
              }}
            >
              {/*{((index + 1) / 2).toFixed(0)}*/}
              Suggest a low calorie dinner for today
            </Text>
          </BlurView>
        </Pressable>
      </Animated.View>
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