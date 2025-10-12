// tests/database.connection.test.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

describe('Database Connection', () => {
  // نتأكد من قطع الاتصال بعد انتهاء جميع الاختبارات في هذا الملف
  afterAll(async () => {
    await prisma.$disconnect();
  });

  it('should connect to the database and execute a simple query', async () => {
    try {
      // prisma.$connect() يتصل بشكل ضمني، لكن يمكننا استدعاؤه بشكل صريح
      await prisma.$connect();

      // أفضل طريقة للتأكد من أن الاتصال يعمل هي تنفيذ استعلام بسيط
      const result = await prisma.$queryRaw`SELECT 1`;
      
      // نتوقع أن تكون النتيجة موجودة (ليست null أو undefined)
      expect(result).toBeTruthy();
      
      console.log('Database connection test passed successfully.');

    } catch (error) {
      // إذا حدث خطأ، سيتم إيقاف الاختبار وإظهار رسالة الخطأ
      console.error('Database connection test failed:', error);
      throw new Error(`Failed to connect to the database: ${error.message}`);
    }
  });
});
