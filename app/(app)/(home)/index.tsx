import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View
} from 'react-native';
import tw from '@/lib/tailwind';
import React, { useEffect, useRef, useState } from 'react';
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
import List from '@/components/list';
import { FontAwesome6 } from '@expo/vector-icons';
import {
  NestableDraggableFlatList,
  NestableScrollContainer
} from '@/modules/react-native-draggable-flatlist';
import {
  GestureDetector,
  gestureHandlerRootHOC
} from 'react-native-gesture-handler';
import LargeButton from '@/components/form-button';

export default function HomeScreen() {
  const { widgets } = useWidgets();

  const { width } = useWindowDimensions();
  const smallWidgetSize = (width - 16 * 2 - 16) / 2;

  const sheet = useRef<TrueSheet>(null);
  const addSheet = useRef<TrueSheet>(null);
  const changeSheet = useRef<TrueSheet>(null);
  const scrollView = useRef<ScrollView>(null);

  const present = async () => {
    await sheet.current?.present();
  };

  const [selectedNewWidget, setSelectedNewWidget] =
    useState<WidgetIdentifier | null>(null);
  const [selectedChangeWidget, setSelectedChangeWidget] = useState<number>(0);
  const [rerender, setRerender] = useState(false);

  const DragListWithGestureHOC = gestureHandlerRootHOC(() => (
    <DragList
      onItemPress={(index) => {
        setSelectedChangeWidget(index);
        changeSheet.current?.present();
      }}
    />
  ));

  return (
    <HomeWrapper>
      <NestableScrollContainer
        style={tw`px-4`}
        contentContainerStyle={tw`pb-30 pt-32`}
      >
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
                <Widget size={widget.size} />
              </View>
            );
          })}
        </View>
        <View style={tw`mt-4 overflow-hidden rounded-full`}>
          <BaseButton
            style={tw`flex-row gap-1 self-center rounded-full bg-white/70 px-4 py-2`}
            onPress={() => {
              sheet.current?.present();
              setRerender(!rerender);
            }}
          >
            <Ionicons name='pencil' size={20} color={tw.color('black/80')} />
            <Text style={tw`text-sm font-medium text-black/80`}>
              Edit widgets
            </Text>
          </BaseButton>
        </View>
        <TrueSheet
          ref={sheet}
          sizes={['40%', '60%', 'large']}
          cornerRadius={16}
          dimmed={false}
          blurTint='systemMaterialLight'
          scrollRef={scrollView}
          style={tw`android:bg-gray-100`}
        >
          <NestableScrollContainer
            nestedScrollEnabled
            style={tw`mt-4`}
            contentContainerStyle={tw`px-4 pb-20`}
            // stickyHeaderIndices={[0]}
            ref={scrollView as any}
          >
            <View style={tw`flex-row items-center justify-between`}>
              <Caption text='Reorder widgets' style={tw`text-black/80`} />
              <View style={tw`overflow-hidden rounded-full`}>
                <BaseButton
                  style={tw`aspect-square items-center justify-center rounded-full bg-white/70 p-1.5`}
                  onPress={() => sheet.current?.dismiss()}
                >
                  <Ionicons
                    name='close'
                    size={20}
                    color={tw.color('black/80')}
                  />
                </BaseButton>
              </View>
            </View>
            <List style={tw`overflow-hidden rounded-2xl`}>
              <DragListWithGestureHOC />
              {/*<DragList*/}
              {/*  onItemPress={(index) => {*/}
              {/*    setSelectedChangeWidget(index);*/}
              {/*    changeSheet.current?.present();*/}
              {/*  }}*/}
              {/*/>*/}
            </List>
            <Caption text='Add new widgets' style={tw`text-black/80`} />
            <List>
              {
                Object.keys(widgetComponents).map((key, index) => {
                  const widget = widgetComponents[key as WidgetIdentifier];
                  if (key === 'OngoingRecipe' || key === 'Reminder') {
                    return null;
                  }

                  return (
                    <List.Item
                      key={index}
                      onPress={() => {
                        setSelectedNewWidget(key as WidgetIdentifier);
                        addSheet.current?.present();
                      }}
                      rightComponent={
                        <Ionicons
                          name='add-circle'
                          size={24}
                          color={tw.color('green-400')}
                        />
                      }
                      leftComponent={
                        <View style={tw`flex-row items-center gap-2`}>
                          {widget.icon}
                          <Text style={tw`text-base font-medium text-black/80`}>
                            {widget.displayName}
                          </Text>
                        </View>
                      }
                    />
                  );
                }) as any
              }
            </List>
            <NewWidgetSheet widget={selectedNewWidget} sheetRef={addSheet} />
            <ChangeWidgetSheet
              index={selectedChangeWidget}
              sheetRef={changeSheet}
            />
          </NestableScrollContainer>
        </TrueSheet>
      </NestableScrollContainer>
    </HomeWrapper>
  );
}

