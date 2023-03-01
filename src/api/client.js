// resources: https://www.digitalocean.com/community/tutorials/vuejs-rest-api-axios
import axios from 'axios';

export const HTTP = axios.create({
  baseURL: `http://localhost:3333/api`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});
