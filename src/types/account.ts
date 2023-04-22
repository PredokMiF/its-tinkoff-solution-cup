import { z } from 'zod'

export const accountSchema = z.object({
    id: z.number(),
    name: z.string(),
    description: z.string(),
})

export type Account = z.infer<typeof accountSchema>
