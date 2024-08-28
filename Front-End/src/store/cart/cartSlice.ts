import { createSlice } from '@reduxjs/toolkit';
import { TProduct } from '@customTypes/product';

export interface ICartState {
  items: { [key: number]: number }; // this is important and smart! { [id]: quantity } => Ex: { 1: 3 }
  productFullInfo: TProduct[]; // we added { quantity?: number } to TProduct for this reason
}

const initialState: ICartState = {
  items: {},
  productFullInfo: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload;
      // check if the item already exists
      if (state.items[id]) {
        state.items[id]++;
      } else {
        // if it doesn't, we add it with quantity of 1
        state.items[id] = 1;
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
