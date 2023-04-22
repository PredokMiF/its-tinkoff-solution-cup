import { z } from 'zod'

import { recordTypeSchema } from './recordType'

export const groupSchema = z.object({
    id: z.number(),
    recordType: recordTypeSchema,
    name: z.string(),
    description: z.string(),
})

export type Group = z.infer<typeof groupSchema>
