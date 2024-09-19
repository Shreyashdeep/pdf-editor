export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api';

export const API_ROUTES = {
  MERGE: `${API_BASE_URL}/merge`,
  SPLIT: `${API_BASE_URL}/split`,
  COMPRESS: `${API_BASE_URL}/compress`,
};