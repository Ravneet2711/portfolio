import { createContext, useContext, useState, useCallback } from "react";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [toastContent, setToastContent] = useState({
    title: "",
    description: "",
    variant: "default",
  });

  const toast = useCallback(({ title, description, variant = "default" }) => {
    setToastContent({ title, description, variant });
    setOpen(false);
    requestAnimationFrame(() => setOpen(true)); // Reset before reopen
  }, []);

  return (
    <ToastContext.Provider value={{ toast, toastContent, open, setOpen }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used within ToastProvider");
  return context;
};
