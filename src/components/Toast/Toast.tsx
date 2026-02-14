import { JSX, useEffect } from "react";
import {
  FiX,
  FiCheckCircle,
  FiInfo,
  FiXCircle,
  FiAlertCircle,
} from "react-icons/fi";
import { useDispatch } from "react-redux";
import { removeToast } from "../../store/slices/toastSlice";
import { severityColors, severityStyles } from "../constants/toast";
import { IToastProps, ToastSeverity } from "./Toast.type";

const Toast: React.FC<IToastProps> = ({
  id,
  message,
  severity = "info",
  autoClose = 3000,
  sticky = false,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!sticky && autoClose) {
      const timer = setTimeout(() => {
        dispatch(removeToast(id));
      }, autoClose);

      return () => clearTimeout(timer);
    }
  }, [autoClose, sticky, dispatch, id]);

  const handleClose = () => {
    dispatch(removeToast(id));
  };

  const severityIcons: Record<ToastSeverity, JSX.Element> = {
    error: <FiXCircle className="w-7 h-7" />,
    success: <FiCheckCircle className="w-7 h-7" />,
    info: <FiInfo className="w-7 h-7" />,
    warning: <FiAlertCircle className="w-7 h-7" />,
  };

  return (
    <div
      className={`mb-2 border-l-8 px-4 py-3 rounded-lg shadow-lg flex items-center justify-center gap-4 max-w-xs sm:max-w-sm transition-all duration-300 ${severityStyles[severity]}`}
      role="alert"
    >
      <div className={`flex-shrink-0 ${severityColors[severity]}`}>
        {severityIcons[severity]}
      </div>
      <div className="flex-1">
        <p className={`${severityColors[severity]}`}>{message}</p>
      </div>
      {sticky && (
        <button
          onClick={handleClose}
          className={`focus:outline-none ${severityColors[severity]}`}
          aria-label="Close"
        >
          <FiX className="w-7 h-7" />
        </button>
      )}
    </div>
  );
};

export default Toast;
