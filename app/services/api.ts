// services/api.ts
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export const uploadPDF = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);

  const response = await axios.post('/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
};

export const mergePDFs = async (files: File[]) => {
  const formData = new FormData();
  files.forEach((file) => formData.append('pdfs', file));
  const response = await api.post('/merge', formData);
  return response.data;
};

export const splitPDF = async (file: File) => {
  const formData = new FormData();
  formData.append('pdf', file);
  const response = await api.post('/split', formData);
  return response.data;
};

export const compressPDF = async (file: File) => {
  const formData = new FormData();
  formData.append('pdf', file);
  const response = await api.post('/compress', formData);
  return response.data;
};

export const login = async (username: string, password: string) => {
  const response = await api.post('/login', { username, password });
  return response.data;
};

export const register = async (username: string, password: string) => {
  const response = await api.post('/register', { username, password });
  return response.data;
};

export default api;