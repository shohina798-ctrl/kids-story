import { createSlice } from '@reduxjs/toolkit'
import React from 'react'
import { addPersonData, deletePersonData, editPersonData } from '../api/apiPersonData'
import { getWorkSchedule } from '../api/apiWorkSchedule'
const initialState = {
    workSchedule: [],
    isLoading: false,
    error: null
}
export const WorkScheduleSlice = createSlice({
   name: 'workschedule',
   initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getWorkSchedule.fulfilled, (state, action)=>{
                state.workSchedule = action.payload
                state.isLoading = false;
                state.error = null;
            })
            .addCase(getWorkSchedule.rejected, (state)=>{
                state.isLoading = true;
                state.error = 'Get error'
                state.isLoading = false
                state.workSchedule = []
            })
            .addCase(getWorkSchedule.pending, (state)=>{
                state.isLoading = true
            })
            .addCase(deletePersonData.fulfilled, (state,)=>{ 
                state.isLoading = false;
                state.error = null;
            })
            .addCase(deletePersonData.rejected, (state)=>{
                state.isLoading = true;
                state.error = 'Delete error'
                state.isLoading = false
                state.workSchedule = []
            })
            .addCase(deletePersonData.pending, (state)=>{
                state.isLoading = true;
            })
            .addCase(editPersonData.fulfilled, (state)=>{ 
                state.isLoading = false;
                state.error = null
            })
            .addCase(editPersonData.rejected, (state)=>{
                state.workSchedule = [];
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
export default WorkScheduleSlice.reducer