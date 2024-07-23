import React from 'react'
import footer_logo from "./assets/DeviceGo.png"
import intragram_logo from "./assets/instagram_icon.png"
import pinterest_logo from "./assets/pintester_icon.png"
import whatsapp_logo from "./assets/whatsapp_icon.png"


function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
    <hr className='h-1 ' />
    <div className="text-center">
      <div className="p-5">
        <h3>DevicegoStores</h3>
      </div>

      <ul className='flex justify-center py-3'>
        <li className='px-5'>Company</li>
        <li className='px-5'>Products</li>
        <li className='px-5'>Offices</li>
        <li className='px-5'>About</li>
        <li className='px-5'>Contact</li>
      </ul>
      
      <div className='flex justify-center '>
          <div className="px-5">
            <img src={intragram_logo} alt="" />
          </div>
           <div className="px-5">
            <img src={pinterest_logo} alt="" />
          </div>
          <div className="px-5">
            <img src={whatsapp_logo} alt="" />
          </div>
      </div>

    </div>
      <div className='p-10'>
        <hr />
      <p className='text-center'>&copy;<span>{year}</span>. DeviceGoStores. All rights are reserved.</p>
      </div>
    </>
  )}

export default Footer