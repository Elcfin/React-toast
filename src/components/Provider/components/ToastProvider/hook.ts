import { useState, useEffect } from "react";
import useToastItemList from "./hooks/useToastItemList";

export const useToastProvider = () => {
  const [isShow, setIsShow] = useState<boolean>(false); // 控制 toast 是否展示，分别对应出现动画开始前和关闭动画开始前
  // 当前需要展示的信息和持续时间 如果是 undefined 则不需要展示
  const [message, setMessage] = useState<string | undefined>(undefined);
  const [timeout, setTimeout] = useState<number>(0);

  const { toastItemList, popFrontToast } = useToastItemList();

  // 把 timeout 放到 Toast 中处理
  // 外层只负责操作 isShow
  useEffect(() => {
    // 当 toastItemList 中增加或减少条目时
    // 当 message 发生变化时，一种情况是从当前信息变成 undefined，在之前 toast 关闭时需要将 message 设置为 undefined
    if (toastItemList.length && !message) {
      // 对应之前没有消息需要展示，加入新 toast 条目时
      // 或者上一个条目展示完毕 message 变为 undefined 且仍有条目需要展示时
      setMessage(toastItemList[0].message);
      setTimeout(toastItemList[0].timeout);
      popFrontToast();
      setIsShow(true);
    }
  }, [toastItemList, message]);

  // 到达持续时间需要将 toast 关闭时，先将 isShow 设置为 false，当关闭动画结束时，再将 message 设置为 undefined
  const handleClose = () => {
    setIsShow(false);
  }; // 开始关闭时
  const handleExited = () => {
    setMessage(undefined);
  }; // 关闭动画结束时
  return { isShow, handleClose, handleExited, timeout, message };
};
