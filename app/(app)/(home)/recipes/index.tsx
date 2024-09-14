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
import { ClassInput } from 'twrnc';
import Animated, {
  AnimatedStyle,
  useAnimatedStyle,
  withSpring,
  withTiming
} from 'react-native-reanimated';
import { Image, ImageSource } from 'expo-image';
import { useState } from 'react';
import { router, useFocusEffect } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';
import { VariableBlurView } from '@/modules/blur-view';
import Caption from '@/components/caption';
import RecipesHorizontalScrollView from '@/components/recipes-horizontal-scrollview';

export default function Index() {
  const recipes = [
    {
      title: 'Sarmale de post',
      cookingTime: '20m',
      kcal: 300,
      likes: 120,
      image: require('@/assets/images/sarmale.png')
    },
    {
      title: 'Salam de biscuiti',
      cookingTime: '1h',
      kcal: 480,
      likes: 250,
      image: require('@/assets/images/sarmale.png')
    }
  ];

  return (
    <HomeWrapper>
      <ScrollView contentContainerStyle={tw`pb-32 pt-32`}>
        <Caption
          text={'Discover new recipes'}
          style={tw`px-4 pt-0 text-white`}
        />
        <TikTokCards />
        <View style={tw`gap-4 pt-4`}>
          <RecipesHorizontalScrollView
            title='Your liked recipes'
            data={recipes}
            href='/modals/recipes/liked'
          />
          <RecipesHorizontalScrollView
            title='Top recipes this week'
            data={recipes}
            href='/modals/recipes/top'
          />
          <RecipesHorizontalScrollView
            title='Featured recipes'
            data={recipes}
            href='/modals/recipes/featured'
          />
          <RecipesHorizontalScrollView
            title='Recipes for this season'
            data={recipes}
            href='/modals/recipes/season'
          />
        </View>
      </ScrollView>
    </HomeWrapper>
  );
}

function TikTokCards() {
  const [cardsShown, setCardsShown] = useState(false);

  useFocusEffect(() => {
    setCardsShown(true);

    return () => {
      setCardsShown(false);
    };
  });

  const animatedLeftCard = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: withSpring(cardsShown ? '-5deg' : '0deg', {
            damping: 10
          })
        },
        {
          translateX: withSpring(-cardsShown * 30, {
            damping: 10
          })
        }
      ]
    };
  });

  const animatedRightCard = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: withSpring(cardsShown ? '5deg' : '0deg', {
            damping: 10
          })
        },
        {
          translateX: withSpring(+cardsShown * 30, {
            damping: 10
          })
        }
      ]
    };
  });

  const animatedCardsContainer = useAnimatedStyle(() => {
    return {
      opacity: withTiming(cardsShown ? 1 : 0.8, { duration: 300 }),
      transform: [
        { scale: withTiming(cardsShown ? 1 : 0.8, { duration: 300 }) }
      ]
    };
  });

  return (
    <Pressable
      onPress={() => {
        router.push('/recipes/tiktok');
      }}
      style={({ pressed }) => tw.style(pressed && 'opacity-70')}
    >
      <Animated.View
        style={[animatedCardsContainer, tw`relative items-center`]}
      >
        <TikTokPreviewCard
          style={tw`z-10`}
          imageSource={require('@/assets/images/chiftele.png')}
        />
        <TikTokPreviewCard
          animatedStyle={animatedLeftCard}
          style={{ ...tw`absolute opacity-60`, left: 54 }}
          imageSource={require('@/assets/images/sarmale.png')}
        />
        <TikTokPreviewCard
          animatedStyle={animatedRightCard}
          style={{ ...tw`absolute right-6 opacity-60`, right: 54 }}
          imageSource={require('@/assets/images/ciorba.png')}
        />
      </Animated.View>
    </Pressable>
  );
}

function TikTokPreviewCard({
  style,
  animatedStyle,
  imageSource
}: {
  style?: ClassInput;
  animatedStyle?: AnimatedStyle;
  imageSource?: ImageSource;
}) {
  const { width } = useWindowDimensions();

  return (
    <Animated.View
      style={[animatedStyle, tw.style(`overflow-hidden rounded-2xl`, style)]}
    >
      <ImageBackground
        source={imageSource}
        style={{
          width: width - 120,
          aspectRatio: 17 / 20
        }}
      >
        <View style={tw`relative h-full items-end`}>
          {Platform.OS === 'ios' && (
            <VariableBlurView
              style={{
                ...tw`absolute bottom-0 left-0 right-0 h-32 w-full`,
                transform: [{ rotate: '180deg' }]
              }}
              maxBlurRadius={3}
            />
          )}
          <LinearGradient
            colors={['transparent', '#000000aa']}
            style={tw`absolute bottom-0 w-full px-4 pb-4 pt-16`}
          >
            <View style={tw`gap-1`}>
              <View style={tw`flex-row justify-between`}>
                <View style={tw`grow flex-row items-center gap-2`}>
                  <Image
                    source={require('@/assets/images/profile.jpeg')}
                    style={tw`h-8 w-8 rounded-full`}
                  />
                  <View style={tw`flex-1`}>
                    <Text
                      numberOfLines={1}
                      style={tw`text-base font-semibold leading-[1.1] text-white/95`}
                    >
                      Jamila Cuisine
                    </Text>
                    <Text
                      numberOfLines={1}
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
              <Text
                style={tw`text-white/85 text-sm font-semibold leading-[1.1]`}
                numberOfLines={2}
              >
                Lorem ipsum dolor sit amet consecter cursus. Vulputate dolor sit
                amet consecter cursus. Vulputate dolor sit amet consecter
              </Text>
            </View>
          </LinearGradient>
        </View>
      </ImageBackground>
    </Animated.View>
  );
}
