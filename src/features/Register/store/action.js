// src/features/Register/store/actions.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../api';

export const postUsers = createAsyncThunk(
  'register/postUsers',
  async (cameData, { rejectWithValue }) => {
    try {
      const { data } = await api.registerUser(cameData);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue('error');
    }
  }
);
