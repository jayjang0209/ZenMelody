import { PrismaClient } from '@prisma/client'
import { decl } from 'postcss'

declare global {
  var prisma: PrismaClient | undefined
}

const prismadb = global.prisma || new PrismaClient()

if (process.env.NODE_ENV === 'development') {
  global.prisma = prisma
}

export default prismadb