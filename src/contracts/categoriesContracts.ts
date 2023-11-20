import { z } from 'zod';

export const CategorySchema = z.object({
    id: z.number(),
    categoryName: z.string(),
    ImgUrl: z.string().nullable(),
    CreatedTime: z.date(),
    UpdateTime: z.date().nullable(),
    RestaurantId: z.number(),
    isAvailable: z.boolean(),
});

export type Category = z.infer<typeof CategorySchema>;

export const CreateCategorySchema = z.object({
    categoryName: z.string().nonempty('A categoria é obrigatório'),
});

export type CreateCategory = z.infer<typeof CreateCategorySchema>

export const UpdateCategorySchema = z.object({
    categoryName: z.string(),
    isAvailable: z.boolean(),
});

export type UpdateCategory = z.infer<typeof UpdateCategorySchema>
