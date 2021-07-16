import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const productIsInCart = state.find((product) => product.id === action.payload.id);
      if (productIsInCart) {
        productIsInCart.quantity++;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const indexCartProduct = state.findIndex((product) => product.id === action.payload);
      state.splice(indexCartProduct, 1);
    },
    incrementQuantity: (state, action) => {
      const product = state.find((product) => product.id === action.payload);
      product.quantity++;
    },
    decrementQuantity: (state, action) => {
      const product = state.find((product) => product.id === action.payload);
      if (product.quantity === 1) {
        const indexProduct = state.findIndex((product) => product.id === action.payload);
        state.splice(indexProduct, 1);
      } else {
        product.quantity--;
      }
    },
    addQuantityToCart: (state, action) => {
        const productIsInCart = state.find((product) => product.id === action.payload.id);
        if (productIsInCart) {
          productIsInCart.quantity += action.payload.quantity
        } else {
          state.push(action.payload);
        }
      },
    removeAllFromCart: (state, action) => {
      const cartProducts = state.map((products) => products.id === action.payload);
      if (cartProducts) {
        cartProducts.quantity = 0;
        const indexCartProduct = state.findIndex((product) => product === action.payload);
        state.splice(indexCartProduct.length);
      } else 
      state.push({ ...action.payload, quantity: 0 });
    }
  },
});

export const cartReducer = cartSlice.reducer;

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  addQuantityToCart,
  removeAllFromCart,
} = cartSlice.actions;