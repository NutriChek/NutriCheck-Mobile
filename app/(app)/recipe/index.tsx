import React, { useState } from 'react';
import {
  ImageBackground,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View
} from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
  useSharedValue,
  withTiming
} from 'react-native-reanimated';
import tw from '@/lib/tailwind';
import { VariableBlurView } from '@/modules/blur-view';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';
import RecipeInfo from '@/components/recipe-info';
import { router, Stack } from 'expo-router';
import { BlurView } from 'expo-blur';
import List from '@/components/list';
import { SymbolView } from 'expo-symbols';
import { rgbaToHex } from '@/lib/util';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { KeyboardToolbar } from 'react-native-keyboard-controller';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { MeshGradient } from 'react-native-mesh-gradient';
import Caption from '@/components/caption';

export default function Recipe() {
  const { height } = useWindowDimensions();
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);

  const LANDING_HEIGHT = height * 0.6;

  const landingAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-LANDING_HEIGHT, 0, LANDING_HEIGHT],
            [-LANDING_HEIGHT / 2, 0, LANDING_HEIGHT * 0.75]
          )
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-LANDING_HEIGHT, 0, LANDING_HEIGHT],
            [2, 1, 1]
          )
        }
      ]
    };
  });

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollOffset.value,
        [0, LANDING_HEIGHT * 0.5],
        [0, 1]
      )
    };
  });

  return (
    <>
      <StatusBar barStyle='dark-content' />
      <Stack.Screen
        options={{
          header: () => (
            <View>
              <Animated.View
                style={[
                  headerAnimatedStyle,
                  {
                    position: 'relative'
                  }
                ]}
              >
                <BlurView
                  intensity={80}
                  tint='systemThickMaterialLight'
                  style={tw`w-full`}
                >
                  <SafeAreaView
                    style={tw`android:mt-10 mb-4 w-full flex-row justify-center`}
                  >
                    <Text
                      style={tw`mb-[-4] mt-1 text-base font-semibold text-black`}
                    >
                      Sarmale de post
                    </Text>
                  </SafeAreaView>
                </BlurView>
              </Animated.View>
              <TouchableOpacity
                onPress={() => {
                  router.back();
                }}
                style={tw`absolute bottom-2 left-3 rounded-full bg-white p-1.5`}
              >
                <Ionicons name='chevron-back' size={20} color='black' />
              </TouchableOpacity>
            </View>
          )
        }}
      />
      <AnimatedKeyboardAwareScrollView
        ref={scrollRef}
        scrollEventThrottle={16}
        style={tw`bg-white`}
        contentContainerStyle={tw`pb-20`}
      >
        <Animated.View
          style={[
            landingAnimatedStyle,
            {
              position: 'relative'
            }
          ]}
        >
          <Image
            source={require('@/assets/images/chiftele.png')}
            style={{
              width: '100%',
              height: height * 0.6
            }}
          />
        </Animated.View>
        <HeaderForeground />
        <View style={tw`gap-4 bg-white pt-3`}>
          <View style={tw`gap-4 px-4`}>
            <RecipeInfo
              items={[
                {
                  title: 'Difficulty',
                  text: 'Easy',
                  textStyle: tw`text-green-400`,
                  titleStyle: tw`text-black/60`,
                  style: tw`border-black/15`
                },
                {
                  title: 'Cook time',
                  text: '30 min',
                  titleStyle: tw`text-black/60`,
                  style: tw`border-black/15`,
                  textStyle: tw`text-black/90`
                },
                {
                  title: 'Ingredients',
                  text: '4',
                  titleStyle: tw`text-black/60`,
                  style: tw`border-black/15`,
                  textStyle: tw`text-black/90`
                },
                {
                  title: 'Calories',
                  text: '200 kcal',
                  style: tw`border-r-0`,
                  titleStyle: tw`text-black/60`,
                  textStyle: tw`text-black/90`
                }
              ]}
            />

            <CookAI />
          </View>

          <Pressable style={tw`flex-row items-center justify-between px-4`}>
            <Caption text='Top posts' style={tw`py-0`} />
            <Ionicons
              name='chevron-forward'
              size={20}
              color={tw.color('black/60')}
            />
          </Pressable>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={tw`px-4 gap-4`}
          >
            <PostCard />
            <PostCard />
            <PostCard />
            <View style={tw`gap-3`}>
              <Pressable
                style={tw`grow items-center justify-center rounded-2xl bg-black/5 px-4 py-2`}
              >
                <Ionicons
                  name='arrow-forward-circle-outline'
                  size={24}
                  color={tw.color('black/60')}
                />
                <Text style={tw`text-base font-semibold text-black/60`}>
                  Show more
                </Text>
              </Pressable>
              <Pressable
                style={tw`grow items-center justify-center rounded-2xl bg-black/5 px-4 py-2`}
              >
                <Ionicons
                  name='add-circle-outline'
                  size={24}
                  color={tw.color('black/60')}
                />
                <Text style={tw`text-base font-semibold text-black/60`}>
                  Create a post
                </Text>
              </Pressable>
            </View>
          </ScrollView>

          <Pressable style={tw`flex-row items-center justify-between px-4`}>
            <Caption text='Ingredients' style={tw`py-0`} />
            <Pressable
              style={tw`flex-row gap-1 rounded-full bg-black/5 px-4 py-2`}
            >
              <Ionicons
                name='add-outline'
                size={20}
                color={tw.color('black/80')}
              />
              <Text style={tw`text-sm font-semibold text-black/80`}>
                Add all
              </Text>
            </Pressable>
          </Pressable>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={tw`px-4 gap-4`}
          >
            <IngredientCard />
            <IngredientCard />
            <IngredientCard />
            <IngredientCard />
            <IngredientCard />
            <IngredientCard />
          </ScrollView>

          <View style={tw`flex-row gap-2 px-4`}>
            <View style={tw`flex-row rounded-full bg-black/5 px-3`}>
              <TouchableOpacity style={tw`items-center justify-center p-2`}>
                <Ionicons
                  name='remove'
                  size={24}
                  color={tw.color('black/80')}
                />
              </TouchableOpacity>
              <View
                style={tw`h-1/3 flex-row items-center gap-1 self-center border-l border-r border-black/10 px-2`}
              >
                <Ionicons
                  name='people'
                  size={24}
                  color={tw.color('black/80')}
                />
                <Text style={tw`text-sm font-semibold text-black/80`}>2</Text>
              </View>
              <TouchableOpacity style={tw`items-center justify-center p-2`}>
                <Ionicons name='add' size={24} color={tw.color('black/80')} />
              </TouchableOpacity>
            </View>
            <Pressable
              style={tw`grow flex-row items-center justify-center rounded-full bg-green-100 py-4`}
            >
              <Ionicons name='play' size={24} color={tw.color('green-600')} />
              <Text style={tw`text-sm font-semibold text-green-600`}>
                Start
              </Text>
            </Pressable>
          </View>

          <Caption text='Steps' style={tw`px-4 py-0`} />
          <View style={tw`gap-4 px-4`}>
            {[1, 2, 3, 4, 5].map((index) => (
              <StepCard key={index} index={index} />
            ))}
          </View>
        </View>
      </AnimatedKeyboardAwareScrollView>
      <KeyboardToolbar />
    </>
  );
}

