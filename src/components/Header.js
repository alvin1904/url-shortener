import react from 'react'
import img from '../images/illustration-working.svg';

function header(){


return <header className='even-columns bg-100'>
    <div className='header'>
        <h1>
            More than just shorter links
        </h1>
        <p className='content'>
            Build your brand's recognition and get detailed insights on how your links are performing
        </p>
        <button className='btn'>Get Started</button>
    </div>
    <div className='header'>
        <img src={img} alt='Working man illustration'></img>
    </div>
</header>;
}

export default header;