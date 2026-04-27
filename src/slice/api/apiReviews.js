import React from 'react'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
let api = 'http://localhost:3000'

export const getReviewsData = createAsyncThunk(
    "product/reviewsData", async () => {
        const response = await axios.get(`${api}/reviewsData`)
        return response.data
    }
);
export const deleteReviews = createAsyncThunk(
    "product/deleteReviewsData", async (id) => {
        let response = await axios.delete(`${api}/reviewsData/${id}`)
        return response.data;
    }
);
export const editReviews = createAsyncThunk(
    "product/editReviewsData", async (data) => {
        console.log(data.id);
        let response = await axios.put(`${api}/reviewsData/${data.id}`, data)
        return response.data
    }
);