function HeaderForeground() {
  const [numberOfLines, setNumberOfLines] = useState(2);
  const [tapping, setTapping] = useState(false);

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
    <View style={tw`relative`}>
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
          <View style={tw`flex-row items-end justify-between`}>
            <View style={tw`gap-1`}>
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
              <Text style={tw`font-brand text-2xl leading-tight text-white`}>
                Sarmale de post
              </Text>
            </View>
            <View
              style={tw`flex-row items-center gap-1 rounded-full bg-white/70 px-3 py-2`}
            >
              <Ionicons name='heart' size={28} color={tw.color('black/60')} />
              <Text style={tw`text-sm font-semibold text-black/70`}>120</Text>
            </View>
          </View>

          <GestureDetector gesture={textTapGesture}>
            <Animated.View style={animatedTextStyle}>
              <Text
                style={tw`text-white/85 text-sm font-semibold leading-[1.1]`}
                numberOfLines={numberOfLines}
              >
                Lorem ipsum dolor sit amet consecter cursus. Vulputate dolor sit
                amet consecter cursus. Vulputate dolor sit amet consecter
              </Text>
            </Animated.View>
          </GestureDetector>
        </View>
      </LinearGradient>
    </View>
  );
}

const AnimatedKeyboardAwareScrollView = Animated.createAnimatedComponent(
  KeyboardAwareScrollView
);

