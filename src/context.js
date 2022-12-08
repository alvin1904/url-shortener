import React, {useState, useEffect, useContext} from "react";

const AppContext = React.createContext();
const AppProvider = ({children}) => {

    // THE CURRENT LOGGED IN USER
    const [userId, setUserId] = useState('')
    const setTheUserId = (uid)=>{
        setUserId(uid)
    }
    
    //CONTEXT
    const [fetchToggle, setFetchToggle] = useState(false)
    const [longLink, setLongLink] = useState('')
    const [newLinks, setNewLinks] = useState([])
    const [errorMsg, setErrorMsg] = useState('')
    const [loading, setLoading] = useState(false)

    const setTheLoading = (b)=>{
        setLoading(b)
    }

    const shorten = (link)=>{
        setErrorMsg('')
        setLoading(true)
        setLongLink(link)
        setFetchToggle(true)
    }

    useEffect(()=>{
        let apiData={}
        const fetchURL = () => {
            let x = newLinks.filter((newLink)=>newLink.original === longLink).length
            if(x>0){
                setLoading(false)
                setErrorMsg("Avoid entering already shortened links")
                x=0
                return 
            }
            fetch(`https://api.shrtco.de/v2/shorten?url=${longLink}`)
                .then((res1)=> res1.json())
                .then((res2)=> {
                    apiData = res2
                    const obj = {            
                        code: res2.result.code,
                        original: longLink,
                        short: res2.result.short_link
                    }
                    return obj;
                })
                .then((res3)=>{
                    let temp=newLinks
                    temp.push(res3)
                    setNewLinks(temp)
                    setLoading(false)
                })
                .catch((err)=>{
                    console.log(err)
                    switch(apiData.error_code){
                        case 2: setErrorMsg("Invalid URL submitted")
                                break;
                        case 3: setErrorMsg("Rate limit reached. Wait a second")
                                break;
                        case 6: setErrorMsg("Something unknown to us is wrong")   
                                break;
                        default: setErrorMsg("Your internet must be down")              
                    }
                })
        }    
        if(fetchToggle)
            fetchURL();
        setFetchToggle(false)    
    },[fetchToggle])

    return(
        <AppContext.Provider value={{shorten,
                                    loading,
                                    setTheLoading,
                                    newLinks,
                                    errorMsg,
                                    userId,
                                    setTheUserId
                                    }}>
            {children}
        </AppContext.Provider>
    )
}
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider};