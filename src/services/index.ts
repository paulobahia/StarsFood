import server from "@/config/axios"

export const Login = (payload: any) => {
    return server.post('auth/login', payload).then((e) => e.data)
}

export const checkEmail = (payload: any) => {
    return server.get('users/check-email', payload).then((e) => e.data)
}