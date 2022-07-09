import { createContext, useContext, useMemo } from "react";
import useToastItemList from "./useToastItemList";

export const toastContext = createContext<{
  addToast: (message: string, timeout: number) => void;
}>({
  addToast: () => {},
});
export const useToastContext = () => useContext(toastContext);

export const useToastContextValue = () => {
  const { addToast } = useToastItemList();
  const toastContextValue = useMemo(() => ({ addToast }), [addToast]);
  return toastContextValue;
};
