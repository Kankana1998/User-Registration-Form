// store.js
import { configureStore } from '@reduxjs/toolkit';
import formDataReducer from './FormDataSlice';

export const store = configureStore({
  reducer: {
    formData: formDataReducer,
  },
});
