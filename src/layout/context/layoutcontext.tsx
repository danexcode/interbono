import React, { createContext } from "react";
import { ChildContainerProps } from "app/types";

export const LayoutContext = createContext({});

export function LayoutContextProvider({ children }: ChildContainerProps){
    const infoParaCompartir = 42;
    const value = infoParaCompartir;

    return (
        <LayoutContext.Provider value={value}>
            {children}
        </LayoutContext.Provider>
    )
}