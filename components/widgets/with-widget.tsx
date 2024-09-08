import React from 'react';
import { WidgetSize } from '@/lib/types';
import { WidgetProvider } from '@/components/widgets/widget-context';

const withWidget = (
  SmallWidget: React.FC<any> | null,
  MediumWidget: React.FC<any> | null,
  LargeWidget: React.FC<any> | null
) => {
  return function WidgetWrapper({
    size,
    widgetBaseProps,
    ...props
  }: {
    size: WidgetSize;
    widgetBaseProps?: Array<Record<string, any>>;
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

    return (
      <WidgetProvider value={widgetBaseProps ?? [{ pressEnabled: true }]}>
        <WidgetComponent {...props} />
      </WidgetProvider>
    );
  };
};

export default withWidget;
