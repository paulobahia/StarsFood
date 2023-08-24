import { z } from 'zod'

export const resetPasswordFormSchema = z.object({
    email: z.string().nonempty('O e-mail é obrigatório').email('Formato de e-mail inválido'),
})