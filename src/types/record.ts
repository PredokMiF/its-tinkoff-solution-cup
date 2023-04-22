import { z } from 'zod'

import { recordTypeSchema } from './recordType'

export const recordSchema = z.object({
    id: z.number(),
    type: recordTypeSchema,

    accountId: z.number(),
    groupId: z.number().optional(),
    tagListId: z.array(z.number()),

    year: z.number(),
    month: z.number(),
    date: z.number(),

    isFixed: z.boolean(),

    count: z.number(),
    comment: z.string(),
})

export type Record = z.infer<typeof recordSchema>
