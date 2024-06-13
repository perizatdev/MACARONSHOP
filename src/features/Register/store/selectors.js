// src/features/Register/store/selectors.js

export const selectRegisterLoading = (state) => state.register.loading;
export const selectRegisterError = (state) => state.register.error;
export const selectRegisterUser = (state) => state.register.user;
