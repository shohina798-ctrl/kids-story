import { createSlice } from '@reduxjs/toolkit'
import React from 'react'
import { deleteAdventage, editAdventage, getAdventages } from '../api/apiAdventages'
const initialState = {
    adventagesData: [],
    isLoading: false,
    error: null
}
export const AdventagesSlice = createSlice({
   name: 'adventages',
   initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getAdventages.fulfilled, (state, action)=>{
                state.adventagesData = action.payload
                state.isLoading = false;
                state.error = null;
            })
            .addCase(getAdventages.rejected, (state)=>{
                state.error = 'Get error'
                state.isLoading = false
                state.adventagesData = []
            })
            .addCase(getAdventages.pending, (state)=>{
                state.isLoading = true
            })
            .addCase(deleteAdventage.fulfilled, (state,)=>{ 
                state.isLoading = false;
                state.error = null;
            })
            .addCase(deleteAdventage.rejected, (state)=>{
                state.error = 'Delete error'
                state.isLoading = false
                state.adventagesData = []
            })
            .addCase(deleteAdventage.pending, (state)=>{
                state.isLoading = true;
                state.adventagesData = []
            })
            .addCase(editAdventage.fulfilled, (state)=>{
                state.isLoading = false;
                state.error = null
            })
            .addCase(editAdventage.rejected, (state)=>{
                state.adventagesData = [];
                state.isLoading = false;
                state.error = 'Edit Error';
            })
            .addCase(editAdventage.pending, (state)=>{
                state.isLoading = true;
            })
    }
})
export default AdventagesSlice.reducer