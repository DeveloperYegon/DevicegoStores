import React from 'react'
const Newslatter = () => {
  return (
    <div className='h-[40vh] m-10 bg-gradient-to-t-custom p-10'>
      <h1 className='text-center'>Get exclusive offers  on your email</h1>
      <p className='text-center'>Subscribe to our newslatter and stay updated</p>

      <div className='flex gap-5 m-5'>
        <input className='rounded-xl' type="email" autoFocus placeholder="Your email id" />
        <button className='rounded-xl bg-red-500 p-3'>Subscribe</button>
        
      </div>
    </div>
  )
}

export default Newslatter