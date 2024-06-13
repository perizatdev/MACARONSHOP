// src/features/Login/store/slice.js
import { createSlice } from '@reduxjs/toolkit';
import { postLogin } from './action';

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(postLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default loginSlice.reducer;