function WidgetsFlatList({
  components,
  onPositionChange,
  startIndex = -1
}: {
  components: Array<{
    component: WidgetIdentifier;
    size: WidgetSize;
  }>;
  onPositionChange?: (index: number) => void;
  startIndex?: number;
}) {
  const { width } = useWindowDimensions();
  const [selected, setSelected] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    flatListRef.current?.scrollToIndex({
      index: 0,
      animated: false
    });
  }, [components[0].component]);

  useEffect(() => {
    if (startIndex !== -1) {
      setSelected(startIndex);
      flatListRef.current?.scrollToIndex({
        index: startIndex,
        animated: false
      });
    }
  }, [startIndex]);

  return (
    <View style={tw`items-center gap-3`}>
      <FlatList
        ref={flatListRef}
        data={components}
        onScrollToIndexFailed={() => {}}
        renderItem={({
          item,
          index
        }: {
          item: {
            component: WidgetIdentifier;
            size: WidgetSize;
          };
          index: number;
        }) => {
          const Widget = widgetComponents[item.component].component;

          if (item.size === 'small') {
            return (
              <View
                key={index}
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
                  <Widget
                    size='small'
                    widgetBaseProps={[{ pressEnabled: false }]}
                  />
                </View>
              </View>
            );
          }

          return (
            <View
              key={index}
              style={{
                width: width,
                alignItems: 'stretch',
                justifyContent: 'center',
                paddingHorizontal: 16
              }}
            >
              <Widget
                size={item.size}
                widgetBaseProps={[{ pressEnabled: false }]}
              />
            </View>
          );
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onViewableItemsChanged={(event) => {
          const selectedIdx = +event.viewableItems.at(-1)!.key;
          setSelected(selectedIdx);
          onPositionChange && onPositionChange(selectedIdx);
        }}
      />
      <View style={tw`flex-row gap-1.5`}>
        {components.map((value, index) => {
          return <PaginationDot key={index} selected={selected === index} />;
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

function DragList({ onItemPress }: { onItemPress?: (index: number) => void }) {
  const { widgets, setWidgets, removeWidget } = useWidgets();

  const renderItem = ({ item, tapGesture, getIndex }: any) => {
    const index = getIndex();
    const right = (
      <View style={tw`flex-row`}>
        <TouchableOpacity
          onPress={() => {
            removeWidget(index);
          }}
        >
          <Ionicons
            name='remove-circle'
            size={24}
            color={tw.color('red-400')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <GestureDetector gesture={tapGesture}>
            <Ionicons
              name='reorder-three'
              size={24}
              color='rgba(0, 0, 0, 0.4)'
              style={tw`pl-2 pr-3`}
            />
          </GestureDetector>
        </TouchableOpacity>
      </View>
    );
    const widget = widgetComponents[item.component as WidgetIdentifier];
    if (item.component === 'OngoingRecipe' || item.component === 'Reminder') {
      return null;
    }

    return (
      <List.Item
        key={Math.random()}
        rightComponent={right}
        contentContainerStyle={tw`pr-0`}
        onPress={() => onItemPress && onItemPress(index)}
        leftComponent={
          <View style={tw`flex-row items-center justify-between gap-2`}>
            <View style={tw`flex-row items-center gap-2`}>
              {widget.icon}
              <Text
                style={tw`text-base font-medium leading-tight text-black/80`}
              >
                {widget.displayName}
              </Text>
              <View
                style={tw`aspect-square items-center justify-center rounded-full bg-black/50 px-1.5`}
              >
                <FontAwesome6
                  name={item.size.at(0)}
                  size={10}
                  color='white'
                  style={tw`aspect-square text-center`}
                />
              </View>
            </View>
          </View>
        }
      />
    );
  };

  return (
    <NestableDraggableFlatList
      data={widgets}
      onDragEnd={({ data }) => setWidgets(data)}
      keyExtractor={(item, index) => item.component + index}
      renderItem={renderItem}
    />
  );
}

function NewWidgetSheet({
  widget,
  sheetRef
}: {
  widget: WidgetIdentifier | null;
  sheetRef: React.RefObject<TrueSheet>;
}) {
  const [selectedSize, setSelectedSize] = useState(0);
  const { addWidget } = useWidgets();

  if (!widget) {
    return (
      <TrueSheet
        ref={sheetRef}
        sizes={['large']}
        cornerRadius={16}
        dimmed={false}
        blurTint='systemMaterialLight'
        style={tw`android:bg-gray-100`}
      ></TrueSheet>
    );
  }
  const widgetInfo = widgetComponents[widget];

  return (
    <TrueSheet
      ref={sheetRef}
      sizes={['large']}
      cornerRadius={16}
      dimmed={false}
      blurTint='systemMaterialLight'
      style={tw`android:bg-gray-100`}
    >
      <View style={tw`h-full justify-between pb-12 pt-20`}>
        <View style={tw`items-center gap-4`}>
          <Text style={tw`px-8 text-center text-3xl font-bold text-black/80`}>
            {widgetInfo.displayName} widget
          </Text>
          <Text
            style={tw`px-8 text-center text-base leading-tight text-black/80`}
          >
            {widgetInfo.description}
          </Text>
        </View>
        <WidgetsFlatList
          onPositionChange={setSelectedSize}
          components={[
            {
              component: widget,
              size: 'small'
            },
            {
              component: widget,
              size: 'medium'
            },
            {
              component: widget,
              size: 'large'
            }
          ]}
        />
        <LargeButton
          style={tw`mx-4`}
          onPress={() => {
            addWidget(widget, widgetInfo.sizes[selectedSize]);
            sheetRef.current?.dismiss();
          }}
          rightToTextIcon={
            <View
              style={tw`aspect-square items-center justify-center rounded-full bg-white/80 px-1.5`}
            >
              <FontAwesome6
                name={widgetInfo.sizes[selectedSize].at(0)}
                size={10}
                color='black'
                style={tw`aspect-square text-center`}
              />
            </View>
          }
        >
          Add widget •{' '}
        </LargeButton>
      </View>
    </TrueSheet>
  );
}

function ChangeWidgetSheet({
  index,
  sheetRef
}: {
  index: number;
  sheetRef: React.RefObject<TrueSheet>;
}) {
  const [selectedSize, setSelectedSize] = useState(0);
  const { widgets, changeWidgetSize } = useWidgets();
  const widgetComponent = widgets[index]?.component ?? 'Goals';
  const widgetInfo = widgetComponents[widgetComponent];

  if (!widgets[index]) {
    return (
      <TrueSheet
        ref={sheetRef}
        sizes={['large']}
        cornerRadius={16}
        dimmed={false}
        blurTint='systemMaterialLight'
        style={tw`android:bg-gray-100`}
      ></TrueSheet>
    );
  }

  return (
    <TrueSheet
      ref={sheetRef}
      sizes={['large']}
      cornerRadius={16}
      dimmed={false}
      blurTint='systemMaterialLight'
      style={tw`android:bg-gray-100`}
    >
      <View style={tw`h-full justify-between pb-12 pt-20`}>
        <View style={tw`items-center gap-4`}>
          <Text style={tw`px-8 text-center text-3xl font-bold text-black/80`}>
            {widgetInfo.displayName} widget
          </Text>
          <Text
            style={tw`px-8 text-center text-base leading-tight text-black/80`}
          >
            {widgetInfo.description}
          </Text>
        </View>
        <WidgetsFlatList
          onPositionChange={setSelectedSize}
          startIndex={widgetInfo.sizes.indexOf(widgets[index].size)}
          components={[
            {
              component: widgetComponent,
              size: 'small'
            },
            {
              component: widgetComponent,
              size: 'medium'
            },
            {
              component: widgetComponent,
              size: 'large'
            }
          ]}
        />
        <LargeButton
          style={tw`mx-4`}
          onPress={() => {
            console.log(index, widgetInfo.sizes[selectedSize]);
            changeWidgetSize(index, widgetInfo.sizes[selectedSize]);
            sheetRef.current?.dismiss();
          }}
          rightToTextIcon={
            <View
              style={tw`aspect-square items-center justify-center rounded-full bg-white/80 px-1.5`}
            >
              <FontAwesome6
                name={widgetInfo.sizes[selectedSize].at(0)}
                size={10}
                color='black'
                style={tw`aspect-square text-center`}
              />
            </View>
          }
        >
          Change widget •{' '}
        </LargeButton>
      </View>
    </TrueSheet>
  );
}
