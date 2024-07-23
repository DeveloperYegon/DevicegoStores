import React from 'react'
import star_icon from "./assets/star_icon.png";
import star_dull_icon from "./assets/star_dull_icon.png";

function ProductDisplay(props) {
    const {product}=props;
  return (
    <div className='flex m-10'>
        <div className='flex'>
            <div className=''>
                <img className='h-[163px]' src={product.image} alt="" />
                <img className='h-[163px]' src={product.image} alt="" />
                <img className='h-[163px]' src={product.image} alt="" />
                <img className='h-[163px]' src={product.image} alt="" />

            </div>
            <div className='h-[700px] w-[586px]'>
                <img src={product.image} alt="" />
            </div>
        </div>
        <div className=' p-5'>
            <h1>{product.name}</h1>
            <div className='flex h-3 items-center m-5'>
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className='flex gap-3 p-5'>
                <div className='border p-3'>${product.old_price}</div>
                <div className='border p-3'>${product.new_price}</div>
            </div>
            <div className='p-5'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non enim iusto accusantium reiciendis impedit aperiam vel maiores praesentium ipsam quo, dignissimos tenetur nostrum velit repellendus cum assumenda nesciunt ipsa! Non.
            </div>
            <div className='p-5'>
                <h1>Select Size</h1>
                <div className='flex gap-3'>
                    <div className='border p-3'>S</div>
                    <div className='border p-3'>M</div>
                    <div className='border p-3'>L</div>
                    <div className='border p-3'>XL</div>
                    <div className='border p-3'>XXL</div>
                </div>
            </div>
            <button className='bg-[#ff0000] p-3 rounded-2xl '>
                Add to Cart
            </button>
            <p className='m-10'><span>Category:</span> Women, T-shirt, crop-top</p>
            <p className='m-10'><span>Tags:</span>Modern, Latest, crop-top</p>
        </div>
    </div>
  )
}

export default ProductDisplay