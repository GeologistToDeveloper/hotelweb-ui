import { createSlice } from "@reduxjs/toolkit";

const showPasswordSlice = createSlice({
    name: "showPassword",
    initialState: true,
    reducers: {
        flipPasswordState: (state) => !state
    }
});

export const showPasswordReducer = showPasswordSlice.reducer;
export const showPasswordActions = showPasswordSlice.actions; 