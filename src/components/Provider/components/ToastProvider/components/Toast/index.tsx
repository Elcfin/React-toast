import React, { useEffect } from "react";
import "./index.scss";

type ToastProps = {
  isShow: boolean;
  handleClose: () => void;
  handleExited: () => void;
  timeout: number;
  message: string | undefined;
};

const Toast: React.FC<ToastProps> = ({
  isShow,
  handleClose,
  handleExited,
  timeout,
  message,
}) => {
  useEffect(() => {
    if (message) {
      new Promise((resolve) => {
        setTimeout(() => {
          handleClose();
          resolve(1000);
        }, timeout);
      }).then((timeout) => {
        setTimeout(() => {
          handleExited();
        }, timeout as number);
      });
    }
  }, [message]);
  return (
    // 在 message 变化且不为 undefined 时，设置 timeout 时间后调用 handleClose，动画持续时间结束后调用 handleExited
    <div className="toast">
      <div
        className={["toast-container", !isShow ? "toast-hidden" : ""].join(" ")}
      >
        {message}
      </div>
    </div>
  );
};

export default Toast;
