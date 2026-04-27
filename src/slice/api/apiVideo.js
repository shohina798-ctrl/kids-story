import React from 'react'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
let api = 'http://localhost:3000'

export const getVideosData = createAsyncThunk(
    "product/videosData", async (search) => {
    const res = await axios.get(`${api}/videosData`)
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
