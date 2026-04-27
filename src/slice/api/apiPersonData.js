import React from 'react'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

let api = 'http://localhost:3000'

export const getPersonData = createAsyncThunk(
    "product/personData", async (search) => {
        const res = await axios.get(`${api}/personData`)
        if (search) {
            let response = res.data.filter(elm => {
                if (elm.name.toLowerCase().includes(search.toLowerCase()) || elm.fullname.toLowerCase().includes(search.toLowerCase()) || elm.profession.toLowerCase().includes(search.toLowerCase())) 
                    return elm  
            })
            return response
        }
        else {
            return res.data
        }
    }
);
export const deletePersonData = createAsyncThunk(
    "product/deletePersonData", async (id) => {
        let response = await axios.delete(`${api}/personData/${id}`)
        return response.data;
    }
);
export const editPersonData = createAsyncThunk(
    "product/editPersonData", async (data) => {
        console.log(data.id);
        let response = await axios.put(`${api}/personData/${data.id}`, data)
        return response.data
    }
);
export const addPersonData = createAsyncThunk(
    "product/addPersonData", async (data) => {
        let response = await axios.post(`${api}/personData`, data)
        return response.data;
    }
);
