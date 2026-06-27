# Landing Page — معشبة الحاج العروسي

Next.js (App Router) + React 19 + Tailwind CSS v4.
صفحة هبوط احترافية متكاملة بالعربية (RTL) مع نموذج طلب (الاسم، الهاتف، المدينة) و صفحة شكر متوافقة مع متطلبات الإعلانات (Facebook, TikTok, Google Pixels).

## 🚀 التشغيل المحلي

1. **تثبيت المكونات**:
   ```bash
   npm install
   ```

2. **تهيئة البيئة المحيطة**:
   انسخ ملف `.env.local.example` إلى اسم جديد `.env.local` واملأ القيم المرجوة:
   ```bash
   cp .env.local.example .env.local
   ```
   املأ قيم معرّفات البيكسل الخاصة بك للتتبع:
   - `NEXT_PUBLIC_SITE_URL`: رابط موقعك المباشر (مثل `https://my-domain.com`).
   - `NEXT_PUBLIC_FB_PIXEL_ID`: معرف بيكسل فيسبوك.
   - `NEXT_PUBLIC_TIKTOK_PIXEL_ID`: معرف بيكسل تيك توك.
   - `NEXT_PUBLIC_GA_ID`: معرف إحصائيات جوجل.

3. **تشغيل الخادم المحلي**:
   ```bash
   npm run dev
   ```
   افتح [http://localhost:3000](http://localhost:3000) في المتصفح لمشاهدة الموقع.

4. **بناء نسخة الإنتاج**:
   ```bash
   npm run build
   ```

## 🖼️ هيكل الصور (في مجلد public/)

تأكد من تواجد الصور التالية في مجلد `public/` بالأسماء المحددة تماماً:
- `logo.png` — شعار العلامة التجارية معشبة الحاج العروسي.
- `background.png` — خلفية نموذج الطلب (أشكال زخرفية إسلامية).
- `product-1.png` — الصورة الرئيسية (البطل / Hero).
- `product-2.png` ... `product-5.png` — صور المنتج الإعلانية والتعريفية وشهادات العملاء بالترتيب.

## 📈 تتبع التحويلات والإعلانات

يتم إطلاق أحداث التحويل تلقائياً على النحو التالي:
- **فيسبوك (FB Pixel)**: يُطلق حدث `PageView` على كافة الصفحات، وحدث `Lead` عند الإرسال الناجح للنموذج وفي صفحة الشكر `/thank-you`.
- **تيك توك (TikTok Pixel)**: يُطلق حدث `SubmitForm` عند إرسال النموذج، وحدث `CompleteRegistration` في صفحة الشكر `/thank-you`.
- **جوجل (gtag)**: يُطلق حدث `generate_lead` عند إرسال النموذج، وحدث `conversion` في صفحة الشكر `/thank-you`.

## 📁 ربط قاعدة البيانات / CRM

يمكنك ربط الطلبات الواردة بـ Google Sheets أو CRM أو Webhook مخصص بتعديل الملف [app/api/order/route.ts](file:///c:/Users/ORIGINAL/Desktop/new%20landing%20aroussi/app/api/order/route.ts).
