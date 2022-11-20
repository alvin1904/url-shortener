import react from 'react'

function main(){


return <div className='main'>
    <div className='input-container'>
        <input type='url' className='link-input danger'></input>
        <button className='btn shorten'><span>Shorten it!</span></button>
    </div>
    <div className='shortened-links'>

    </div>
</div>;
}

export default main;