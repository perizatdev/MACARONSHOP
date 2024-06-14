// src/features/Login/store/selectors.js

export const selectLoginLoading = (state) => state.login.loading;
export const selectLoginError = (state) => state.login.error;
export const selectLoginUser = (state) => state.login.user;
