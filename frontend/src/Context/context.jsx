import React, { Children, useContext, useState } from "react";
import { createContext } from "react";

export const appContext = createContext()

const ContextProvider = ({children}) => {
    const [view, setView] = useState('table')

    const toggleView = () => {
        setView(preView => (
            preView === 'table' ? 'card' : 'table'
        ))
    }

    return(
        <appContext.Provider value={{view, toggleView}}>
            {children}
        </appContext.Provider>
    )
}

export default ContextProvider