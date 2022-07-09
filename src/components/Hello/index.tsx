import { useToastContext } from "../Provider/components/ToastProvider";
const Hello = () => {
  const { addToast } = useToastContext();
  return (
    <button
      onClick={() => {
        addToast(new Date().getTime().toString(), 1000);
      }}
    >
      add toast
    </button>
  );
};

export default Hello;
