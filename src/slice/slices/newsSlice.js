import { createSlice } from '@reduxjs/toolkit'
import React from 'react'
import { getNewsCard } from '../api/apiNews'
const initialState = {
    newsCard: [],
    isLoading: false,
    error: null
}
export const NewsSlice = createSlice({
   name: 'dataSlice',
   initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getNewsCard.fulfilled, (state, action)=>{
                state.newsCard = action.payload
                state.isLoading = false;
                state.error = null;
            })
    }
})
export default NewsSlice.reducer