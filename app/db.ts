import { PrismaClient } from '@prisma/client'
const db = new PrismaClient()

export default db
export * from '@prisma/client'
