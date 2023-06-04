/* eslint-disable react-hooks/rules-of-hooks */
import { createContext, useContext, useState } from "react";
import { useEffectOnce } from "usehooks-ts";

type ContextType = {
  categories: any;
}

const ContextDefaultValues: ContextType = {
  categories: [],
}

const AppProvider = createContext<ContextType>(ContextDefaultValues);

export function appContext() {
  return useContext(AppProvider);
}

type IType = {
  children: React.ReactNode;
  data: any;
}

export function AppContext({children, data}: IType) {
  const [categories, setCategories] = useState<any>(data.categories);

  const value = {
    categories,
  };

  useEffectOnce(() => {
    console.log(data);
  })

  return (
    <AppProvider.Provider value={value}>
      {children}
    </AppProvider.Provider>
  );
}
