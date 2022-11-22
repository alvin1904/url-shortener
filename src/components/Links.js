import react from 'react'
import logo from '../logo.svg'
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import pinterest from '../images/icon-pinterest.svg'
import insta from '../images/icon-instagram.svg'

function links(){


return <div className='link-containers bg-800'>
    <div className='link-container'>
        <button className='navbtn'><img src={logo} alt='Shortly'></img></button>
    </div>
    <div className='link-container'>
        <div>
            <h4>Features</h4>
            <h5>Link Shortening</h5>
            <h5>cvfsdfgdsjhb</h5>
            <h5>Branded Links</h5>
            <h5>Analytics</h5>
        </div>
        <div>
            <h4>Resources</h4>
            <h5>Blog</h5>
            <h5>Developers</h5>
            <h5>Support</h5>
        </div>
        <div>
            <h4>Company</h4>
            <h5>About</h5>
            <h5>Our Team</h5>
            <h5>Careers</h5>
            <h5>Contact</h5>
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