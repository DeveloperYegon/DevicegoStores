import React from 'react'
import exclusive_image from "./assets/exclusive_image.png"

const Offers = () => {
  return (
    <div className='h-[60vh] bg-gradient-to-t-custom flex mx-10'>
        <div className='w-1/2'>
            <h1> Exclusive</h1>
            <h1>Offers for You</h1>

            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check Now</button>

        </div>
        <div className='w-1/2'>
            <img className='h-full' src={exclusive_image} alt="" />
        </div>

    </div>
  )
}

export default Offers