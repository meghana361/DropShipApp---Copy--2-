// import React from 'react'
// import { Routes,Route,useLocation } from 'react-router-dom'
// import Cart from '../cart/Cart.jsx'
// import Product from '../Product/Product.jsx'
// import Footer from '../Footer/Footer.jsx'
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Navigation from '../Navigation.jsx'

// import HomePage from '../../pages/HomePage/HomePage.jsx'
// import ProductDetails from '../ProductDetails/ProductDetails.jsx'
// import Checkout from '../checkout/Checkout.jsx'
// import Order from '../orders/Order.jsx'
// import OrderDetails from '../orders/OrderDetails.jsx'
// const CustomerRoutes = () => {
//   const location = useLocation();
//   const showNavigation = location.pathname !== "*";
//   return (
    

//       <div>
          

//             {showNavigation && <Navigation />}
      
//       <Routes>
//         <Route path='/login' element={<HomePage/>}></Route>
//         <Route path='/register' element={<HomePage/>}></Route>
//         <Route path="/home" element={<HomePage />}></Route>
//         <Route path="/" element={<HomePage />}></Route>
//         <Route path='/cart' element={<Cart/>}></Route>
//         <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product/>}></Route>
//         <Route path='/product/:productId' element={<ProductDetails/>}></Route>
//         <Route path='/checkout' element={<Checkout/>}></Route>
//         <Route path='/account/order' element={<Order/>}></Route>
//         <Route path='/account/order/:orderId' element={<OrderDetails/>}></Route>
//       </Routes>
      
//         <Footer/>
        
//         </div>
        
      
    
//   )
// }

// export default CustomerRoutes
