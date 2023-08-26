import { z } from 'zod'

export const checkEmailFormSchema = z.object({
    email: z.string().nonempty('O e-mail é obrigatório').email('Formato de e-mail inválido'),
})

export const registerUserFormSchema = z.object({
    name: z.string().nonempty('O nome é obrigatório'),
    email: z.string({required_error: 'O e-mail é obrigatório'}).email('Formato de e-mail inválido'),
    password: z.string({required_error: 'O senha é obrigatório'}).min(8, 'A senha precisa ter no mínimo 8 caracteres'),
    birthDate: z.date({ required_error: 'A data de nascimento é obrigatória' }),
    restaurantCode: z.string({ required_error: 'O Código do restaurante é obrigatório.' })
})


export const genderUserFormSchema = z.object({
    gender: z.string().nonempty('O gênero é obrigatório'),
})
