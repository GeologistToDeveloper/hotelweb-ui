import { createSlice } from "@reduxjs/toolkit";

const centralSlice = createSlice({
  name: "centralSlice",
  initialState: { ownerNav: false, customerNav: false },
  reducers: {
    flipCentralStateLogout: (state) => {
      state.ownerNav = false;
    },
    flipCentralStateLogin: (state) => {
      state.ownerNav = true;
    },
    customerFlip: (state) => {
        state.customerNav=true;
    },
  }
  
});

export const centralReducer = centralSlice.reducer;
export const centralActions = centralSlice.actions;
