import React, { useContext } from 'react'
import { ShopContext } from '../Components/Shopcontext'
import dropdown_icon from "../Components/assets/dropdown_icon.png"
import Item from '../Components/Item';

function ShopCategory(props) {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img src={props.banner} alt="" />
      <div className='shopcategory-indexSort'>
  <p>
    <span>Showing 1-12 
    </span>out of 36 products</p>
    <div className="shopcategory-sort">
      sort-by 
      <img src={dropdown_icon} alt="" />
    </div>
      </div>
    
    <div className='grid grid-cols-4 gap-4'>
      {all_product.map((item)=>{
        if(props.category===item.category){
          return <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/> 
        }
      })}

    </div>
    </div>
  )
}

export default ShopCategory