import { createSlice } from '@reduxjs/toolkit'
import React from 'react'
import { getKidCards } from '../api/apiKidCard'
const initialState = {
    kidCards: [],
    isLoading: false,
    error: null
}
export const KidCardsSlice = createSlice({
   name: 'kidCardSlice',
   initialState,
    extraReducers: (builder) => {
        builder
             .addCase(getKidCards.fulfilled, (state, action)=>{
                 state.kidCards = action.payload
                 state.isLoading = false;
                 state.error = null;
             })
             .addCase(getKidCards.rejected, (state)=>{
                 state.isLoading = true;
                 state.error = 'Get error'
                 state.isLoading = false
                 state.kidCards = []
             })
             .addCase(getKidCards.pending, (state)=>{
                 state.isLoading = true
             })
            //  .addCase(deletePersonData.fulfilled, (state,)=>{ 
            //      state.isLoading = false;
            //      state.error = null;
            //  })
            //  .addCase(deletePersonData.rejected, (state)=>{
            //      state.isLoading = true;
            //      state.error = 'Delete error'
            //      state.isLoading = false
            //      state.personData = []
            //  })
            //  .addCase(deletePersonData.pending, (state)=>{
            //      state.isLoading = true;
            //  })
            //  .addCase(editPersonData.fulfilled, (state)=>{ 
            //      state.isLoading = false;
            //      state.error = null
            //  })
            //  .addCase(editPersonData.rejected, (state)=>{
            //      state.personData = [];
            //      state.isLoading = false;
            //      state.error = 'Edit Error';
            //  })
            //  .addCase(editPersonData.pending, (state)=>{
            //      state.isLoading = true;
            //  })
            //  .addCase(addPersonData.fulfilled, (state) => {
            //      state.isLoading = false;
            //      state.error = null;
            //  })
            //  .addCase(addPersonData.rejected, (state) => {
            //      state.isLoading = false;
            //      state.error = 'Add Error';
            //  })
            //  .addCase(addPersonData.pending, (state) => {
            //      state.isLoading = true;
            //  })
        }
})
export default KidCardsSlice.reducer