import { z } from 'zod';

export const mongoIdSchema = z.string().regex(/^[0-9a-f]{24}$/);

export const quoteSchema = z.array(
  z.object({
    _id: mongoIdSchema,
    text: z.string().min(1, 'Quote text cannot be empty'),
    author: z.string(),
    creator: z.string(),
    tags: z.array(z.string()),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
);
