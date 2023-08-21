import { z } from 'zod'

export const authUserFormSchema = z.object({
    email: z.string().nonempty('O e-mail é obrigatório').email('Formato de e-mail inválido'),
    password: z.string().min(8, 'A senha precisa ter no mínimo 8 caracteres')
})