import React from 'react'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
let api = 'http://localhost:3000'

export const getMenu = createAsyncThunk(
    "product/menu", async (search) => {
        const res = await axios.get(`${api}/menu`)
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
export const deleteMenu = createAsyncThunk(
    "product/deleteMenu", async (id) => {
        let response = await axios.delete(`${api}/menu/${id}`)
        return response.data;
    }
);
export const editMenu = createAsyncThunk(
    "product/editMenu", async (data) => {
        console.log(data.id);
        let response = await axios.put(`${api}/menu/${data.id}`, data)
        return response.data
    }
);
export const addMenu = createAsyncThunk(
    "product/addMenu", async (data) => {
        let response = await axios.post(`${api}/menu`, data)
        return response.data;
    }
);