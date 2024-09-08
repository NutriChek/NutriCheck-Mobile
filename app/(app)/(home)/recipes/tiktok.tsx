import HomeWrapper from '@/components/home-wrapper';
import tw from '@/lib/tailwind';
import { ScrollView } from 'react-native-gesture-handler';
import {
  ImageBackground,
  Platform,
  Pressable,
  Text,
  useWindowDimensions,
  View
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  withTiming
} from 'react-native-reanimated';
import { Image, ImageSource } from 'expo-image';
import React, { useState } from 'react';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';
import { VariableBlurView } from '@/modules/blur-view';
import Carousel from 'react-native-reanimated-carousel';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import IOSMeshGradient from '@/components/ios-mesh-gradient';

export default function Tiktok() {
  const { width, height } = useWindowDimensions();

  return (
    <HomeWrapper>
      {Platform.OS === 'ios' && +Platform.Version >= 18.0 && (
        <IOSMeshGradient />
      )}
      <ScrollView contentContainerStyle={tw`pb-32 pt-34`}>
        <View style={tw`mb-8 flex-row justify-between px-4`}>
          <Pressable
            onPress={() => {
              router.back();
            }}
            style={tw`aspect-square items-center justify-center rounded-full bg-white/60`}
          >
            <Ionicons name='chevron-back' size={20} color='black' />
          </Pressable>
          <SegmentedControl
            values={['Following', 'For You']}
            selectedIndex={0}
            onChange={(event) => {}}
            style={tw`h-11 w-7/12`}
            tintColor={tw.color('white')}
            backgroundColor={tw.color('white/70')}
          />
          <Pressable
            style={tw`aspect-square items-center justify-center rounded-full bg-white/60 opacity-0`}
          >
            <Ionicons name='chevron-back' size={20} color='black' />
          </Pressable>
        </View>
        <Carousel
          style={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          width={width - 16 * 2}
          height={height - 339}
          pagingEnabled={true}
          snapEnabled={true}
          mode={'vertical-stack'}
          loop={false}
          autoPlay={false}
          autoPlayReverse={false}
          data={[
            {
              imageSource: require('@/assets/images/sarmale.png')
            },
            {
              imageSource: require('@/assets/images/chiftele.png')
            },
            {
              imageSource: require('@/assets/images/ciorba.png')
            },
            {
              imageSource: require('@/assets/images/sarmale.png')
            },
            {
              imageSource: require('@/assets/images/chiftele.png')
            },
            {
              imageSource: require('@/assets/images/ciorba.png')
            },
            {
              imageSource: require('@/assets/images/sarmale.png')
            },
            {
              imageSource: require('@/assets/images/chiftele.png')
            },
            {
              imageSource: require('@/assets/images/ciorba.png')
            },
            {
              imageSource: require('@/assets/images/sarmale.png')
            },
            {
              imageSource: require('@/assets/images/chiftele.png')
            },
            {
              imageSource: require('@/assets/images/ciorba.png')
            }
          ]}
          modeConfig={{
            moveSize: 1000,
            snapDirection: 'left',
            stackInterval: 24,
            scaleInterval: 0.05,
            opacityInterval: 0.3
          }}
          customConfig={() => ({ type: 'positive', viewCount: 3 })}
          renderItem={({ index, item }) => (
            <TikTokCard
              index={index}
              currentIndex={0}
              imageSource={item.imageSource}
            />
          )}
          overscrollEnabled={false}
          vertical={false}
        />
      </ScrollView>
    </HomeWrapper>
  );
}

function TikTokCard({
  index,
  currentIndex,
  imageSource
}: {
  index: number;
  currentIndex: number;
  imageSource?: ImageSource;
}) {
  const { height } = useWindowDimensions();
  const animatedCard = useAnimatedStyle(() => {
    return {
      opacity: withTiming(currentIndex === 0 ? 1 : 0)
    };
  });

  const [numberOfLines, setNumberOfLines] = useState(2);
  return (
    <Animated.View
      key={index}
      style={{
        ...tw`w-full rounded-2xl bg-white`,
        height: height - 360
        // opacity: index < currentIndex ? 0 : 1
      }}
      // entering={FadeInRight.delay(3 * 100).duration(200)}
    >
      <Animated.View style={[tw.style(`overflow-hidden rounded-2xl`)]}>
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
                  ...tw`absolute bottom-0 left-0 right-0 h-32 w-full`,
                  transform: [{ rotate: '180deg' }]
                }}
                maxBlurRadius={5}
              />
            )}
            <LinearGradient
              colors={['transparent', '#000000aa']}
              style={tw`absolute bottom-0 w-full px-4 pb-4 pt-16`}
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
                <Pressable
                  style={({ pressed }) => tw.style(pressed && 'opacity-70')}
                  onPress={() => {
                    setNumberOfLines((prev) => (prev === 2 ? 10 : 2));
                  }}
                >
                  <Text
                    style={tw`text-white/85 text-sm font-semibold leading-[1.1]`}
                    numberOfLines={numberOfLines}
                  >
                    Lorem ipsum dolor sit amet consecter cursus. Vulputate dolor
                    sit amet consecter cursus. Vulputate dolor sit amet
                    consecter
                  </Text>
                </Pressable>
              </View>
            </LinearGradient>
          </View>
        </ImageBackground>
      </Animated.View>
    </Animated.View>
  );
}
