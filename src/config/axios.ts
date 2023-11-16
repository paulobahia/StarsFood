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
});

server.interceptors.request.use(
    (config) => {

        const cookies = Cookies.get('jwt');

        if (cookies) {
            const { restaurantId }: JWT = jwtDecode(cookies);
            config.headers.Authorization = `Bearer ${cookies}`;
            config.headers['RestaurantId'] = restaurantId
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export { server, http }