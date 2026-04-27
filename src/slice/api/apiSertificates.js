import React from 'react'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
let api = 'http://localhost:3000'

export const getSertificates = createAsyncThunk(
    "product/sertificates", async () => {
        const response = await axios.get(`${api}/sertificates`)
        return response.data
    }
);