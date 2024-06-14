// src/features/Login/api.js
import { apiRoot } from '../../app/api';

export const api = {
  loginUser: (userData) => apiRoot.post('/login/', userData),
};
