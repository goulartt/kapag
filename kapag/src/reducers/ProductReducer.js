import { combineReducers } from 'redux';
import products from '../../products.json'

const INITIAL_STATE = {
  products: Object.values(products),
  scannedProducts: []
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      let hasRead = false
      return {
        ...state,
        scannedProducts: state.scannedProducts.filter(p => p.barcode === action.product.barcode).length === 0 ?
          [...state.scannedProducts, action.product] :
          state.scannedProducts.map(item => {

            if (item.barcode == action.product.barcode && !hasRead) {
              hasRead = true
              item.qtd++
            }
            return item
          })
      }

    case 'GET_PRODUCTS':
      return state.products

    case 'DELETE_PRODUCT':
      return {
        ...state,
        scannedProducts: state.scannedProducts.filter(p => p.barcode == action.barcode)[0].qtd === 1 ?
          [...state.scannedProducts].filter((value, index, arr) => {
            return value.barcode != action.barcode;
          }) :
          state.scannedProducts.map(p => {
            if (p.barcode === action.barcode) {
              p.qtd--
            }
            return p
          })
      }
    default:
      return state
  }
};

export default productReducer

