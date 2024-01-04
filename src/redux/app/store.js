import { configureStore } from '@reduxjs/toolkit'
import productsSlice from '../features/products/products.slice';
import cartProductsSlice from '../features/cart/cart.slice'
import removeCartProductsSlice from '../features/cart/removeProduct.slice'
import resetSlice from '../features/cart/resetCartState'


export const store = configureStore({
  reducer: {
    products: productsSlice,
    cartProducts: cartProductsSlice,
    removeProduct: removeCartProductsSlice,
    resetCart: resetSlice
  },
})