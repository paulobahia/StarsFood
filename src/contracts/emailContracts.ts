import { z } from 'zod';

export const CheckEmailSchema = z.object({
    email: z.string().email()
})

export type CheckEmail = z.infer<typeof CheckEmailSchema>;
