import React from "react";
import ToastProvider from "./components/ToastProvider";

type ProviderProps = {
  children: React.ReactNode;
};
const Provider: React.FC<ProviderProps> = ({ children }) => (
  <ToastProvider>{children}</ToastProvider>
);

export default Provider;
