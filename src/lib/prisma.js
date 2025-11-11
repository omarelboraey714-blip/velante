import { PrismaClient } from '@prisma/client';

const DATABASE_URL =
  'prisma+postgres://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RfaWQiOjEsInNlY3VyZV9rZXkiOiJza19vNWg4M0R1MjNHajJXYjVMaEQtZ3oiLCJhcGlfa2V5IjoiMDFLN0M3SEFBSkpQWEJBMDBDRVFGOUg0Sk4iLCJ0ZW5hbnRfaWQiOiI3MDRhMDU4OWZkY2Q3ZWUyNDc3MjU3OGMyZmE3NWQ4NWYyNjI4NmU5MmU2MjhkYjZjMDU2MTRjY2Y4NWZkOGUzIiwiaW50ZXJuYWxfc2VjcmV0IjoiZGUzZTlmNjAtYTZjNC00MzIxLWJjNmQtMDJlNjRhNTllNDIyIn0.u-4QkMXdv_w00q7jL1zF_waYRzr_6BGmImbxXGlkXkI';
const globalForPrisma = globalThis;

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    datasources: { db: { url: DATABASE_URL } },
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
