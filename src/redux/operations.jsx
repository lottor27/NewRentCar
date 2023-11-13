import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


axios.defaults.baseURL = 'https://654e9f03cbc3253557430564.mockapi.io';


/*
 * GET @ /adverts/fetchAll
 */
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

// export const getCarItems = async () => {
//     const { data } = await axios.get('/advert');
//     return data;
// };


export const getCarById = async (id) => {
    const params = { id };
    const { data } = await axios.get(`/advert/`, { params });
    return data[0];
};


/*
 * POST @ /adverts/favorites
 * advert: { id, year, make, model, type, img, description, fuelConsumption,
 * engineSize, accessories, functionalities, rentalPrice, rentalCompany,
 * address, rentalConditions, mileage }
 */
// export const addFavorite = createAsyncThunk('adverts/addFavorites', async (advert, thunkAPI) => {
//     try {
//         const { data } = await axios.post('/favorites', advert);
//         return data;
//     } catch (error) {
//         return thunkAPI.rejectWithValue(error.message);
//     }
// });
/*
 * DELETE @ /adverts/deleteAdverts
 * idAdverts: string
 */

// export const deleteFavorite = createAsyncThunk('adverts/deleteAdverts', async (idAdverts, thunkAPI) => {
//     try {
//         const { data } = await axios.delete(`/favorites/${idAdverts}`);
//         return data;
//     } catch (error) {
//         return thunkAPI.rejectWithValue(error.message);
//     }
// });