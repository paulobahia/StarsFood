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

export const CreateProductCommandSchema = z.object({
    name: z.string(),
    description: z.string(),
    categoryId: z.number(),
    imgUrl: z.string().nullable(),
});

export const CreateVariationCommandSchema = z.object({
    description: z.string(),
    value: z.number(),
});

export const CreateProductSchema = z.object({
    createProductCommand: CreateProductCommandSchema,
    createVariationCommandList: z.array(CreateVariationCommandSchema),
});

export type CreateProduct = z.infer<typeof CreateProductSchema>

export const UpdateProductSchema = z.object({
    id: z.number(),
    name: z.string(),
    description: z.string(),
    imgUrl: z.string().nullable(),
    categoryId: z.number(),
    isAvailable: z.boolean(),
});

export type UpdateProduct = z.infer<typeof UpdateProductSchema>