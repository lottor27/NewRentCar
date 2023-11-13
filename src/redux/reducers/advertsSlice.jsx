import { createSlice } from '@reduxjs/toolkit'
import { fetchAdverts } from '../operations'

const initialState = {
    items: [],
    isLoading: false,
    error: null
};

const advertsSlice = createSlice({
    name: 'adverts',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAdverts.pending, (state) => {
                state.isLoading = true;
            })
            //
            .addCase(fetchAdverts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            //
            .addCase(fetchAdverts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                // console.log('adverts-fullfield :', action.payload);
                // state.items = action.payload;
                // state.items.push(...action.payload);
                action.payload.forEach(newAdvert => {
                    const existingAdvertIndex = state.items.findIndex(existingAdvert => existingAdvert.id === newAdvert.id);
                    if (existingAdvertIndex !== -1) {
                        state.items[existingAdvertIndex] = newAdvert;
                    } else {
                        state.items.push(newAdvert);
                    }
                });

            })
    }
});

export const advertsReducer = advertsSlice.reducer;
