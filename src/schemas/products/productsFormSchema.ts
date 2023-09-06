import { z } from 'zod'

export const infoProductsFormSchema = z.object({
    name: z.string().nonempty({ message: 'O nome do produto é obrigatório' }),
    category: z.string().nonempty({ message: 'A categoria do produto é obrigatória' }),
    type: z.string().nonempty({ message: 'O tipo do produto é obrigatório' }),
    description: z.string().nonempty({ message: 'A descrição do produto é obrigatória' }),
})