import { TProduct } from '@customTypes/product';
import { TLoading } from '@customTypes/shared';
import { createSlice } from '@reduxjs/toolkit';
import actGetProductsByCatPrefix from './act/actGetProductsByCatPrefix';

// we have to export this interface to solve the error in index.ts "exporting store"
export interface IProductsState {
  records: TProduct[];
  loading: TLoading;
  error: string | null;
}

const initialState: IProductsState = {
  records: [],
  loading: 'idle',
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    productsCleanUp: (state) => {
      state.records = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(actGetProductsByCatPrefix.pending, (state) => {
        state.loading = 'pending';
        state.error = null;
      })
      .addCase(actGetProductsByCatPrefix.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.records = action.payload;
      })
      .addCase(actGetProductsByCatPrefix.rejected, (state, action) => {
        state.loading = 'failed';
        if (action.payload && typeof action.payload === 'string')
          state.error = action.payload;
      });
  },
});

export { actGetProductsByCatPrefix };
export const { productsCleanUp } = productsSlice.actions;
export default productsSlice.reducer;
