import { createSlice } from '@reduxjs/toolkit'

const initialState =""

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
  
      setCurrency: (state, action) => {
          
         return action.payload
    },
  },
})

export const { setCurrency } = currencySlice.actions

export default currencySlice.reducer