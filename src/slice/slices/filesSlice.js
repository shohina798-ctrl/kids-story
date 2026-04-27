import { createSlice } from '@reduxjs/toolkit'
import React from 'react'
import { getFiles } from '../api/apiFiles'
const initialState = {
    files: [],
    isLoading: false,
    error: null
}
export const FilesSlice = createSlice({
   name: 'dataSlice',
   initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getFiles.fulfilled, (state, action)=>{
                state.files = action.payload
                state.isLoading = false;
                state.error = null;
            })

    }
})
export default FilesSlice.reducer