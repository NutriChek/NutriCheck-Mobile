import React, { createContext, useContext } from 'react';

const WidgetContext = createContext<Array<Record<string, any>> | null>(null);

export const useWidgetContext = () => useContext(WidgetContext);

export const WidgetProvider = ({
  children,
  value
}: {
  children: React.ReactNode;
  value: Array<Record<string, any>>;
}) => {
  return (
    <WidgetContext.Provider value={value}>{children}</WidgetContext.Provider>
  );
};