function CookAI() {
  const [isOpen, setIsOpen] = useState(false);
  const height = useSharedValue(0);

  const animatedAccordionStyle = useAnimatedStyle(() => ({
    height: withTiming(height.value * Number(isOpen), { duration: 200 })
  }));

  const animatedChevronStyle = useAnimatedStyle(() => ({
    transform: [
      {
        rotate: withTiming(Number(isOpen) * 90 + 'deg', { duration: 200 })
      }
    ]
  }));

  const animatedIndicationTextStyle = useAnimatedStyle(() => ({
    opacity: withTiming(Number(!isOpen), { duration: 200 })
  }));

  return (
    <Pressable
      onPress={() => {
        setIsOpen((prev) => !prev);
      }}
    >
      <ImageBackground
        source={require('@/assets/images/color-blur.png')}
        style={tw`relative overflow-hidden rounded-3xl px-4 py-3`}
        resizeMode='stretch'
        tintColor={
          Platform.OS === 'ios' && +Platform.Version >= 18.0
            ? tw.color('transparent')
            : undefined
        }
      >
        {Platform.OS === 'ios' && +Platform.Version >= 18.0 && (
          <MeshGradient
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: -10
            }}
            points={[
              [0.0, 0.0],
              [1.0, 0.0],
              [0.0, 1.0],
              [1.0, 1.0]
            ]}
            colors={['#d9a8f3', '#bdd5f8', '#f3bcb9', '#e6c5f6']}
            animatedColors={['#d9a8f3', '#f3bcb9', '#bdd5f8', '#e6c5f6']}
            animationDuration={2}
          />
        )}

        <View style={tw`flex-row justify-between`}>
          <View style={tw`flex-row items-center`}>
            <Image
              source={require('@/assets/images/logo-mono.png')}
              style={tw`h-6 w-6`}
              tintColor={tw.color('black/55')}
            />
            <Text style={tw`pl-2 text-base font-bold text-black/60`}>
              Cook AI
            </Text>
          </View>
          <View style={tw`flex-row items-center`}>
            <Animated.Text
              style={[
                animatedIndicationTextStyle,
                { ...tw`pl-2 text-sm font-bold text-black/60` }
              ]}
            >
              Get suggestions
            </Animated.Text>
            <Animated.View style={animatedChevronStyle}>
              <Ionicons
                name='chevron-forward'
                size={24}
                color={tw.color('black/60')}
              />
            </Animated.View>
          </View>
        </View>

        <Animated.View style={[animatedAccordionStyle, { overflow: 'hidden' }]}>
          <View
            style={tw`absolute w-full gap-2`}
            onLayout={(e) => {
              height.value = e.nativeEvent.layout.height;
            }}
          >
            <List childrenStyle={tw`bg-white/70`} style={tw`mt-3`}>
              <List.Item
                contentContainerStyle={tw`py-2.5`}
                iconComponent={
                  <SymbolView
                    name={'pencil.and.outline'}
                    size={22}
                    weight='bold'
                    resizeMode='scaleAspectFit'
                    tintColor={rgbaToHex(tw.color('black/60') as string)}
                    fallback={
                      <MaterialIcons
                        name={'edit'}
                        size={22}
                        color={rgbaToHex(tw.color('black/70') as string)}
                      />
                    }
                  />
                }
                text={'Recommended adjustments'}
                textStyle={tw`text-base`}
                rightComponent={
                  <Ionicons
                    name='chevron-forward'
                    size={20}
                    color={tw.color('black/60')}
                  />
                }
              />
              <List.Item
                contentContainerStyle={tw`py-2.5`}
                iconComponent={
                  <SymbolView
                    name={'sparkles.rectangle.stack.fill'}
                    size={22}
                    weight='bold'
                    resizeMode='scaleAspectFit'
                    tintColor={rgbaToHex(tw.color('black/60') as string)}
                    fallback={
                      <MaterialIcons
                        name={'edit'}
                        size={22}
                        color={rgbaToHex(tw.color('black/70') as string)}
                      />
                    }
                  />
                }
                text={'Suggested alternatives'}
                textStyle={tw`text-base`}
                rightComponent={
                  <Ionicons
                    name='chevron-forward'
                    size={20}
                    color={tw.color('black/60')}
                  />
                }
              />
            </List>
            <Text style={tw`self-center text-sm font-semibold text-black/60`}>
              or ask for anything
            </Text>
            <View
              style={tw`h-11 flex-row items-center rounded-full bg-white/70 px-4`}
            >
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
              <Ionicons name='send' size={24} color={tw.color('black/50')} />
            </View>
          </View>
        </Animated.View>
      </ImageBackground>
    </Pressable>
  );
}

