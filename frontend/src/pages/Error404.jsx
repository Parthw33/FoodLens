import React from 'react'
import Error404Img from '../assets/404-Removed.png'

export default function Error404() {
    return(
        <div className='Error'>
            <div className='Error404'>
                <img src={Error404Img} alt="404" />
                <h2 className="heading-text">Something's wrong here</h2>
            </div>
            <div className="ErrorMsg">
                <h2 className="para-2">This is a 404 error, which means you've clicked on a bad link or entered an invalid URL. 
                <br />
                Maybe what you are looking for can be found at <strong><a href="/">FoodLens</a></strong></h2>
            </div>
        </div>
    )
}