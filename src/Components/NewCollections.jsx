import React from 'react'
import Item from "./Item"
import new_collections from "./assets/new_collections"

const NewCollections = () => {
  return (
    <div className='mx-10'>
        <h1 className='text-center mt-5'>NEW COLLECTIONS</h1>
        <hr className='h-1 w-[80%] m-auto bg-black' />
        <div className="grid grid-cols-4 gap-4 mt-5 ">
            {new_collections.map((item)=>{
                return <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}

        </div>
    </div>
  )
}

export default NewCollections