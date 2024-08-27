import { createSlice } from '@reduxjs/toolkit';
import { TCategory } from '@customTypes/category';
import { TLoading } from '@customTypes/shared';
import actGetCategories from './act/actGetCategories';

// we have to export this interface to solve the error in index.ts "exporting store"
export interface ICategoriesState {
  records: TCategory[];
  loading: TLoading;
  error: string | null;
}

const initialState: ICategoriesState = {
  records: [],
  loading: 'idle',
  error: null,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(actGetCategories.pending, (state) => {
        state.loading = 'pending';
        state.error = null;
      })
      .addCase(actGetCategories.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.records = action.payload; // make sure we handle all return cases in the thunk to avoid errors!
      })
      .addCase(actGetCategories.rejected, (state, action) => {
        state.loading = 'failed';
        if (action.payload && typeof action.payload === 'string') {
          state.error = action.payload;
        }
        // another solution but "risky" is to use type casting state.error = action.payload as string
      }),
});

export { actGetCategories };
export default categoriesSlice.reducer;
