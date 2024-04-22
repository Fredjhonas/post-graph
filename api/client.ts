import axios from 'axios';
const API_URL = process.env.API_URL;

const client = axios.create({
  baseURL: API_URL,
  timeout: 1000,
  maxRedirects: 10,
});

export default client;
