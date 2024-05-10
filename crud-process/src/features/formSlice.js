// src/features/formSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
  formData: {
    // Add properties for form fields here
    // For example:
    name: '',
    email: '',
    // Add more fields as needed
  },
  loading: false,
  error: null,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    fetchDataStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
    },
    fetchDataFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    updateFormData(state, action) {
      state.formData = { ...state.formData, ...action.payload };
    },
    // Add more reducers for CRUD operations on form data
  },
});

export const {
  fetchDataStart,
  fetchDataSuccess,
  fetchDataFailure,
  updateFormData,
} = formSlice.actions;

export default formSlice.reducer;
