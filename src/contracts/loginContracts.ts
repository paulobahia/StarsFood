import { z } from 'zod';

export const AuthSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
})

export type Auth = z.infer<typeof AuthSchema>;