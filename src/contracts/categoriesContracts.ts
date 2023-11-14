import { z } from 'zod';

export const CategorySchema = z.object({
    Id: z.number(),
    CategoryName: z.string(),
    ImgUrl: z.string().nullable(),
    CreatedTime: z.date(),
    UpdateTime: z.date().nullable(),
    RestaurantId: z.number(),
    IsAvailable: z.boolean(),
});

export type Category = z.infer<typeof CategorySchema>;

export const CreateCategorySchema = z.object({
    categoryName: z.string(),
    imgUrl: z.string(),
    createdTime: z.string(),
    restaurantId: z.number(),
});

export type CreateCategory = z.infer<typeof CreateCategorySchema>

export const UpdateCategorySchema = z.object({
    id: z.number(),
    categoryName: z.string(),
    updateTime: z.date().nullable(),
    imgUrl: z.string(),
    restaurantId: z.number(),
    isAvailable: z.boolean(),
});

export type UpdateCategory = z.infer<typeof UpdateCategorySchema>
