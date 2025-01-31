import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

// Remove any default transformations
axiosInstance.defaults.transformRequest = [
  (data) => {
    return JSON.stringify(data);
  }
];

axiosInstance.interceptors.request.use(
  (config) => {
    // Remove any trailing slashes from url
    config.url = config.url.replace(/\/+$/, '');
    
    // Ensure proper content type for POST requests
    if (config.method === 'post') {
      config.headers['Content-Type'] = 'application/json';
    }

    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Log the exact request for debugging
    console.log('Outgoing request:', {
      url: `${config.baseURL}/${config.url}`,
      method: config.method,
      headers: config.headers,
      data: config.data
    });

    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => {
    // Log successful responses
    console.log('Response:', response.data);
    return response;
  },
  (error) => {
    console.error('API Error:', {
      status: error.response?.status,
      data: error.response?.data,
      message: error.message
    });
    
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      if (window.location.pathname !== '/login') {
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);
