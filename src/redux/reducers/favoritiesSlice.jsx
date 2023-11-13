import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    favorities: []
};

export const favoritiesSlice = createSlice({
    name: 'favorities',
    initialState,
    reducers: {
        addFavorite(state, action) {
            const existingIndex = state.items.findIndex((elem) => elem.id === action.payload.id);
            if (existingIndex === -1) {
                state.items.push(action.payload);
                state.favorities = JSON.stringify(state.items.map(item => item.id));

            }
        },
        deleteFavorite(state, action) {
            const filteredItems = state.items.filter((elem) => elem.id !== action.payload.id);
            state.items = filteredItems;
            state.favorities = JSON.stringify(filteredItems.map(item => item.id));
        },
    }
});

export const favoritiesReducer = favoritiesSlice.reducer;
export const { addFavorite, deleteFavorite } = favoritiesSlice.actions;

