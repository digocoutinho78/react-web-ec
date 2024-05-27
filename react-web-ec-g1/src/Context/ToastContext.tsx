import React, { createContext, useState } from 'react';

type ToastState = {
    show: boolean
}

type ToastContextType = ToastState & {
    setToast:(state:boolean) => void
}

type ToastContextProviderProps = {
    children?: React.ReactNode | undefined;
}

export const ToastCtx = createContext<ToastContextType | undefined>(undefined);

const ToastCtxProvider  = ({ children }: ToastContextProviderProps) => {
    const [show, setShow] = useState<ToastState>({show:false});

    const setToast = (state:boolean) => {
        if (state) {
            setShow({show:state})
            setTimeout(() => {setShow({show:false})}, 3000);
        }

        setShow({show:state})
    }

  return (
    <ToastCtx.Provider value={{ ...show, setToast }}>
      {children}
    </ToastCtx.Provider>
  );
};

export default ToastCtxProvider;