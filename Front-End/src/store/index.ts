import { configureStore } from '@reduxjs/toolkit';

import categoriesReducer from './categories/categoriesSlice';

export const store = configureStore({
  reducer: { categories: categoriesReducer },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {categories: CategoriesState}
export type AppDispatch = typeof store.dispatch;
