import './App.css'
import Footer from './Components/Footer'
import Navbar from "./Components/Navbar";
import './index.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import LoginSignup from './pages/LoginSignup';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import men_banner from "./Components/assets/banner_mens.png"
import women_banner from "./Components/assets/banner_women.png"
import kids_banner from "./Components/assets/banner_kids.png"

function App(){
return (  
<div>
      <Navbar/>
          <Routes>
            <Route path="/" element={<Shop/>}/>
            <Route path="/mens" element={<ShopCategory banner={men_banner} category="men"/>}/>
            <Route path="/women" element={<ShopCategory banner={women_banner} category="women"/>}/>
            <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kid"/>}/>
            <Route path="/product" element={<Product/>}>
              <Route path=':productId' element={<Product/>}/>
            </Route>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/login" element={<LoginSignup/>}/>   
          </Routes>     
      <Footer/>
</div>
  )}

export default App
