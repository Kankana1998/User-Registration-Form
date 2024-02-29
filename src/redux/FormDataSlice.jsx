// formDataSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const formDataSlice = createSlice({
  name: 'formData',
  initialState: [],
  reducers: {
    updateFormData: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { updateFormData } = formDataSlice.actions;

export default formDataSlice.reducer;
