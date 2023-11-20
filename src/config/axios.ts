import axios, { AxiosInstance } from 'axios';
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";

type JWTServe = {
    email: string,
    role: string,
    restaurantId: string
}

type JWTHttp = {
    sub: string
}

const server = axios.create({
    baseURL: 'http://localhost:5001/api/',
    withCredentials: true,
});

const http = axios.create({
    baseURL: 'https://localhost:7100/api/',
    withCredentials: true,
});

const cookiesServe = Cookies.get('TokenServer');
const cookiesHttp = Cookies.get('JwtToken')

if (cookiesServe) {
    const { restaurantId }: JWTServe = jwtDecode(cookiesServe);

    server.defaults.headers['RestaurantId'] = restaurantId
}

if (cookiesHttp) {
    const { sub }: JWTHttp = jwtDecode(cookiesHttp);
    http.defaults.headers['X-RestaurantId'] = 1
}

server.interceptors.request.use(
    (config) => {

        if (cookiesServe) {
            config.headers.Authorization = `Bearer ${cookiesServe}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

http.interceptors.request.use(
    (config) => {

        if (cookiesHttp) {
            config.headers.Authorization = `Bearer ${cookiesHttp}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export { server, http }