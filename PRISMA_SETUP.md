# إعداد Prisma لقاعدة البيانات - مشروع Velante

## نظرة عامة

تم إنشاء Prisma schema شامل لمشروع Velante بناءً على جميع الجداول والبيانات المستخدمة في المشروع. هذا الإعداد يوفر بديلاً قوياً لـ Supabase مع ميزات إضافية.

## الملفات المُنشأة

### 1. Prisma Schema
- `prisma/schema.prisma` - تعريف جميع الجداول والعلاقات

### 2. Prisma Client
- `src/lib/prisma.js` - تكوين Prisma client

### 3. Seed Data
- `prisma/seed.js` - البيانات الأولية للمشروع

### 4. API Routes Examples
- `src/app/api/contact-prisma/route.js` - مثال لـ contact API
- `src/app/api/testimonials-prisma/route.js` - مثال لـ testimonials API
- `src/app/api/projects-prisma/route.js` - مثال لـ projects API

## الجداول المُعرّفة

### الجداول الأساسية
1. **Contact** - جهات الاتصال
2. **Project** - المشاريع
3. **Client** - العملاء
4. **Testimonial** - التقييمات
5. **TeamMember** - أعضاء الفريق
6. **Value** - القيم
7. **Stat** - الإحصائيات
8. **Service** - الخدمات
9. **Package** - الباقات
10. **FAQ** - الأسئلة الشائعة
11. **NewsletterSubscription** - اشتراكات النشرة الإخبارية

### جداول إدارة النظام
12. **User** - المستخدمين (للوحة التحكم)
13. **Session** - جلسات المستخدمين
14. **ActivityLog** - سجل الأنشطة

## الإعداد والتشغيل

### 1. إعداد متغيرات البيئة
```bash
# أضف إلى ملف .env
DATABASE_URL="postgresql://username:password@localhost:5432/velante_db?schema=public"
```

### 2. تثبيت التبعيات
```bash
npm install
```

### 3. إنشاء قاعدة البيانات
```bash
# إنشاء قاعدة البيانات
npx prisma db push

# أو استخدام migrations
npx prisma migrate dev --name init
```

### 4. إنشاء Prisma Client
```bash
npm run db:generate
```

### 5. إدخال البيانات الأولية
```bash
npm run db:seed
```

## الأوامر المتاحة

```bash
# إنشاء Prisma Client
npm run db:generate

# دفع التغييرات إلى قاعدة البيانات
npm run db:push

# سحب التغييرات من قاعدة البيانات
npm run db:pull

# إنشاء migration جديد
npm run db:migrate

# تطبيق migrations في الإنتاج
npm run db:migrate:prod

# إدخال البيانات الأولية
npm run db:seed

# فتح Prisma Studio
npm run db:studio

# إعادة تعيين قاعدة البيانات
npm run db:reset
```

## الميزات الجديدة

### 1. Type Safety
- جميع الاستعلامات محمية بنظام الأنواع
- IntelliSense كامل في VS Code

### 2. العلاقات
- علاقات واضحة بين الجداول
- استعلامات محسنة مع JOIN

### 3. التحقق من البيانات
- استخدام Zod للتحقق من صحة البيانات
- رسائل خطأ واضحة باللغة العربية

### 4. إدارة الجلسات
- نظام جلسات آمن
- تتبع الأنشطة

### 5. لوحة التحكم
- إدارة المستخدمين
- سجل الأنشطة
- إحصائيات مفصلة

## الانتقال من Supabase

### الخطوات المطلوبة:

1. **إعداد قاعدة البيانات**
   ```bash
   npm run db:push
   npm run db:seed
   ```

2. **استيراد البيانات الموجودة**
   - تصدير البيانات من Supabase
   - تحويلها إلى تنسيق Prisma
   - استيرادها إلى قاعدة البيانات الجديدة

3. **تحديث API Routes**
   - استبدال Supabase client بـ Prisma client
   - تحديث الاستعلامات
   - اختبار جميع endpoints

4. **تحديث Environment Variables**
   - إضافة DATABASE_URL
   - الاحتفاظ بـ Supabase variables للانتقال التدريجي

## أمثلة الاستخدام

### إنشاء جهة اتصال جديدة
```javascript
const contact = await prisma.contact.create({
  data: {
    fullName: "أحمد محمد",
    email: "ahmed@example.com",
    phone: "01234567890",
    service: "تصميم هوية بصرية",
    budget: "1000-2000",
    message: "أريد تصميم هوية بصرية لشركتي"
  }
});
```

### جلب المشاريع مع التقييمات
```javascript
const projects = await prisma.project.findMany({
  include: {
    testimonials: {
      include: {
        client: true
      }
    }
  }
});
```

### البحث في التقييمات
```javascript
const testimonials = await prisma.testimonial.findMany({
  where: {
    category: "branding",
    rating: {
      gte: 4
    }
  },
  include: {
    client: true
  }
});
```

## الأمان

- جميع كلمات المرور مشفرة باستخدام bcrypt
- نظام أدوار المستخدمين
- تتبع جميع الأنشطة
- حماية من SQL Injection

## الأداء

- فهرسة محسنة للاستعلامات السريعة
- استعلامات محسنة مع select
- تخزين مؤقت للبيانات الثابتة
- ضغط الاستجابات

## الدعم

لأي استفسارات أو مشاكل، يرجى مراجعة:
- [Prisma Documentation](https://www.prisma.io/docs)
- [Prisma GitHub](https://github.com/prisma/prisma)
- ملفات الأمثلة في المشروع
