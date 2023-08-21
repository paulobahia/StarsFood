import axios from 'axios';
import Cookies from 'js-cookie';

const server = axios.create({
    baseURL: 'http://localhost:5001/api/',
    timeout: 10000,
    withCredentials: true,
});

export default server