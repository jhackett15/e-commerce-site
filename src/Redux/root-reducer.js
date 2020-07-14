//represents overall reducer 

import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; /* use local storage on window browser as default  */
import userReducer from './user/user-reducer';
import cartReducer from './cart/cart-reducer';
import directoryReducer from './directory/directory.reducer'
import shopReducer from './shop/shop.reducer'


const persistConfig = {
	key: 'root',
	storage,
	whiteList: ['cart'] //string names of the reducers we want to persist
}

const rootReducer = combineReducers({
	user:userReducer,
	cart:cartReducer,
	directory: directoryReducer,
	shop: shopReducer
});

export default  persistReducer(persistConfig, rootReducer)