import { createSlice } from "@reduxjs/toolkit";

const centralSlice = createSlice({
    name: 'centralSlice',
    initialState: false,
    reducers: {
        flipCentralStateLogout: (state) => {return false},
        flipCentralStateLogin:  (state) => {return true}
    }
});

export const centralReducer = centralSlice.reducer;
export const centralActions = centralSlice.actions;