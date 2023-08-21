import server from "@/config/axios"

export const Login = (payload: any) => {
    return server.post('auth/login', payload)
}