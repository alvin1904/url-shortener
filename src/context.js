import React, {useState, useEffect, useContext} from "react";

const AppContext = React.createContext();
const AppProvider = ({children}) => {
    
    const [preparedData, setPreparedData] = useState([])
    const [errorMsg, setErrorMsg] = useState('')
    
    const shorten = (link, shortLinks)=>{
        let apiData = {}
        fetch(`https://api.shrtco.de/v2/shorten?url=${link}`)
            .then((res1)=> res1.json())
            .then((res2)=> {
                apiData = res2
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
            .catch((err)=>{
                console.log(err)
                switch(apiData.error_code){
                    case 2: setErrorMsg("Invalid URL submitted")
                            break;
                    case 3: setErrorMsg("Rate limit reached. Wait a second")
                            break;
                    case 6: setErrorMsg("Something unknown to us is wrong")   
                            break;
                    default: setErrorMsg("Your Internet must be down")              
                }
            })
    }

    return(
        <AppContext.Provider value={{shorten,
                                    errorMsg
                                    }}>
            {children}
        </AppContext.Provider>
    )
}
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider};