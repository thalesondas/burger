import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    estaAberto: false,
  },
  reducers: {
    abrirModal(state) {
      state.estaAberto = true;
    },
    fecharModal(state) {
      state.estaAberto = false;
    },
  },
});

export const { abrirModal, fecharModal } = modalSlice.actions;

export default modalSlice.reducer;