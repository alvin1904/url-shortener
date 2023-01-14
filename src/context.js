import React, {useState, useEffect, useContext} from "react";

import {db} from './firebase'
import {doc,arrayUnion, updateDoc} from 'firebase/firestore'

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
    const [addLink, setAddLink] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    const [loading, setLoading] = useState(false)

    const setTheLoading = (b)=>{
        setLoading(b)
    }
    const setTheAddLink = (b)=>{
        setAddLink(b)
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
            fetch(`https://api.shrtco.de/v2/shorten?url=${longLink}`)
                .then((res1)=> res1.json())
                .then((res2)=> {
                    // console.log(res2)
                    apiData = res2
                    const obj = {            
                        'code': `${res2.result.code}`,
                        'original': `${longLink}`,
                        'short': `${res2.result.short_link}`
                    }
                    return obj;
                })
                .then((res3)=>{
                    if(userId){
                        const newRef = doc(db, 'url-data', userId)
                        updateDoc(newRef,{
                            links: arrayUnion(res3)
                        })
                    }
                    setAddLink(true)
                    setLoading(false)
                })
                .catch((err)=>{
                    // console.log(err)
                    switch(apiData.error_code){
                        case 2:  setErrorMsg("Invalid URL submitted")
                                 break;
                        case 3:  setErrorMsg("Rate limit reached. Wait a second")
                                 break;
                        case 6:  setErrorMsg("Something unknown to us is wrong")   
                                 break;
                        case 10: setErrorMsg("The link you entered is a disallowed link")
                                 break;        
                        default: setErrorMsg("Your internet must be down")              
                    }
                })
        }    
        if(fetchToggle){
            try{
                fetchURL();
            }
            catch(err){
                console.log(err)
            }
        }
        setFetchToggle(false)    
        // eslint-disable-next-line
    },[fetchToggle])

    return(
        <AppContext.Provider value={{shorten,
                                    loading,
                                    setTheLoading,
                                    errorMsg,
                                    userId,
                                    setTheUserId,
                                    addLink,
                                    setTheAddLink
                                    }}>
            {children}
        </AppContext.Provider>
    )
}
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider};