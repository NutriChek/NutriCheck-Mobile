import HomeWrapper from '@/components/home-wrapper';
import tw from '@/lib/tailwind';
import { ScrollView } from 'react-native-gesture-handler';
import { Platform, Pressable, useWindowDimensions, View } from 'react-native';
import React from 'react';
import { router } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import Carousel from 'react-native-reanimated-carousel';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import IOSMeshGradient from '@/components/ios-mesh-gradient';
import TikTokCard from '@/components/tiktok-card';

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
            <TikTokCard index={index} imageSource={item.imageSource} />
          )}
          overscrollEnabled={false}
          vertical={false}
        />
      </ScrollView>
    </HomeWrapper>
  );
}
