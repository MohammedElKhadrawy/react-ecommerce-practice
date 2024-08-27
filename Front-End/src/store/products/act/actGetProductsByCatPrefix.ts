import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { TProduct } from '@customTypes/product';

type TResponse = TProduct[];

const actGetProductsByCatPrefix = createAsyncThunk(
  'products/actGetProductsByCatPrefix',
  async (prefix: string, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const response = await axios.get<TResponse>(
        `http://localhost:5000/products?cat_prefix=${prefix}`
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.request) {
          return rejectWithValue(
            "'No response from server. Please try again later.'"
          );
        } else if (error.response) {
          return rejectWithValue(error.response.data.message || error.message);
        }
      }
      return rejectWithValue('An unexpected error occurred');
    }
  }
);

export default actGetProductsByCatPrefix;
