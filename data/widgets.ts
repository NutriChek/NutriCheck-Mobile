import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { WidgetSize } from '@/lib/types';

export type WidgetIdentifier =
  | 'Goals'
  | 'AskAI'
  | 'FeaturedRecipe'
  | 'SuggestedRecipe'
  | 'OngoingRecipe'
  | 'Reminder'
  | 'ShoppingList';

export type WidgetsState = Array<{
  component: WidgetIdentifier;
  size: WidgetSize;
}>;

export const useWidgets = create(
  persist<{
    widgets: WidgetsState;
    addWidget: (widget: WidgetIdentifier, size: WidgetSize) => void;
    removeWidget: (index: number) => void;
  }>(
    (set) => ({
      widgets: [],
      addWidget: (widget, size) =>
        set((state) => ({
          widgets: [...state.widgets, { component: widget, size }]
        })),
      removeWidget: (index) =>
        set((state) => {
          const widgets = [...state.widgets];
          widgets.splice(index, 1);
          return { widgets };
        })
    }),
    {
      name: 'widgets',
      storage: createJSONStorage(() => AsyncStorage)
    }
  )
);
