import server from "@/config/axios"
import { Auth, AuthSchema, CheckEmail, CheckEmailSchema, CreateUser, CreateUserSchema, ResetPassword, ResetPasswordSchema } from "@/contracts";

// Auth

export const Login = async (payload: Auth) => {
    const validateData = AuthSchema.parse(payload)
    return server.post('auth/login', validateData)
}

// User 

export const creatUser = async (payload: CreateUser) => {
    const validateData = CreateUserSchema.parse(payload);
    return server.post('users', validateData)
}

export const checkEmail = async (payload: CheckEmail) => {
    const validateData = CheckEmailSchema.parse(payload)
    return server.post('users/check-email', validateData)
}

export const resetPassword = async (payload: ResetPassword) => {
    const validatedata = ResetPasswordSchema.parse(payload)
    return server.post('users/reset-password', validatedata)
}