import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


axios.defaults.baseURL = 'https://654e9f03cbc3253557430564.mockapi.io';


export const fetchAdverts = createAsyncThunk('adverts/fetchAll', async (_, thunkAPI) => {
    try {
        const { pagination } = thunkAPI.getState();
        const { currentPage, perPage } = pagination;

        const { data } = await axios.get(`/adverts?page=${currentPage}&limit=${perPage}`);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});


export const getCarById = async (id) => {
    const params = { id };
    const { data } = await axios.get(`/advert/`, { params });
    return data[0];
};


