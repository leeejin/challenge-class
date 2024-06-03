import { createContext, useContext, useState } from "react";
import Toast from "../components/Toast";

let initialState = {
  on: () => {},
  off: () => {},
};
export const ToastContext = createContext(initialState);

export const useToast = () => useContext(ToastContext);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const value = {
    on: (toast) => {
      setToasts((prev) => [...prev, toast]);
    },
    off: (id) => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    },
  };
  return (
    <ToastContext.Provider value={value}>
      {children}
      {toasts.length > 0 && (
        <ul className="fixed bottom-6 right-6 grid grid-cols-1 gap-y-3">
          {toasts.map((toast) => (
            <li key={toast.id}>
              <Toast toast={toast} />
            </li>
          ))}
        </ul>
      )}
    </ToastContext.Provider>
  );
}
