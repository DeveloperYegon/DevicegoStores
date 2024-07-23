import React from 'react'
import { Link } from 'react-router-dom'
const Item = (props) => {
  return (

    <div className=' '>
      <Link to={`/product/${props.id}`}><img src={props.image} alt="" /></Link>
      
      <p className='text-center'>{props.name}</p>
      
          <div className='flex gap-10 justify-around'>
            <div className='item-price-new'>
                ${props.new_price}
            </div>

            <div className="">
              ${props.old_price}
            </div>

          </div>
    </div>
  )
}

export default Item