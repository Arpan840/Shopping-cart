import { configureStore } from '@reduxjs/toolkit'
import productsSlice from '../features/products/products.slice';
import cartProductsSlice from '../features/cart/cart.slice'


export const store = configureStore({
  reducer: {
    products: productsSlice,
    cartProducts: cartProductsSlice
  },
})