import { createSlice } from "@reduxjs/toolkit";

const carrinhoSlice = createSlice ({
    name: 'carrinho',
    initialState:{
        itemsCarrinho: [],
        valorTotal: 0,
        qtdeTotal: 0
    },
    reducers:{
        addItemCarrinho(state, action){
            const novoItem = action.payload;
            const itemExistente = state.itemsCarrinho.find(item => item._id === novoItem._id);

            state.qtdeTotal++;

            if(!itemExistente){
                state.itemsCarrinho.push({
                    _id: novoItem._id,
                    nome: novoItem.nome,
                    preco: novoItem.preco,
                    qtde: 1,
                    precoTotal: novoItem.preco
                });
            } else{
                itemExistente.qtde++;
                itemExistente.precoTotal += novoItem.preco;
            }
            state.valorTotal = state.itemsCarrinho.reduce((total, item) => total + item.precoTotal, 0)
        },

        removerItemCarrinho(state, action){
            const _id = action.payload;
            const itemExistente = state.itemsCarrinho.find(item => item._id === _id);

            if(itemExistente.qtde === 1){
                state.qtdeTotal -= itemExistente.qtde;
                state.valorTotal -= itemExistente.preco;
                state.itemsCarrinho = state.itemsCarrinho.filter(item => item._id !== _id);
            } else {
                itemExistente.qtde--;
                itemExistente.precoTotal -= itemExistente.preco;
                state.qtdeTotal--;
                state.valorTotal -= itemExistente.preco;
            }
        },

        aumentarQtde(state, action){
            const _id = action.payload;
            const itemExistente = state.itemsCarrinho.find(item => item._id === _id);

            if(itemExistente){
                itemExistente.qtde++;
                itemExistente.precoTotal += itemExistente.preco;
                state.qtdeTotal++;
                state.valorTotal += itemExistente.preco;
            }
        },

        diminuirQtde(state, action){
            const _id = action.payload;
            const itemExistente = state.itemsCarrinho.find(item => item._id === _id);

            if(itemExistente){
                itemExistente.qtde--;
                itemExistente.precoTotal -= itemExistente.preco;
                state.qtdeTotal--;
                state.valorTotal -= itemExistente.preco;
            }
        },

        limparCarrinho(state){
            state.itemsCarrinho = [];
            state.qtdeTotal = 0;
            state.valorTotal = 0;
        }
    }
})

export const { addItemCarrinho, removerItemCarrinho, aumentarQtde, diminuirQtde, limparCarrinho } = carrinhoSlice.actions;

export default carrinhoSlice.reducer;