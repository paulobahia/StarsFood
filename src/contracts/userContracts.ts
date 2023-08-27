import { z } from 'zod';

export const CreateUserSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(8),
    birthDate: z.date(),
    restaurantCode: z.string(),
    gender: z.string(),
})

export type CreateUser = z.infer<typeof CreateUserSchema>;