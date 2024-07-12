// import axios from "axios";
// export const API_BASE_RULE="http://localhost:5454"
// const jwt=localStorage.getItem("jwt");
// export const api=axios.create({
//     baseURL:API_BASE_RULE,
//     headers:{
//         "Authorization":`Bearer ${jwt}`,
//         "Content-Type":"application/json"
//     }
// })

import axios from 'axios';
// const DEPLOYED='https://pear-poised-hen.cyclic.app/'
const LOCALHOST='http://localhost:5454'

export const API_BASE_URL = LOCALHOST;

const api = axios.create({
  baseURL: API_BASE_URL,
});

const token = localStorage.getItem('jwt');

api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

api.defaults.headers.post['Content-Type'] = 'application/json';

export default api;
