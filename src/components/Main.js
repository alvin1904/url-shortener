import React, { useEffect, useState } from "react"
import i1 from '../images/icon-brand-recognition.svg'
import i2 from '../images/icon-detailed-records.svg'
import i3 from '../images/icon-fully-customizable.svg'
import { useGlobalContext } from '../context.js'

import { db, auth } from '../firebase'
import { collection, getDocs } from "firebase/firestore"; 
import { onAuthStateChanged } from 'firebase/auth'


function Main(){

    const [input, setInput] = useState('');
    const [error, setError] = useState(false)
    const [errorMsgMain, setErrorMsgMain] = useState('')
    const [shortLinks, setShortLinks] = useState([])
    const [copy, setCopy] = useState(false)
    const [copiedLink, setCopiedLink] = useState('')
    const {shorten, loading, setTheLoading, newLinks, errorMsg} = useGlobalContext();


const handleSubmit = (e) => {
    e.preventDefault();
    setError(false)

    const form = document.getElementById('form')
    if(form.checkValidity() && input)
        shorten(input)
    else{
        setError(true);
        return setErrorMsgMain("Invalid Link!")
    } 
    setInput('')   
}

useEffect(()=>{
    setShortLinks(newLinks)
},[newLinks])

useEffect(()=>{
    if(errorMsg){
        setTheLoading(false)
        setError(true)
        setErrorMsgMain(errorMsg)
    }
},[errorMsg])



return <main className='bg-200'>
    <form id='form' className='input-container horizontal '>
        <div className="vertical forloading">
            <input type='url' className={`input ${(error)?'danger':''}`} onChange={(e)=>{
                return setInput(e.target.value);
            }} value={input}></input>
            <div className={`loader-1 center ${(loading)?'':'hide'}`}><span></span></div>
            <p className={`errormsg ${(error)?'':'hide'}`}>{error&&errorMsgMain}</p>
        </div>
        <button className='btn' onClick={handleSubmit}><span>Shorten it!</span></button>
    </form>
    <div className='shortened-links vertical'>
        {
            shortLinks && shortLinks.length!==0 && shortLinks.map((eachLink)=>{
                const {code, original, short} = eachLink;
                return (<div key={code} className='shortened-link horizontal'>
                    <p className='link-actual'>{original}</p>
                    <p className='link-short'>{short}</p>
                    <button className={`btn ${(copiedLink===short && copy)?'copying':''}`} onClick={()=>{
                        setCopy(true)
                        setCopiedLink(short)
                        navigator.clipboard.writeText(short)
                        }} 
                    onMouseLeave = {()=>{
                        if(copy){
                            const timeOu = setTimeout(()=>{
                                setCopy(false)
                                setCopiedLink('')
                            },2000)
                            return ()=>{clearTimeout(timeOu)}
                        }
                    }}>{`${(copiedLink===short && copy)?'Copied!':'Copy'}`}</button>
                </div>)
            })
        }
    </div>

    <div className='heading vertical'>
        <h3>Advanced Statistics</h3>
        <p className='content'>Track how your links are performing across the web with our advanced statistics dashboard</p>
        <div className='cards horizontal'>
            <div className='card'>
                <div className='img-holder'>
                    <img src={i1}></img>
                </div>
                <h4 className='d'>Brand Recognition</h4>
                <p className='content'>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill a confidence in your content.</p>
            </div>

            <div className='card'>
                <div className='img-holder'>
                    <img src={i2}></img>
                </div>
                <h4 className='d'>Detailed Records</h4>
                <p className='content'>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
            </div>

            <div className='card'>
                <div className='img-holder'>
                    <img src={i3}></img>
                </div>
                <h4 className='d'>Fully Customizable</h4>
                <p className='content'>Improve brand awareness and content discoverability though customizable links, supercharging audience engagement</p>
            </div>
    </div>
    </div>
    
    
</main>;
}

export default Main;