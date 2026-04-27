import { createSlice } from '@reduxjs/toolkit'
import React from 'react'
import { deleteAdventage, editAdventage, getAdventages } from '../api/apiAdventages'
import { getVideosData } from '../api/apiVideo'
const initialState = {
    videos: [],
    isLoading: false,
    error: null
}
export const VideoSlice = createSlice({
   name: 'videoSlice',
   initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getVideosData.fulfilled, (state, action)=>{
                state.videos = action.payload
                state.isLoading = false;
                state.error = null;
            })
            .addCase(getAdventages.rejected, (state)=>{
                state.error = 'Get error'
                state.isLoading = false
                state.videos = []
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
                state.videos = []
            })
            .addCase(deleteAdventage.pending, (state)=>{
                state.isLoading = true;
                state.videos = []
            })
            .addCase(editAdventage.fulfilled, (state)=>{
                state.isLoading = false;
                state.error = null
            })
            .addCase(editAdventage.rejected, (state)=>{
                state.videos = [];
                state.isLoading = false;
                state.error = 'Edit Error';
            })
            .addCase(editAdventage.pending, (state)=>{
                state.isLoading = true;
            })
    }
})
export default VideoSlice.reducer