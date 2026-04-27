import { createSlice } from '@reduxjs/toolkit'
import React from 'react'
import { addPersonData, deletePersonData, editPersonData, getPersonData } from '../api/apiPersonData'
const initialState = {
    personData: [],
    isLoading: false,
    error: null
}
export const PersonDataSlice = createSlice({
   name: 'personData',
   initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getPersonData.fulfilled, (state, action)=>{
                state.personData = action.payload
                state.isLoading = false;
                state.error = null;
            })
            .addCase(getPersonData.rejected, (state)=>{
                state.error = 'Get error'
                state.isLoading = false
            })
            .addCase(getPersonData.pending, (state)=>{
                state.isLoading = true
            })
            .addCase(deletePersonData.fulfilled, (state,)=>{ 
                state.isLoading = false;
                state.error = null;
            })
            .addCase(deletePersonData.rejected, (state)=>{
                state.error = 'Delete error'
                state.isLoading = false
            })
            .addCase(deletePersonData.pending, (state)=>{
                state.isLoading = true;
            })
            .addCase(editPersonData.fulfilled, (state)=>{ 
                state.isLoading = false;
                state.error = null
            })
            .addCase(editPersonData.rejected, (state)=>{
                state.isLoading = false;
                state.error = 'Edit Error';
            })
            .addCase(editPersonData.pending, (state)=>{
                state.isLoading = true;
            })
            .addCase(addPersonData.fulfilled, (state) => {
                state.isLoading = false;
                state.error = null;
            })
            .addCase(addPersonData.rejected, (state) => {
                state.isLoading = false;
                state.error = 'Add Error';
            })
            .addCase(addPersonData.pending, (state) => {
                state.isLoading = true;
            })
    }
})
export default PersonDataSlice.reducer