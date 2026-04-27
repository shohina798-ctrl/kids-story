import { createSlice } from '@reduxjs/toolkit'
import React from 'react'
import { deleteReviews, editReviews, getReviewsData } from '../api/apiReviews'
const initialState = {
    reviewsData: [],
    isLoading: false,
    error: null
}
export const ReviewsDataSlice = createSlice({
   name: 'reviewsData',
   initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getReviewsData.fulfilled, (state, action)=>{
                state.reviewsData = action.payload;
                state.isLoading = false;
            })
            .addCase(getReviewsData.rejected, (state)=>{
                state.error = 'Get error'
                state.isLoading = false
            })
            .addCase(getReviewsData.pending, (state)=>{
               state.isLoading = true;
            })
            .addCase(deleteReviews.fulfilled, (state,)=>{ 
                state.isLoading = false;
                state.error = null;
            })
            .addCase(deleteReviews.rejected, (state)=>{
                state.error = 'Delete error'
                state.isLoading = false
            })
            .addCase(deleteReviews.pending, (state)=>{
                state.isLoading = true;
            })
            .addCase(editReviews.fulfilled, (state)=>{ 
                state.isLoading = false;
                state.error = null
            })
            .addCase(editReviews.rejected, (state)=>{
                state.isLoading = false;
                state.error = 'Edit Error';
            })
            .addCase(editReviews.pending, (state)=>{
                state.isLoading = true;
            })
    }
})
export default ReviewsDataSlice.reducer