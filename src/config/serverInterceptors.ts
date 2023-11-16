import { AxiosInstance } from "axios";
import Cookies from 'js-cookie';

export default (server: AxiosInstance) => {
    server.interceptors.request.use(
        (config) => {
            console.log("OPAAAA")
            const cookies = Cookies.get();
            console.log(cookies)
            if (cookies && cookies.token) {
                config.headers.Authorization = `Bearer ${cookies.token}`;
            }

            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );
}