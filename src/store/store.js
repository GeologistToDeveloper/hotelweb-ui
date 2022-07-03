import { configureStore } from "@reduxjs/toolkit";
import { centralReducer } from "./centralSlice";
import { showPasswordReducer } from "./showPasswordSlice";

const store = configureStore({
    reducer: {
        central : centralReducer,
        showPassword: showPasswordReducer
    }
});

export default store;