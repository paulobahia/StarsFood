import { z } from 'zod'

export const checkEmailFormSchema = z.object({
    email: z.string().nonempty('O e-mail é obrigatório').email('Formato de e-mail inválido'),
})

export const registerUserFormSchema = z.object({
    name: z.string().nonempty('O nome é obrigatório'),
    email: z.string().nonempty('O e-mail é obrigatório').email('Formato de e-mail inválido'),
    password: z.string().min(8, 'A senha precisa ter no mínimo 8 caracteres'),
    birthDate: z.string().datetime({ message: 'A data de nascimento é obrigatória' }),
    gender: z.string().nonempty('O gênero é obrigatório'),
    restaurantCode: z.string().nonempty('O Código do restaurante é obrigatório.')
})
