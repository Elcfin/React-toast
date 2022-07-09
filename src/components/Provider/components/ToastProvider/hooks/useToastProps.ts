import { useEffect } from "react";
import useToastItemList from "./useToastItemList";

const useToastProps = () => {
  const { toastItemList, popFrontToast } = useToastItemList();

  useEffect(() => {
    console.log("useToastProps", toastItemList);
  }, [toastItemList]);
  return {};
};

export default useToastProps;
