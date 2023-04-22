import { z } from 'zod'

export const fixRangeSchema = z.object({
    from: z.number(),
    to: z.string(),
})

export type FixRange = z.infer<typeof fixRangeSchema>
