import react from 'react'
import img from '../images/illustration-working.svg';

function header(){


return <div className='header'>
    <div className='header-left'>
        <p className='heading'>
            More than just
            shorter links
        </p>
        <p className='content'>
            <span>Build your brand's recognition and get detailed </span>
            <span>insights on how your links are performing</span>
        </p>
        <button className='btn'>Get Started</button>
    </div>
    <div className='header-right'>
        <img src={img} alt='Working man illustration'></img>
    </div>
</div>;
}

export default header;