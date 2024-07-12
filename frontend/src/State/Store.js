import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import {thunk} from "redux-thunk";
import authReducer from "../Redux/Auth/Reducer"
import customerProductReducer from  "../Redux/Customers/Product/Reducer"
import productReducer from "../Redux/Admin/Product/Reducer"
import cartReducer from "../Redux/Customers/Cart/Reducer"
import { orderReducer}   from "../Redux/Customers/Order/Reducer"
import adminOrderReducer from "../Redux/Admin/Orders/Reducer"
import ReviewReducer from "../Redux/Customers/Review/Reducer"





const rootReducers=combineReducers({
    
    auth:authReducer,
    customersProduct:customerProductReducer,
    cart:cartReducer,
    order:orderReducer,
    review:ReviewReducer,

    // admin
    adminsProduct:productReducer,
    adminsOrder:adminOrderReducer,


});

export const store = legacy_createStore(rootReducers,applyMiddleware(thunk))