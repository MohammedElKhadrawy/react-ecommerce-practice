import { configureStore } from '@reduxjs/toolkit';

import categoriesReducer from './categories/categoriesSlice';
import productsReducer from './products/productsSlice';

export const store = configureStore({
  reducer: { categories: categoriesReducer, products: productsReducer },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {categories: CategoriesState}
export type AppDispatch = typeof store.dispatch;
