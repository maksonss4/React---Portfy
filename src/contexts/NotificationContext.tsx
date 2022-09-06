import { createContext } from "react";
import { ToastOptions, Id, toast, UpdateOptions } from "react-toastify";
import Toast from "../components/Toast";
import { IGeneralProps } from "../interfaces/components";
import { INotification } from "../interfaces/contexts";

export const NotificationContext = createContext<INotification>({} as INotification);

const NotificationProvider = ({ children }: IGeneralProps) => {
  const base = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  } as ToastOptions;

  const updateToast = (toastRef: Id, message: string, type: string) => {
    const settings = {
      ...base,
      render: message,
      type: type,
      isLoading: false,
    } as UpdateOptions;

    toast.update(toastRef, settings);
  };

  const baseTemplate = ["Solicitação em andamento...", base] as INotification["baseTemplate"];

  return (
    <NotificationContext.Provider value={{ updateToast, baseTemplate, base }}>
      {children}
      <Toast />
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
