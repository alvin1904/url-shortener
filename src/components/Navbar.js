import react from 'react'
import logo from '../logo.svg'

function navbar(){

function alerts(){
    alert("how are you")
}

return <nav className='navbar'>
        <div className='nav links'>
            <button className='navbtn'><img src={logo} alt='Shortly'></img></button>
            <button className='navbtn'>features</button>
            <button className='navbtn'>pricing</button>            
            <button className='navbtn'>resources</button>
        </div>
        <div className='nav auth'>
            <button className='navbtn'>Sign In</button>
            <button className='btn'>Sign Up</button>
        </div>
    </nav>;
}

export default navbar;