function PostCard() {
  const { width } = useWindowDimensions();

  return (
    <View
      style={tw.style(`flex-col gap-2.5 rounded-2xl bg-black/5 p-4`, {
        width: width * 0.7
      })}
    >
      <View style={tw`flex-row justify-between`}>
        <View style={tw`flex-row items-center gap-1.5`}>
          <Image
            source={require('@/assets/images/profile.jpeg')}
            style={tw`h-6 w-6 rounded-full`}
          />
          <Text style={tw`text-[15px] font-semibold text-black/80`}>
            Jamila Cuisine
          </Text>
        </View>
        <Text style={tw`text-sm font-semibold text-black/70`}>28 aug</Text>
      </View>
      <Text
        style={tw`text-base font-medium leading-tight text-black/80`}
        numberOfLines={4}
      >
        Lorem ipsum dolor sit amet consecter cursus. Vulputate dolor sit amet
        consecter cursus. Vulputate dolor sit amet consecter
      </Text>
      <View style={tw`flex-row items-center gap-4`}>
        <View style={tw`flex-row gap-1`}>
          <Ionicons
            name='heart-outline'
            size={20}
            color={tw.color('black/70')}
          />
          <Text style={tw`text-sm font-semibold text-black/60`}>120</Text>
        </View>
        <View style={tw`flex-row gap-1`}>
          <Ionicons
            name='chatbubble-outline'
            size={20}
            color={tw.color('black/70')}
          />
          <Text style={tw`text-sm font-semibold text-black/60`}>120</Text>
        </View>
      </View>
    </View>
  );
}

function IngredientCard() {
  return (
    <View style={tw`w-24 flex-1 flex-col justify-center gap-1 rounded-2xl`}>
      <Image
        source={require('@/assets/images/ciorba.png')}
        style={tw`relative h-24 w-24 rounded-xl`}
      />
      <Pressable
        style={tw`p-0.75 absolute right-1.5 top-1.5 rounded-full bg-white`}
      >
        <Ionicons name='add-outline' size={18} color={tw.color('black/80')} />
      </Pressable>
      <View>
        <Text style={tw`text-sm font-semibold leading-tight text-black`}>
          Cucumbers
        </Text>
        <Text style={tw`text-sm font-semibold leading-tight text-black/70`}>
          0.5kg
        </Text>
      </View>
    </View>
  );
}

function StepCard({ index }: { index: number }) {
  return (
    <View style={tw`flex-row items-start gap-4 rounded-2xl bg-[#FFF7ED] p-4`}>
      <View
        style={tw`aspect-square items-center justify-center rounded-full bg-white px-4`}
      >
        <Text style={tw`text-base font-bold text-black/80`}>{index}</Text>
      </View>
      <View style={tw`flex-1 gap-2`}>
        <Text style={tw`text-base font-medium leading-tight text-black`}>
          Lorem ipsum dolor sit amet consecter cursus. Vulputate dolor sit amet
          consecter cursus.
        </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={tw`gap-2`}
        >
          {[1, 2, 3, 4].map((index) => (
            <View key={index} style={tw`rounded-full bg-white px-4 py-2.5`}>
              <Text style={tw`text-sm font-semibold text-black/70`}>
                1kg of potatoes
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
