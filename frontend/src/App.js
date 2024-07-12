
// import './App.css';
// import Footer from './customer/components/Footer/Footer';
// import Navigation from './customer/components/Navigation';
// import Product from './customer/components/Product/Product';
// import ProductDetails from './customer/components/ProductDetails/ProductDetails';
// import HomePage from './customer/pages/HomePage/HomePage';
// import Cart from "./customer/components/cart/Cart.jsx"
// import Checkout from './customer/components/checkout/Checkout.jsx';
// import Order from "./customer/components/orders/Order.jsx"
// import OrderDetails from './customer/components/orders/OrderDetails.jsx';
// import { Route,Routes } from 'react-router-dom';
// import CustomerRoutes from './customer/components/Routers/CustomerRoutes.jsx';

// function App() {
//   return (
//     <div className="App">
//       <Routes>
//         <Route path='/*' element={<CustomerRoutes/>}></Route>
//       </Routes>

      
//       <div className="mt-10">

//       {/* <Product/> */}
//       {/* <ProductDetails/> */}
//       {/* <Cart/> */}
//       {/* <Checkout/> */}
//       {/* <Order/> */}
//       <OrderDetails/>
//       </div>
//       <div>
//         <Footer/>
//       </div>
//     </div>
//   );
// }

// export default App;
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './customer/Components/Navbar/Navigation';
import CustomerRoutes from './Routers/CustomerRoutes';
import AdminRoutes from './Routers/AdminRoutes';
import NotFound from './Pages/Notfound';
import AdminPannel from './Admin/AdminPannel';
import Routers from './Routers/Routers';
import { Toaster } from 'react-hot-toast';

function App() {
  const isAdmin=true;
  return (
    <div className="">
      
      <Routes>
        <Route path="/*" element={<CustomerRoutes />} />
        <Route path="/admin/*" element={<AdminPannel />} />
        
      </Routes>
      <Toaster/>
    </div>
  );
}

export default App;

