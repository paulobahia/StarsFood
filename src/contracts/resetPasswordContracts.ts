import { z } from 'zod';

export const ResetPasswordSchema = z.object({
    email: z.string().email()
})

export type ResetPassword = z.infer<typeof ResetPasswordSchema>;
