import axios from 'axios';

const API_BASE_URL = 'https://your-api-url.com';

export const getRooms = () => {
  return axios.get(`${API_BASE_URL}/rooms`);
};

// Add more API functions for different data types
export const getReservations = () => {
  return axios.get(`${API_BASE_URL}/reservations`);
};

export const createRoom = (roomData) => {
  return axios.post(`${API_BASE_URL}/rooms`, roomData);
};

// Example of an API function that takes parameters
export const getRoomById = (roomId) => {
  return axios.get(`${API_BASE_URL}/rooms/${roomId}`);
};
