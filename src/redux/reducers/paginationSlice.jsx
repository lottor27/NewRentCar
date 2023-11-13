import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentPage: 1,
    perPage: 12,

};

const paginationSlice = createSlice({
    name: 'pagination',
    initialState: initialState,
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setPerPage: (state, action) => {
            state.perPage = action.payload;
        },
    },
});

export const { setCurrentPage, setPerPage } = paginationSlice.actions;
export default paginationSlice.reducer;