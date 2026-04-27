import { createSlice } from '@reduxjs/toolkit'
import React from 'react'
import { getMenu } from '../api/apiMenu'
const initialState = {
    menu: [],
    isLoading: false,
    error: null
}
export const MenuSlice = createSlice({
   name: 'menu',
   initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getMenu.fulfilled, (state, action)=>{
                state.menu = action.payload
                state.isLoading = false;
                state.error = null;
            })
            .addCase(getMenu.rejected, (state)=>{
                state.isLoading = true;
                state.error = 'Get error'
                state.isLoading = false
                state.kidCards = []
            })
            .addCase(getMenu.pending, (state)=>{
                state.isLoading = true
            })
    }
})
export default MenuSlice.reducer