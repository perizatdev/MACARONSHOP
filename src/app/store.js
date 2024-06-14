// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import registerReducer from '../features/Register/store/slice';
import loginReducer from '../features/Login/store/slice';

export const store = configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer,
  },
});
