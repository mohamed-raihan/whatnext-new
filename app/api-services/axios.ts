import axios from 'axios';

// Create axios instance with default config
const api = axios.create({
  baseURL: 'https://whatnext-mcve.onrender.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

//https://whatnext-mcve.onrender.com/
//http://127.0.0.1:8000

// Request interceptor
// api.interceptors.request.use(
//   (config) => {
//     // You can add auth token here if needed
//     const token = localStorage.getItem('token');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // Response interceptor
// api.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     // Handle common errors here
//     if (error.response) {
//       // The request was made and the server responded with a status code
//       // that falls out of the range of 2xx
//       switch (error.response.status) {
//         case 401:
//           // Handle unauthorized
//           break;
//         case 403:
//           // Handle forbidden
//           break;
//         case 404:
//           // Handle not found
//           break;
//         case 500:
//           // Handle server error
//           break;
//         default:
//           break;
//       }
//     } else if (error.request) {
//       // The request was made but no response was received
//       console.error('No response received:', error.request);
//     } else {
//       // Something happened in setting up the request that triggered an Error
//       console.error('Error setting up request:', error.message);
//     }
//     return Promise.reject(error);
//   }
// );

export default api;
