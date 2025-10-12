# إعداد قاعدة البيانات - دليل سريع

## 🚀 الطريقة الأسهل (مجانية 100%)

### 1. إنشاء قاعدة بيانات على Supabase

1. اذهب إلى [supabase.com](https://supabase.com)
2. اضغط "Start your project"
3. سجل بحساب GitHub أو Google
4. اضغط "New Project"
5. اختر اسم للمشروع: `velante-db`
6. اختر كلمة مرور قوية
7. اختر المنطقة الأقرب لك (مثل Europe West)
8. اضغط "Create new project"

### 2. الحصول على رابط قاعدة البيانات

1. بعد إنشاء المشروع، اذهب إلى Settings → Database
2. انسخ "Connection string" 
3. سيبدو هكذا:
```
postgresql://postgres:[YOUR-PASSWORD]@db.[PROJECT-ID].supabase.co:5432/postgres
```

### 3. إضافة الرابط للمشروع

1. أنشئ ملف `.env` في جذر المشروع
2. أضف هذا السطر:
```bash
DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@db.[PROJECT-ID].supabase.co:5432/postgres"
```

**مثال:**
```bash
DATABASE_URL="postgresql://postgres:mypassword123@db.abcdefghijk.supabase.co:5432/postgres"
```

### 4. تشغيل قاعدة البيانات

```bash
# إنشاء الجداول
npm run db:push

# إدخال البيانات الأولية
npm run db:seed

# فتح واجهة إدارة البيانات
npm run db:studio
```

## 🏠 الطريقة المحلية (للتطوير)

### تثبيت PostgreSQL على Ubuntu/Debian:

```bash
# تحديث النظام
sudo apt update

# تثبيت PostgreSQL
sudo apt install postgresql postgresql-contrib

# تشغيل الخدمة
sudo systemctl start postgresql
sudo systemctl enable postgresql

# إنشاء قاعدة بيانات
sudo -u postgres createdb velante_db

# إنشاء مستخدم
sudo -u postgres psql
CREATE USER velante_user WITH PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE velante_db TO velante_user;
\q
```

### إضافة الرابط للمشروع:

```bash
# في ملف .env
DATABASE_URL="postgresql://velante_user:your_password@localhost:5432/velante_db"
```

## ☁️ خيارات سحابية أخرى

### 1. Railway (مجاني لحد 1GB)
- اذهب إلى [railway.app](https://railway.app)
- اضغط "Start a New Project"
- اختر "Database" → "PostgreSQL"
- انسخ رابط الاتصال

### 2. PlanetScale (مجاني لحد 5GB)
- اذهب إلى [planetscale.com](https://planetscale.com)
- أنشئ حساب جديد
- أنشئ قاعدة بيانات جديدة
- انسخ رابط الاتصال

### 3. Vercel Postgres (مجاني لحد 1GB)
- اذهب إلى [vercel.com](https://vercel.com)
- في Dashboard اضغط "Storage"
- اختر "Postgres"
- أنشئ قاعدة بيانات جديدة

## 🔧 اختبار الاتصال

```bash
# اختبار الاتصال
npm run db:studio
```

إذا فتحت واجهة Prisma Studio في المتصفح، يعني الاتصال نجح! 🎉

## 📊 مراقبة قاعدة البيانات

### في Supabase:
- اذهب إلى Table Editor
- شاهد جميع الجداول والبيانات
- أضف/عدل/احذف البيانات

### في Prisma Studio:
```bash
npm run db:studio
```
- واجهة رسومية جميلة
- إدارة كاملة للبيانات
- تشغيل استعلامات

## 🚨 نصائح مهمة

1. **لا تضع كلمة المرور في GitHub**
   - استخدم ملف `.env` فقط
   - أضف `.env` لـ `.gitignore`

2. **احتفظ بنسخة احتياطية**
   ```bash
   # تصدير البيانات
   pg_dump DATABASE_URL > backup.sql
   
   # استيراد البيانات
   psql DATABASE_URL < backup.sql
   ```

3. **استخدم متغيرات مختلفة للبيئات**
   ```bash
   # .env.local (للتطوير)
   DATABASE_URL="postgresql://localhost:5432/velante_dev"
   
   # .env.production (للإنتاج)
   DATABASE_URL="postgresql://production-server:5432/velante_prod"
   ```

## 🆘 حل المشاكل الشائعة

### مشكلة الاتصال:
```bash
# تأكد من صحة الرابط
echo $DATABASE_URL

# اختبر الاتصال
npm run db:studio
```

### مشكلة الصلاحيات:
```sql
-- في PostgreSQL
GRANT ALL PRIVILEGES ON DATABASE velante_db TO velante_user;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO velante_user;
```

### مشكلة SSL:
```bash
# أضف ?sslmode=require للرابط
DATABASE_URL="postgresql://user:pass@host:5432/db?sslmode=require"
```
