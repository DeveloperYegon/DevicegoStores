import React from 'react'
// import logo from "../assets/DeviceGo.png" 
import cart_icon from "./assets/cart_icon.png"
import { useState } from 'react';
import { Link } from 'react-router-dom'


const Navbar=()=> {
  // states 
  const [menu ,setMenu]=useState("shop");

  return (
    <div className='bg-[#fff] items-center sticky top-0 justify-around flex border h-20'>
      
      <Link to="/">
        DeviceGo stores
      </Link>


      <ul className='flex'>

        <li className='px-3' onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:"none"}} to="/">Shop</Link> {menu==="shop"?<hr className='bg-red-600 h-1'/>:<></>}</li>
        <li className='px-3' onClick={()=>{setMenu("Mens")}}><Link style={{textDecoration:"none"}} to="/mens">Mens</Link>{menu==="Mens"?<hr className='bg-red-600 h-1'/>:<></>}</li>
        <li className='px-3' onClick={()=>{setMenu("women")}}><Link style={{textDecoration:"none"}} to="/women">Women</Link>{menu==="women"?<hr className='bg-red-600 h-1'/>:<></>}</li>
        <li className='px-3' onClick={()=>{setMenu("Kids")}}><Link style={{textDecoration:"none"}} to="/kids">Kids</Link>{menu==="Kids"?<hr className='bg-red-600 h-1'/>:<></>}</li>
      </ul>
    
      
          <Link className='bg-[rgb(255,0,0)] py-2 px-5 rounded-xl ' to="/login"><button>Login</button></Link>
         
         <div>
           <Link to="/cart"><img src={cart_icon} alt="cart" /></Link>
          <div  className=" text-red-600">0</div>
          </div>
      

    </div>
  )
}

export default Navbar