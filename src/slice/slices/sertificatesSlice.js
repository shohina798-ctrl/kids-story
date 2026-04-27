import React from 'react'
import { getSertificates } from '../api/apiSertificates'
import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    sertificates: [],
    isLoading: false,
    error: null
}
export const SertificatesSlice = createSlice({
    name: 'sertificates',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getSertificates.fulfilled, (state, action)=>{
                state.sertificates = action.payload
                state.isLoading = false;
                state.error = null;
            })
    }
})
export default SertificatesSlice.reducer