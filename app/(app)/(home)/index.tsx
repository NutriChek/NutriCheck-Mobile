import {
  Button,
  FlatList,
  ScrollView,
  Text,
  useWindowDimensions,
  View
} from 'react-native';
import tw from '@/lib/tailwind';
import React, { useRef, useState } from 'react';
import HomeWrapper from '@/components/home-wrapper';
import { useWidgets, WidgetIdentifier } from '@/data/widgets';
import BaseButton from '@/components/base-button';
import Ionicons from '@expo/vector-icons/Ionicons';
import { TrueSheet } from '@lodev09/react-native-true-sheet';
import Animated, {
  useAnimatedStyle,
  withTiming
} from 'react-native-reanimated';
import { WidgetSize } from '@/lib/types';
import Caption from '@/components/caption';
import { widgetComponents } from '@/components/widgets';

export default function HomeScreen() {
  const { widgets, addWidget, removeWidget } = useWidgets();

  const { width } = useWindowDimensions();
  const smallWidgetSize = (width - 16 * 2 - 16) / 2;

  const sheet = useRef<TrueSheet>(null);
  const scrollView = useRef<ScrollView>(null);

  const present = async () => {
    await sheet.current?.present();
  };

  return (
    <HomeWrapper>
      <ScrollView style={tw`px-4`} contentContainerStyle={tw`pb-30 pt-32`}>
        <Button
          title='Add widget'
          onPress={() => addWidget('Goals', 'small')}
        />
        <View style={tw`flex-row flex-wrap gap-4`}>
          {widgets.map((widget, index) => {
            const Widget = widgetComponents[widget.component].component;
            if (widget.size === 'small') {
              return (
                <View
                  key={index}
                  style={{
                    width: smallWidgetSize,
                    maxWidth: smallWidgetSize,
                    flexGrow: 1
                  }}
                >
                  <Widget size='small' />
                </View>
              );
            }
            return (
              <View
                key={index}
                style={{
                  width: '100%',
                  flexGrow: 1
                }}
              >
                <Widget key={index} size={widget.size} />
              </View>
            );
          })}
        </View>
        <View style={tw`mt-4 overflow-hidden rounded-full`}>
          <BaseButton
            style={tw`flex-row gap-1 self-center rounded-full bg-white/70 px-4 py-2`}
            onPress={present}
          >
            <Ionicons name='pencil' size={20} color={tw.color('black/80')} />
            <Text style={tw`text-sm font-medium text-black/80`}>
              Edit widgets
            </Text>
          </BaseButton>
        </View>
        <TrueSheet
          ref={sheet}
          sizes={['50%', 'large']}
          cornerRadius={24}
          dimmed={false}
          blurTint='systemMaterialLight'
          scrollRef={scrollView}
        >
          <ScrollView nestedScrollEnabled ref={scrollView}>
            <Caption text='Add new widgets' />
            <WidgetsFlatList
              components={[
                {
                  component: 'Goals',
                  size: 'small'
                },
                {
                  component: 'Goals',
                  size: 'medium'
                },
                {
                  component: 'Goals',
                  size: 'large'
                }
              ]}
            />
          </ScrollView>
        </TrueSheet>
      </ScrollView>
    </HomeWrapper>
  );
}

function WidgetsFlatList({
  components
}: {
  components: Array<{
    component: WidgetIdentifier;
    size: WidgetSize;
  }>;
}) {
  const { width } = useWindowDimensions();
  const [scrollX, setScrollX] = useState(0);

  return (
    <View style={tw`items-center gap-2`}>
      <FlatList
        onScroll={(event) => {
          setScrollX(event.nativeEvent.contentOffset.x);
        }}
        data={components}
        renderItem={({
          item
        }: {
          item: {
            component: WidgetIdentifier;
            size: WidgetSize;
          };
        }) => {
          const Widget = widgetComponents['Goals'].component;

          if (item.size === 'small') {
            return (
              <View
                style={{
                  width: width,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <View
                  style={{
                    width: (width - 16 * 2 - 16) / 2,
                    maxWidth: (width - 16 * 2 - 16) / 2
                  }}
                >
                  <Widget size='small' />
                </View>
              </View>
            );
          }

          return (
            <View
              style={{
                width: width,
                alignItems: 'stretch',
                justifyContent: 'center',
                paddingHorizontal: 16
              }}
            >
              <Widget size={item.size} />
            </View>
          );
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />
      <View style={tw`flex-row gap-1.5`}>
        {components.map((value, index) => {
          return (
            <PaginationDot
              selected={
                scrollX >= index * width && scrollX < (index + 1) * width
              }
            />
          );
        })}
      </View>
    </View>
  );
}

function PaginationDot({ selected }: { selected: boolean }) {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(selected ? 0.7 : 0.2)
    };
  });

  return (
    <Animated.View style={[animatedStyle, tw`h-2 w-2 rounded-full bg-black`]} />
  );
}
