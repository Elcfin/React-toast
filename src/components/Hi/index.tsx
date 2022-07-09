import { useEffect } from "react";
import { useToastContext } from "../Provider/components/ToastProvider";
import useToastItemList from "../Provider/components/ToastProvider/hooks/useToastItemList";

/* const useHi = () => {
  const { toastItemList, addToast } = useToastItemList();
  console.log();

  useEffect(() => {
    console.log("cat");
  }, [toastItemList]);
  return { addToast };
}; */

const Hi = () => {
  const { addToast } = useToastContext();

  return (
    <button
      onClick={() => {
        addToast(new Date().getTime().toString(), 1000);
      }}
    >
      hi
    </button>
  );
};
export default Hi;
