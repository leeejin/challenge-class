import { createContext, useContext, useState } from "react";
import Toast from "../components/Toast";

let initialState = {
  on: () => {},
  off: () => {},
};
export const ToastContext = createContext(initialState);

export const useToast = () => useContext(ToastContext);

export function ToastProvider({ children }) {
  const [toast, setToast] = useState([]);
  const value = {
    on: (element) => {
      setToast((prev) => [...prev, element]);
    },
    off: (id) => {
      setToast((prev) => prev.filter((toast) => toast.id !== id));
    },
  };
  return (
    <ToastContext.Provider value={value}>
      {children}
      <Toast toast={toast} />
    </ToastContext.Provider>
  );
}
