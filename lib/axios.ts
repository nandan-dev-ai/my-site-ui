import axios from 'axios';

const API_BASE_URL = 'http://hello-spring.ap-south-1.elasticbeanstalk.com';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor: attach token from localStorage
api.interceptors.request.use(
  (config) => {
    if (typeof window !== 'undefined') {
      const token = window.localStorage.getItem('authToken');
      if (token) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        } as any;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor: optionally handle 401 or refresh logic
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Basic token expiration handling can be added here
    if (error.response?.status === 401) {
      // optional: clear localStorage and redirect to login
      if (typeof window !== 'undefined') {
        window.localStorage.removeItem('authToken');
      }
    }
    return Promise.reject(error);
  }
);

export default api;
