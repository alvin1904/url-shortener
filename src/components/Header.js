import img from '../images/illustration-working.svg';

function Header(){


return <header className='head even-columns bg-100 horizontal'>
    <div className='header'>
        <h1 className="transition">
            More than just shorter links
        </h1>
        <p className='content'>
            Build your brand's recognition and get detailed insights on how your links are performing
        </p>
        <button className='btn'>Get Started</button>
    </div>
    <img className="header-ill" src={img} alt='Working man illustration'></img>

</header>;
}

export default Header;