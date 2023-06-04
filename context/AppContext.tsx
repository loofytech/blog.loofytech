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
  state: any;
}

export function AppContext({children, state}: IType) {
  const [categories, setCategories] = useState<any>(state.categories.data);

  const value = {
    categories,
  };

  useEffectOnce(() => {
    // console.log(data);
  })

  return (
    <AppProvider.Provider value={value}>
      {children}
    </AppProvider.Provider>
  );
}
