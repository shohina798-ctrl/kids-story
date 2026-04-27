import React from 'react'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
let api = 'http://localhost:3000'

export const getAdventages = createAsyncThunk(
    "product/dataAdventages", async (search) => {
        const res = await axios.get(`${api}/adventages`)
        if (search) {
            let response = res.data.filter(elm => {
                if (elm.text.toLowerCase().includes(search.toLowerCase())) 
                    return elm  
            })
            return response
        }
        return res.data
    }
);
export const deleteAdventage = createAsyncThunk(
    "product/deleteAdventage", async (id) => {
        let response = await axios.delete(`${api}/adventages/${id}`)
        return response.data;
    }
);
export const editAdventage = createAsyncThunk(
    "product/editAdventage", async (data) => {
        let response = await axios.put(`${api}/adventages/${data.id}`, data)
        return response.data
    }
);
export const addAdventage = createAsyncThunk(
    "product/addAdventage", async (data) => {
        let response = await axios.post(`${api}/adventages`, data)
        return response.data;
    }
);