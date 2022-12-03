import react from 'react'
import i1 from '../images/icon-brand-recognition.svg'
import i2 from '../images/icon-detailed-records.svg'
import i3 from '../images/icon-fully-customizable.svg'

function main(){


return <main className='bg-200'>
    <div className='input-container horizontal'>
        <input type='url' className='input danger'></input>
        <button className='btn'><span>Shorten it!</span></button>
    </div>
    <div className='shortened-links vertical'>
        
        <div className='shortened-link horizontal'>
            <p className='link-actual'>https://google.com</p>
            <p className='link-short'>https://ret.link/dasfsaf</p>
            <button className='btn'>Copy</button>
        </div>

        <div className='shortened-link horizontal'>
            <p className='link-actual'>https://google.com</p>
            <p className='link-short'>https://ret.link/dasfsaf</p>
            <button className='btn'>Copy</button>
        </div>

    </div>

    <div className='heading vertical'>
        <h3>Advanced Statistics</h3>
        <p className='content'>Track how your links are performing across the web with our advanced statistics dashboard</p>
        <div className='cards horizontal'>
            <div className='card'>
                <div className='img-holder'>
                    <img src={i1}></img>
                </div>
                <h4 className='d'>Brand Recognition</h4>
                <p className='content'>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill a confidence in your content.</p>
            </div>

            <div className='card'>
                <div className='img-holder'>
                    <img src={i2}></img>
                </div>
                <h4 className='d'>Detailed Records</h4>
                <p className='content'>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
            </div>

            <div className='card'>
                <div className='img-holder'>
                    <img src={i3}></img>
                </div>
                <h4 className='d'>Fully Customizable</h4>
                <p className='content'>Improve brand awareness and content discoverability though customizable links, supercharging audience engagement</p>
            </div>
    </div>
    </div>
    
    
</main>;
}

export default main;