import react from 'react'
import logo from '../logo.svg'

function navbar(){

function alerts(){
    alert("how are you")
}

return <div className='navbar'>
        <div className='btns-logo'>
            <img src={logo} alt='Shortly'></img>
        </div>
        <div className='btns-links'>
            <button className='btn-nav'>features</button>
            <button className='btn-nav'>pricing</button>            
            <button className='btn-nav'>resources</button>
        </div>
        <div className='btns-auth'>
            <button className='btn-signin'>Sign In</button>
            <button className='btn btn-signup'>Sign Up</button>
        </div>
    </div>;
}

export default navbar;