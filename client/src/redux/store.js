import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import cartReducer from "./cartSlice";
import modalReducer from "./modalSlice";

const store = configureStore({
    reducer:{
        auth: authReducer,
        cart: cartReducer,
        modal: modalReducer
    }
})

export default store;