import React, { createContext, useContext, useState, ReactNode } from "react";

type LoadingState={
    isLoading:boolean
}

type LoadingContextType =LoadingState & {
    setLoading:(state:boolean) => void
}

type LoadingContextProviderProps = {
    children?: React.ReactNode | undefined;
}

export const LoadingCtx = createContext<LoadingContextType | undefined>(undefined);

const LoadingCtxProvider = ({ children }: LoadingContextProviderProps) => {
    const [loadingState, setLoadingState] = useState<LoadingState>({isLoading:false})

    const setLoading =(state:boolean)=>{
        setLoadingState({isLoading:state})
    }

    return (
        <LoadingCtx.Provider value={{ ...loadingState, setLoading }}>
            {children}
        </LoadingCtx.Provider>
    )
}

export default LoadingCtxProvider