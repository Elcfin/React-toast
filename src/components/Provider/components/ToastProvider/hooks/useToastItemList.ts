import { useState, useCallback, useEffect } from "react";

type ToastItemType = {
  message: string;
  timeout: number;
};

const useToastItemList = () => {
  // 与 toastItemList 相关操作，存储需要展示的 toast 队列
  const [toastItemList, setToastItemList] = useState<ToastItemType[]>([]);

  // 向队列中添加新元素
  const addToast = useCallback(
    (message: string, timeout: number) =>
      setToastItemList((prev) => [...prev, { message, timeout }]),
    []
  );

  // 将队列首元素弹出
  const popFrontToast = () => setToastItemList((prev) => prev.slice(1));

  useEffect(() => {
    console.log("useToastItemList", toastItemList);
  }, [toastItemList]);

  return { toastItemList, addToast, popFrontToast };
};

export default useToastItemList;
