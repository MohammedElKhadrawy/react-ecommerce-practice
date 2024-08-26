import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { TCategory } from '@customTypes/category';

type TResponse = TCategory[];

const actGetCategories = createAsyncThunk(
  'categories/actGetCategories',
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const response = await axios.get<TResponse>(
        'http://localhost:5000/categories'
      );
      return response.data;

      // Ex: when we want to manipulate the data, we need to use <generic type> for better auto-completion
      // const data = response.data.map((el) => el.id);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Request was made but no response was received
        if (error.request) {
          return rejectWithValue(
            'No response from server. Please try again later.'
          );
          // Server responded with a status code outside the 2xx range
        } else if (error.response) {
          return rejectWithValue(error.response.data.message || error.message);
        }
      }
      // we need to make sure we return something with every single case cuz otherwise Typescript will get really mad xd
      return rejectWithValue('An unexpected error occurred');
    }
  }
);

export default actGetCategories;
