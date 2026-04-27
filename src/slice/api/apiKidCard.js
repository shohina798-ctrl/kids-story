import React from 'react'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
let api = 'http://localhost:3000'

export const getKidCards = createAsyncThunk(
    "product/personData", async (search) => {
        const res = await axios.get(`${api}/kidCards`)
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