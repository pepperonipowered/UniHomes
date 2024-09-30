
import { z } from "zod"

export const createBranchSchema = z.object({
  name: z.string().min(2).max(50),
  address: z.string().min(2).max(50),
  nearby_places: z.string().min(2).max(50),
  ameneties: z.string().min(2).max(50),
  house_rules: z.string().min(2).max(50),
})
