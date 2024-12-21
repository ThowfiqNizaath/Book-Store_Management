import React, { Children, useContext, useState } from "react";
import { createContext } from "react";

export const appContext = createContext()

const ContextProvider = ({children}) => {
    const SERVER_URL = 'https://book-store-management-server.onrender.com';
    const [view, setView] = useState('table')
    const toggleView = () => {
        setView(preView => (
            preView === 'table' ? 'card' : 'table'
        ))
    }
    return (
      <appContext.Provider value={{ view, toggleView, SERVER_URL}}>
        {children}
      </appContext.Provider>
    );
}

export default ContextProvider