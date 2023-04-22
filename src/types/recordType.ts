import { z } from 'zod'

export const recordTypeSchema = z.union([
    z.literal('debet'),
    z.literal('credit'),
])
export type RecordType = z.infer<typeof recordTypeSchema>
