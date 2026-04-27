import { createSlice } from '@reduxjs/toolkit'
import React from 'react'
import { getCenterKids } from '../api/apiCenterKids'
const initialState = {
    centerKids: [],
    isLoading: false,
    error: null
}
export const CenterKidsSlice = createSlice({
   name: 'centerKids',
   initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getCenterKids.fulfilled, (state, action)=>{
                state.centerKids = action.payload
            })
    }
})
export default CenterKidsSlice.reducer