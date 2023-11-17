import { z } from 'zod';
import { CategorySchema } from './index'

export const ProductSchema = z.object({
    id: z.number(),
    name: z.string(),
    description: z.string(),
    categoryId: z.number(),
    imgUrl: z.string().nullable(),
    createdTime: z.date(),
    updateTime: z.date().nullable(),
    restaurantId: z.number(),
    isAvailable: z.boolean(),
    category: CategorySchema
})

export type Product = z.infer<typeof ProductSchema>;

export const CreateProductSchema = z.object({
    name: z.string(),
    description: z.string(),
    categoryId: z.number(),
    imgUrl: z.string().nullable(),
});

export type CreateProduct = z.infer<typeof CreateProductSchema>