import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice ({
    name: 'cart',
    initialState:{
        cartItems: [],
        totalPrice: 0,
        totalQty: 0
    },
    reducers:{
        addCartItem(state, action){
            const newItem = action.payload;
            const existingItem = state.cartItems.find(item => item._id === newItem._id);

            state.totalQty++;

            if(!existingItem){
                state.cartItems.push({
                    _id: newItem._id,
                    name: newItem.name,
                    price: newItem.price,
                    qty: 1,
                    totalPrice: newItem.price
                });
            } else{
                existingItem.qty++;
                existingItem.totalPrice += newItem.price;
            }
            state.totalPrice = state.cartItems.reduce((total, item) => total + item.totalPrice, 0)
        },

        removeCartItem(state, action){
            const _id = action.payload;
            const existingItem = state.cartItems.find(item => item._id === _id);

            if(existingItem.qty === 1){
                state.totalQty -= existingItem.qty;
                state.totalPrice -= existingItem.price;
                state.cartItems = state.cartItems.filter(item => item._id !== _id);
            } else {
                existingItem.qty--;
                existingItem.totalPrice -= existingItem.price;
                state.totalQty--;
                state.totalPrice -= existingItem.price;
            }
        },

        clearCart(state){
            state.cartItems = [];
            state.totalPrice = 0;
            state.totalQty = 0;
        }
    }
})

export const { addCartItem, removeCartItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;