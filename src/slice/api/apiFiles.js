import React from 'react'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
let api = 'http://localhost:3000'

export const getFiles = createAsyncThunk(
    "product/files", async () => {
        const response = await axios.get(`${api}/files`)
        return response.data
    }
);