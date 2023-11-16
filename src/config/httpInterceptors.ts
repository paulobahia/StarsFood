import { AxiosInstance } from "axios";
import Cookies from 'js-cookie';

export default (http: AxiosInstance) => {
    http.interceptors.request.use(
        (config) => {
            console.log("OPAAAA2")
            const cookies = Cookies.get();

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