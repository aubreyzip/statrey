import { z } from 'zod'

export const matchesSchema = z.array(z.string());