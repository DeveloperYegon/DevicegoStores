import React from 'react'


function Register() {
  return (
    <div className='bg-gradient-to-t-custom p-10'>
      <div className='bg-[rgba(255,255,255,.5)] m-auto border  w-1/2 p-10'>
      <h1 className='text-center px-4'>Sign Up</h1>
      <hr />
      <div className='flex flex-col px-10'>
      <label htmlFor="name">Name:
                <input className='m-5 border rounded-xl w-[80%] p-3'  id="name" autoFocus placeholder="Enter name" type="text" />
        </label>
        
        <label htmlFor="mail">Email:
                <input className='m-5 border rounded-xl w-[80%] p-3' id="mail" placeholder='Enter Email' type="email"  />
        </label>
        <label htmlFor="password">Password:
                <input className='m-5 border rounded-xl w-[72%] p-3' id="password" placeholder="Enter password" type="password"  />
        </label>
      </div>
      <button className=' bg-[#FF0000] rounded-2xl p-3'>Continue</button>
        <p>Already have an account <span>Login here</span></p>
        <div className='flex gap-4'> 

          <input type="checkbox" checked />
          <p>By continuing, I agree to the terms of use and privacy policy </p>
        </div>
      </div>
        

        

    </div>
   
  )
}

export default Register