import { combineReducers } from 'redux';
import products from '../products.json' 

const INITIAL_STATE = {
  products: products
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
};

export default combineReducers({
  products: productReducer,
});