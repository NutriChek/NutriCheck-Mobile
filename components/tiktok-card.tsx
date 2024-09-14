import { Image, ImageSource } from 'expo-image';
import {
  ImageBackground,
  Platform,
  Text,
  useWindowDimensions,
  View
} from 'react-native';
import React, { useState } from 'react';
import { router } from 'expo-router';
import tw from '@/lib/tailwind';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';
import { VariableBlurView } from '@/modules/blur-view';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { ClassInput } from 'twrnc';
import Animated, {
  useAnimatedStyle,
  withTiming
} from 'react-native-reanimated';
import RecipeSummaryItem from '@/components/recipe-info-item';
import RecipeInfo from '@/components/recipe-info';

export default function TikTokCard({
  index,
  imageSource
}: {
  index: number;
  imageSource?: ImageSource;
}) {
  const { height } = useWindowDimensions();

  const [numberOfLines, setNumberOfLines] = useState(2);
  const [tapping, setTapping] = useState(false);
  const rootTapGesture = Gesture.Tap()
    .runOnJS(true)
    .onEnd(() => {
      router.push('/recipe');
    });

  const textTapGesture = Gesture.Tap()
    .runOnJS(true)
    .onBegin(() => {
      setTapping(true);
    })
    .onEnd(() => {
      setNumberOfLines((prev) => (prev === 2 ? 10 : 2));
    })
    .onFinalize(() => {
      setTapping(false);
    });
  const animatedTextStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(tapping ? 0.7 : 1, { duration: 80 })
    };
  });

  return (
    <GestureDetector gesture={rootTapGesture}>
      <View
        key={index}
        style={{
          ...tw`w-full rounded-2xl bg-white`,
          height: height - 360
        }}
      >
        <View style={tw.style(`overflow-hidden rounded-2xl`)}>
          <ImageBackground
            source={imageSource}
            style={{
              width: '100%',
              height: '100%'
            }}
          >
            <View style={tw`relative h-full items-end`}>
              {Platform.OS === 'ios' && (
                <VariableBlurView
                  style={{
                    ...tw`h-54 absolute bottom-0 left-0 right-0 w-full`,
                    transform: [{ rotate: '180deg' }]
                  }}
                  maxBlurRadius={5}
                />
              )}
              <LinearGradient
                colors={['transparent', '#000000cc']}
                style={tw`absolute bottom-0 w-full px-4 pb-5 pt-16`}
              >
                <View style={tw`gap-1`}>
                  <View style={tw`flex-row justify-between`}>
                    <View style={tw`flex-row items-center gap-2`}>
                      <Image
                        source={require('@/assets/images/profile.jpeg')}
                        style={tw`h-8 w-8 rounded-full`}
                      />
                      <View>
                        <Text
                          style={tw`text-base font-semibold leading-[1.1] text-white/95`}
                        >
                          Jamila Cuisine
                        </Text>
                        <Text
                          style={tw`text-white/85 text-sm font-semibold leading-[1.1]`}
                        >
                          Romanian dishes pack
                        </Text>
                      </View>
                    </View>
                    <View style={tw`items-center`}>
                      <Ionicons
                        name='heart'
                        size={24}
                        color={tw.color('white/70')}
                      />
                      <Text style={tw`text-white/85 text-xs font-semibold`}>
                        120
                      </Text>
                    </View>
                  </View>
                  <Text style={tw`text-base font-bold text-white`}>
                    Sarmale de post
                  </Text>

                  <GestureDetector gesture={textTapGesture}>
                    <Animated.View style={animatedTextStyle}>
                      <Text
                        style={tw`text-white/85 text-sm font-semibold leading-[1.1]`}
                        numberOfLines={numberOfLines}
                      >
                        Lorem ipsum dolor sit amet consecter cursus. Vulputate
                        dolor sit amet consecter cursus. Vulputate dolor sit
                        amet consecter
                      </Text>
                    </Animated.View>
                  </GestureDetector>
                  <RecipeInfo
                    style={tw`pt-2`}
                    items={[
                      {
                        title: 'Difficulty',
                        text: 'Easy',
                        textStyle: tw`text-green-400`
                      },
                      { title: 'Cook time', text: '30 min' },
                      { title: 'Ingredients', text: '4' },
                      {
                        title: 'Calories',
                        text: '200 kcal',
                        style: tw`border-r-0`
                      }
                    ]}
                  />
                </View>
              </LinearGradient>
            </View>
          </ImageBackground>
        </View>
      </View>
    </GestureDetector>
  );
}

