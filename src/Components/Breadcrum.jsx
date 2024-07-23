import React from 'react'
import arrow_icon from "./assets/arrow.png"

function Breadcrum(probs) {
    const {product}=probs;
  return (

    <div className='flex items-center capitalize gap-[8px m-10'>
        
        HOME <img src={arrow_icon} alt="" />SHOP <img src={arrow_icon} alt="" />{product.category} <img src={arrow_icon} alt="" />{product.name}  
     </div>
  )

}

export default Breadcrum
 