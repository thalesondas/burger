import { configureStore } from "@reduxjs/toolkit";
import carrinhoReducer from './carrinhoSlice'
import modalReducer from "./modalSlice";

const store = configureStore({
    reducer:{
        carrinho: carrinhoReducer,
        modal: modalReducer
    }
})

export default store;