import { server, http } from "@/config/axios"
import { Auth, AuthSchema, Category, CheckEmail, CheckEmailSchema, CreateCategory, CreateCategorySchema, CreateUser, CreateUserSchema, ResetPassword, ResetPasswordSchema, UpdateCategory, UpdateCategorySchema } from "@/contracts";

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

// Categorys

export const getAllCategorys = async () => {
    return http.get('GetAllCategories').then((i) => i.data)
}

export const createCategory = async (payload: CreateCategory) => {
    const validateData = CreateCategorySchema.parse(payload)
    return http.post('CreateCategory', validateData).then((i) => i.data)
}

export const deleteCategory = async (id: number) => {
    return http.delete('DeleteCategory/' + id).then((i) => i.data)
}

export const updateCategory = async (id: number, payload: UpdateCategory) => {
    const validateData = UpdateCategorySchema.parse(payload)
    return http.patch('UpdateCategory/' + id, validateData).then((i) => i.data)
}