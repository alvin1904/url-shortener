import react from 'react'
import logo from '../logo.svg'
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import pinterest from '../images/icon-pinterest.svg'
import insta from '../images/icon-instagram.svg'

function links(){


return <div className='link-containers'>
    <div className='link-container'>
        <button className='navbtn'><img src={logo} alt='Shortly'></img></button>
    </div>
    <div className='link-container'>
        <div>
            <h4>Features</h4>
            <h4>cvfsjhb</h4>
            <h4>cvfsdfgdsjhb</h4>
            <h4>cvfsjhb</h4>
            <h4>cvfsddfsdffgdsjhb</h4>
        </div>
        <div>
            <h4>Features</h4>
            <h4>cvfsjhb</h4>
            <h4>cvfsdfgdsjhb</h4>
            <h4>cvfsjhb</h4>
            <h4>cvfsddfsdffgdsjhb</h4>
        </div>
        <div>
            <h4>Features</h4>
            <h4>cvfsjhb</h4>
            <h4>cvfsdfgdsjhb</h4>
            <h4>cvfsjhb</h4>
            <h4>cvfsddfsdffgdsjhb</h4>
        </div>
    </div>  
    <div className='link-container'>
        <button className='social-icon'><img src={facebook}></img></button>
        <button className='social-icon'><img src={twitter}></img></button>
        <button className='social-icon'><img src={pinterest}></img></button>
        <button className='social-icon'><img src={insta}></img></button>
    </div>  
</div>;
}

export default links;