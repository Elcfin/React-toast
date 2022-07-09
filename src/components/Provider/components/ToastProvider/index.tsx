import React from "react";
import Toast from "./components/Toast";

import { toastContext, useToastContextValue } from "./hooks/useToastContext";
import { useToastProvider } from "./hook";
import useToastProps from "./hooks/useToastProps";
import useToastItemList from "./hooks/useToastItemList";
export { useToastContext } from "./hooks/useToastContext";

type ToastProviderProps = {
  children: React.ReactNode;
};
const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  useToastProps();
  const { toastItemList } = useToastItemList();
  console.log(toastItemList);

  return (
    <toastContext.Provider value={useToastContextValue()}>
      <Toast {...useToastProvider()} />
      {children}
    </toastContext.Provider>
  );
};

export default ToastProvider;
