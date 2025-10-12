import { PrismaClient } from '@prisma/client'

const DATABASE_URL = "postgres://704a0589fdcd7ee24772578c2fa75d85f26286e92e628db6c05614ccf85fd8e3:sk_o5h83Du23Gj2Wb5LhD-gz@db.prisma.io:5432/postgres?sslmode=require";

const globalForPrisma = globalThis

export const prisma = globalForPrisma.prisma || new PrismaClient({
  datasources: { db: { url: DATABASE_URL } },
})

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
