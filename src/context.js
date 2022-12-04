import React, {useState, useEffect, useContext} from "react";

const AppContext = React.createContext();
const AppProvider = ({children}) => {
    const printh = (a)=>{
        console.log(a)
    }
    return(
        <AppContext.Provider value={{printh}}>
            {children}
        </AppContext.Provider>
    )
}
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider};