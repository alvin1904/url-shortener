import react from 'react'

function main(){


return <main className='bg-200'>
    <div className='input-container'>
        <input type='url' className='input danger'></input>
        <button className='btn'><span>Shorten it!</span></button>
    </div>
    <div className='shortened-links'>
        <div className='shortened-link'>
            <p className='link-actual'>https://google.com</p>
            <p className='link-short'>https://ret.link/dasfsaf</p>
            <button className='btn'>Copy</button>
        </div>
        <div className='shortened-link'>
            <p className='link-actual'>https://google.com</p>
            <p className='link-short'>https://ret.link/dasfsaf</p>
            <button className='btn'>Copy</button>
        </div>
    </div>

    <div className='heading'>
        <h3>Advanced Statistics</h3>
        <p className='content'>Track how your links are performing across the web with our advanced statistics dashboard    </p>
    </div>
    <div className='cards'>
        <div className='card'>
            <img src=""></img>
            <h4 className='d'>Detailed analysis</h4>
            <p className='content'>lorem ipsem set dolor sametsdfsf</p>
        </div>
        <div className='card'>
            <img src=""></img>
            <h4 className='d'>Detailed analysis</h4>
            <p className='content'>lorem ipsem set dolor sametsdfsf</p>
        </div>
        <div className='card'>
            <img src=""></img>
            <h4 className='d'>Detailed analysis</h4>
            <p className='content'>lorem ipsem set dolor sametsdfsf</p>
        </div>
    </div>
    
</main>;
}

export default main;