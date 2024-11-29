import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const register = async (username:any, email:any, number:any, password:any) => {
  return await axios.post(`${API_URL}/register`, { username, email, number, password });
};

export const login = async (username:any, password:any) => {
  return await axios.post(`${API_URL}/login`, { username, password });
};