import { useEffect, useState } from 'react'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi' 
import logo from '../logo.svg'
import { FaGoogle } from 'react-icons/fa'
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth'
import { auth } from '../firebase'
import { useGlobalContext } from '../context'
import 'animate.css';

function Navbar(){

    const [signedIn, setSignedIn] = useState(false) 
    const [signInReq, setSignInReq] = useState(false)   
    const [userName, setUserName] = useState('')

    const {setTheUserId} = useGlobalContext();

    const signInFn = ()=>{
        const googleProvider = new GoogleAuthProvider();
        const GoogleLogin = async ()=>{
            try{
                const result = await signInWithPopup(auth, googleProvider)
                let temp = result.user.displayName
                setUserName(temp)
                setSignedIn(true)
                onAuthStateChanged(auth,(user)=>{
                    if(user!=null)
                        setTheUserId(user.uid)
                    else
                        setTheUserId('')                        
                })
            }catch(err){
                setSignedIn(false)
                console.log(err)
            }
        }
        GoogleLogin()
    }

    const signOutFn = ()=>{
        auth.signOut()
        setUserName('')
        setSignedIn(false)
    }

useEffect(()=>{
    if(signInReq)
        signInFn();
    else
        signOutFn();
},[signInReq])

return <nav className='navbar horizontal'>
        <div className='nav logo'>
            <button className='navbtn'><img src={logo} alt='Shortly'></img></button>
            <GiHamburgerMenu classname='hamburger' size={40}/>
        </div>
        
        <div className="nav-mobile horizontal">
            <div className='nav links horizontal'>
                <button className='navbtn'>features</button>
                <button className='navbtn'>pricing</button>            
                <button className='navbtn'>resources</button>
            </div>
            <hr className='hr-nav'></hr>
            <div className='nav-auth horizontal'>
                <button className={`nav-hello vertical transition ${userName?'fancy':''}`}>{userName?"Hi "+userName+"!":"Login here with: "}</button>
                <button 
                    className={`btn btn-google ${signedIn?'signedout':''}`}
                        onClick={()=>{
                            setSignInReq(!signInReq)
                        }}>
                        {signedIn?'Sign Out':<FaGoogle size = {25}/>}
                </button>
                <div classname='closethebtn'>
                    <BsFillArrowUpCircleFill className={`${'hidee'}close-btn animate__animated animate__bounce`} size= {40}/>
                </div> 
            </div>

        </div> 
 
    </nav>;
}

export default Navbar;