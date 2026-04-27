import React from 'react'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

let api = 'http://localhost:3000'

export const getWorkSchedule = createAsyncThunk(
    "product/workschedule", async (search) => {
        const res = await axios.get(`${api}/workSchedule`)
        if (search) {
            let response = res.data.filter(elm => {
                if (elm.name.toLowerCase().includes(search.toLowerCase()) || elm.fullname.toLowerCase().includes(search.toLowerCase()) || elm.profession.toLowerCase().includes(search.toLowerCase())) 
                    return elm  
            })
            return response
        }
        else {
            console.log(res.data)
            return res.data
        }
    }
);
export const deleteWorkSchedule = createAsyncThunk(
    "product/deleteWorkSchedule", async (id) => {
        let response = await axios.delete(`${api}/workSchedule/${id}`)
        return response.data;
    }
);
export const editWorkSchedule = createAsyncThunk(
    "product/editWorkSchedule", async (data) => {
        console.log(data.id);
        let response = await axios.put(`${api}/workSchedule/${data.id}`, data)
        return response.data
    }
);
export const addWorkSchedule = createAsyncThunk(
    "product/addPersonData", async (data) => {
        let response = await axios.post(`${api}/workSchedule`, data)
        return response.data;
    }
);