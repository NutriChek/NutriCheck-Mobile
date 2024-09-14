import { View } from 'react-native';
import React, { ReactElement } from 'react';
import ListItem from '@/components/list-item';
import { Style } from 'twrnc';
import tw from '@/lib/tailwind';

export default function List({
  children,
  style,
  childrenStyle,
  childrenTextStyle,
  appearance
}: {
  children: ReactElement<typeof ListItem> | ReactElement<typeof ListItem>[];
  style?: Style;
  childrenStyle?: Style;
  childrenTextStyle?: Style;
  appearance?: 'light' | 'dark';
}) {
  const childrenArray = React.Children.toArray(children);
  const modifiedChildren = childrenArray.map((child, index) => {
    if (
      React.isValidElement<{
        firstItem?: boolean;
        lastItem?: boolean;
        style?: Style;
      }>(child)
    ) {
      const additionalProps: any = {};

      if (childrenStyle) {
        additionalProps.style = childrenStyle;
      }
      if (childrenTextStyle) {
        additionalProps.textStyle = childrenTextStyle;
      }
      if (appearance) {
        additionalProps.appearance = appearance;
      }

      if (childrenArray.length === 1) {
        additionalProps.firstItem = true;
        additionalProps.lastItem = true;
      } else if (index === 0) {
        additionalProps.firstItem = true;
      } else if (index === childrenArray.length - 1) {
        additionalProps.lastItem = true;
      }

      return React.cloneElement(child, additionalProps);
    }
    return null;
  });

  return <View style={tw.style(`rounded-2xl`, style)}>{modifiedChildren}</View>;
}

List.Item = ListItem;
