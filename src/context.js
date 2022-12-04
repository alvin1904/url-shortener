import React, {useState, useEffect, useContext} from "react";

const AppContext = React.createContext();
const AppProvider = ({children}) => {
    
    const [preparedData, setPreparedData] = useState([])
    
    const shorten = (link, shortLinks)=>{
        fetch(`https://api.shrtco.de/v2/shorten?url=${link}`)
            .then((res1)=> res1.json())
            .then((res2)=> {
                const obj = {            
                    code: res2.result.code,
                    original: link,
                    short: res2.result.short_link
                }
                return obj;
            })
            .then((res3)=>{
                let temp = shortLinks;
                temp.push(res3)
                return res3;
            })
            .then((res4)=> setPreparedData(res4))
    }

    return(
        <AppContext.Provider value={{shorten, preparedData}}>
            {children}
        </AppContext.Provider>
    )
}
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider};