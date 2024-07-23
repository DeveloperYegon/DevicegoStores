import React, {useContext} from 'react'
import all_product from '../Components/assets/all_product';
import { ShopContext } from '../Components/Shopcontext';
import { useParams  } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay';

const Product = () => {
  const {all_product} =useContext(ShopContext);
    const {productId} = useParams();
    const product = all_product.find((item)=>item.id===Number((productId)))
  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
     
    </div>
  )
}

export default Product