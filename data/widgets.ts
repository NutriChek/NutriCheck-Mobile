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
    setWidgets: (widgets: WidgetsState) => void;
    addWidget: (widget: WidgetIdentifier, size: WidgetSize) => void;
    changeWidgetSize: (index: number, size: WidgetSize) => void;
    removeWidget: (index: number) => void;
    removeAll: () => void;
  }>(
    (set) => ({
      widgets: [],
      addWidget: (widget, size) =>
        set((state) => ({
          widgets: [...state.widgets, { component: widget, size }]
        })),
      setWidgets: (widgets) => set({ widgets }),
      changeWidgetSize: (index, size) =>
        set((state) => {
          const widgets = state.widgets.map((widget, i) =>
            i === index ? { ...widget, size } : widget
          );
          return { widgets };
        }),
      removeWidget: (index) =>
        set((state) => {
          const widgets = [...state.widgets];
          widgets.splice(index, 1);
          return { widgets };
        }),
      removeAll: () => set({ widgets: [] })
    }),
    {
      name: 'widgets',
      storage: createJSONStorage(() => AsyncStorage)
    }
  )
);
