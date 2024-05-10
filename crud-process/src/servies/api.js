// src/services/api.js
import axios from 'axios';

const BASE_URL = 'https://your-api-url.com';

export const fetchData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}`);
    return response.data;
  } catch (error) {
    throw error.response.data.error;
  }
};

// Implement other CRUD operations similarly
