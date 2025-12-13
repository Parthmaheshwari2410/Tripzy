import { configureStore } from '@reduxjs/toolkit'
import currencyReducer from './Slices/currencySlice.js'
export const store = configureStore({
  reducer: {
    currency: currencyReducer
  },
})