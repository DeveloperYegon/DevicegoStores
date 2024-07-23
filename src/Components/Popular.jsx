import React from 'react'
import Item from "./Item"
import data_product from "./assets/data"

const Popular = () => {
  return (

    <div className='m-10 pt-10'>
        <h1 className='text-center'>POPULAR IN WOMEN</h1>
        <hr />
        <div className='grid md:grid-cols-4 gap-4'>
            {data_product.map((item) => {
                return <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                
            })}
        </div>
    </div>
  )
}

export default Popular