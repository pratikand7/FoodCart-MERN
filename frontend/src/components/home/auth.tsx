import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const register = async (username:any, password:any) => {
  return await axios.post(`${API_URL}/register`, { username, password });
};

export const login = async (username:any, password:any) => {
  return await axios.post(`${API_URL}/login`, { username, password });
};