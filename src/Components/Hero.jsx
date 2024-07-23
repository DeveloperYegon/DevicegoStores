import React from 'react'
import hand_icon from "./assets/hand_icon.png"
import arrow_icon from "./assets/arrow.png"

import hero_image from  "./assets/hero_image.png"

const Hero= () => {
  return (
    <div className="flex mx-10 h-[60vh] bg-gradient-to-t-custom">

        <div className="w-1/2 p-10">
            <h2 className='text-center'>NEW ARRIVALS ONLY</h2>
            <hr className='h-1 bg-black w-[70%] m-auto ' />
            <div className='hero-hand-icon'>
                <p>new</p>
                <img src={hand_icon} alt="" />
            </div>
            <p className='text-center'>collection</p>
            <p>for everyone</p>
       

            <div className="bg-[#FF0000] flex text-center p-5 rounded-2xl">
                <div>Latest Collection</div>
                <img  className="h-full" src={arrow_icon} alt="" />
            </div>
        
        </div>
        <div className=" w-1/2">
            <img className='h-[80%]' src={hero_image} alt="" />
        </div>


    </div>
  )
}

export default Hero
