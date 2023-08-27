import server from "@/config/axios"

// Auth

export const Login = (payload: any) => {
    return server.post('auth/login', payload).then((e) => e.data)
}

// User 

export const creatUser = (payload: any) => {
    return server.post('users', payload).then((e) => e.data)
}

export const checkEmail = (payload: any) => {
    return server.post('users/check-email', payload).then((e) => e.data)
}