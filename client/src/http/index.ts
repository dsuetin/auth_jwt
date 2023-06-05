import axios from 'axios';

export const API_URL = `http://localhost:7000/api`;

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL,

});

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    console.log('config.headers.Authorization998987', config.headers.Authorization)
    return config;
});

export default $api;

// const authInterceptor = (config) => {
//     const newConfig = config;
//     newConfig.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
//     return newConfig;
//   };
  
//   $authHost.interceptors.request.use(authInterceptor);
  
//   export {
//     $host,
//     $authHost,
//   };