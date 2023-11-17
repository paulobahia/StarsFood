import axios, { AxiosInstance } from 'axios';
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";

type JWT = {
    email: string,
    role: string,
    restaurantId: string
}

const server = axios.create({
    baseURL: 'http://localhost:5001/api/',
    withCredentials: true,
});

const http = axios.create({
    baseURL: 'https://localhost:7100/api/',
    withCredentials: true,
});

const cookies = Cookies.get('TokenServer');

if (cookies) {
    const { restaurantId }: JWT = jwtDecode(cookies);

    http.defaults.headers['X-RestaurantId'] = restaurantId
    server.defaults.headers['RestaurantId'] = restaurantId
}

server.interceptors.request.use(
    (config) => {

        if (cookies) {
            config.headers.Authorization = `Bearer ${cookies}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

server.interceptors.request.use(
    (config) => {

        if (cookies) {
            const { restaurantId }: JWT = jwtDecode(cookies);
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export { server, http }