// src/features/Register/api.js
import { apiRoot } from '../../app/api';

export const api = {
  registerUser: (userData) => apiRoot.post('/register/', userData),
};
