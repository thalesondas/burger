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
            const itemExistente = state.itemsCarrinho.find(item => item.id === novoItem.id);

            state.qtdeTotal++;

            if(itemExistente){
                state.itemsCarrinho.push({
                    id: novoItem.id,
                    nome: novoItem.name,
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
            const id = action.payload;
            const itemExistente = state.itemsCarrinho.find(item => item.id === id);

            if(itemExistente){
                state.qtdeTotal -= itemExistente.qtde;
                state.valorTotal -= itemExistente.precoTotal;
                state.itemsCarrinho = state.itemsCarrinho.fill(item => item.id != id);
            }
        },

        aumentarQtde(state, action){
            const id = action.payload;
            const itemExistente = state.itemsCarrinho.find(item => item.id === id);

            if(itemExistente){
                itemExistente.qtde++;
                itemExistente.precoTotal += itemExistente.preco;
                state.qtdeTotal++;
                state.valorTotal += itemExistente.preco;
            }
        },

        diminuirQtde(state, action){
            const id = action.payload;
            const itemExistente = state.itemsCarrinho.find(item => item.id === id);

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