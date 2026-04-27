import React from 'react'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
let api = 'http://localhost:3000'

export const getNewsCard = createAsyncThunk(
    "product/newsCard", async () => {
        const response = await axios.get(`${api}/newsCard`)
        return response.data
    }
);