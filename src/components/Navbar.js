import react from 'react'
import logo from '../logo.svg'

function navbar(){

function alerts(){
    alert("how are you")
}

return <nav className='navbar horizontal'>
        <div className='nav logo'>
            <button className='navbtn'><img src={logo} alt='Shortly'></img></button>
        </div>
        <div className="nav-mobile horizontal">
            <div className='nav links horizontal'>
                <button className='navbtn'>features</button>
                <button className='navbtn'>pricing</button>            
                <button className='navbtn'>resources</button>
            </div>
            <hr className='hr-nav'></hr>
            <div className='nav-auth horizontal'>
                <button className='navbtn'>Login</button>
                <button className='btn'>Sign Up</button>
            </div>
        </div>    
    </nav>;
}

export default navbar;