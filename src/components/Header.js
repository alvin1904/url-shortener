import react from 'react'
import img from '../images/illustration-working.svg';

function header(){


return <header>
    <div className='header-left'>
        <h1>
            More than just shorter links
        </h1>
        <p>
            Build your brand's recognition and get detailed insights on how your links are performing
        </p>
        <button className='btn'>Get Started</button>
    </div>
    <div className='header-right'>
        <img src={img} alt='Working man illustration'></img>
    </div>
</header>;
}

export default header;