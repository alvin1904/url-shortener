import React, {useState, useEffect, useContext} from "react";

const AppContext = React.createContext();
const AppProvider = ({children}) => {
    
    const [fetchToggle, setFetchToggle] = useState(false)
    const [longLink, setLongLink] = useState('')
    const [loading, setLoading] = useState(false)

    const shorten = (link)=>{
        setLoading(true)
        setLongLink(link)
        console.log(link)
        setFetchToggle(true)
    }

    useEffect(()=>{
        const fetchURL = () => {
            fetch(`https://api.shrtco.de/v2/shorten?url=${longLink}`)
                .then((res1)=> res1.json())
                .then((res2)=> {
                    console.log(res2)
                })
                .then(()=>{
                    setLoading(false)
                })
                .then(()=>{
                })
        }    
        if(fetchToggle)
            fetchURL();
        setFetchToggle(false)    
    },[fetchToggle])

    return(
        <AppContext.Provider value={{shorten,
                                    loading
                                    }}>
            {children}
        </AppContext.Provider>
    )
}
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider};