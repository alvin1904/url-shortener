import React, {useState, useEffect, useContext} from "react";

const AppContext = React.createContext();
const AppProvider = ({children}) => {
    const shorten = (link)=>{
        console.log(link)
        // fetch(`https://api.shrtco.de/v2/shorten?url=${link}`)
        //     .then((res)=> res.json())
        //     .then((res2)=> prepareData(res2, link))
        let res2 = {
            "ok": true,
            "result": {
              "code": "41bayv",
              "short_link": "shrtco.de/41bayv",
              "full_short_link": "https://shrtco.de/41bayv",
              "short_link2": "9qr.de/41bayv",
              "full_short_link2": "https://9qr.de/41bayv",
              "short_link3": "shiny.link/41bayv",
              "full_short_link3": "https://shiny.link/41bayv",
              "share_link": "shrtco.de/share/41bayv",
              "full_share_link": "https://shrtco.de/share/41bayv",
              "original_link": "https://www.google.com"
            }
          }
        return prepareData(res2, link)
    }

    const prepareData = (data, original)=>{
        const obj = {            
            code: data.result.code,
            original: original,
            short: data.result.short_link
        }
        return obj
    }

    return(
        <AppContext.Provider value={{shorten}}>
            {children}
        </AppContext.Provider>
    )
}
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider};