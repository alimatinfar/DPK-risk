import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { addToast, removeToast } from "../store/slices/toastSlice";

interface ToastOptions {
  message: string;
  severity?: "success" | "error" | "warning" | "info";
  duration?: number;
}

const useToast = () => {
  const dispatch = useDispatch();

  let idCounter = 0;

  const showToast = useCallback(
    (options: ToastOptions): number => {
      const id = Date.now() + idCounter++;
      const { message, severity = "info", duration = 3000 } = options;

      const toast = {
        id,
        message,
        severity,
        duration,
      };

      dispatch(addToast(toast));

      if (duration > 0) {
        setTimeout(() => {
          dispatch(removeToast(id));
        }, duration);
      }

      return id;
    },
    [dispatch]
  );

  return { showToast };
};

export default useToast;