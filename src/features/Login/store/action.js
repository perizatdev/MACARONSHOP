// src/features/Login/store/actions.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../api';

export const postLogin = createAsyncThunk(
  'login/postLogin',
  async (cameData, { rejectWithValue }) => {
    try {
      const { data } = await api.loginUser(cameData);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue('error');
    }
  }
);
