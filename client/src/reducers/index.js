import { combineReducers } from 'redux';
//import cartReducer from './cartReducer';
//import detailsReducer from './detailsReducer';
import productReducer from './productReducer';
import productlistReducer from './productlistReducer';

export default combineReducers({
    productlist: productlistReducer,
    //cart: cartReducer,
    //details: detailsReducer,
    product: productReducer
    
});

