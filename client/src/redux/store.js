import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import cartReducer from "./cartSlice";
import modalReducer from "./modalSlice";
import alertReducer from "./alertSlice"

const store = configureStore({
    reducer:{
        auth: authReducer,
        cart: cartReducer,
        modal: modalReducer,
        alert: alertReducer
    }
})

export default store;