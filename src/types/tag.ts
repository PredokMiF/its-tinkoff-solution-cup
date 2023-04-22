import { z } from 'zod'

import { recordTypeSchema } from './recordType'

export const tagSchema = z.object({
    id: z.number(),
    recordType: recordTypeSchema,
    name: z.string(),
    description: z.string(),
})

export type Tag = z.infer<typeof tagSchema>
