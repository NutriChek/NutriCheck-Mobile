import React from 'react';
import { WidgetSize } from '@/lib/types';

const withWidget = (
  SmallWidget: React.FC<any> | null,
  MediumWidget: React.FC<any> | null,
  LargeWidget: React.FC<any> | null
) => {
  return function WidgetWrapper({
    size,
    ...props
  }: {
    size: WidgetSize;
    [key: string]: any;
  }) {
    let WidgetComponent;

    if (size === 'small' && SmallWidget) {
      WidgetComponent = SmallWidget;
    } else if (size === 'medium' && MediumWidget) {
      WidgetComponent = MediumWidget;
    } else if (size === 'large' && LargeWidget) {
      WidgetComponent = LargeWidget;
    } else {
      return null;
    }

    return <WidgetComponent {...props} />;
  };
};

export default withWidget;
