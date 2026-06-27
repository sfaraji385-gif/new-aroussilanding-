# Landing Page — معشبة الحاج العروسي (Next.js + Tailwind)

<callout icon="📦">**كيفاش تستعمل هاد الملف**

</callout>

ما عنديش أداة باش نصاوب lik ZIP باش تحملو directly، لكن هنا عندك **المشروع كامل** (كل ملف ب code block). دير هاد الخطوات:

1. صايب فولدر جديد f جهازك، مثلا `maachaba-landing`.
2. صايب الملفات بنفس الأسماء والمسارات اللي تحت، ولصق فيهم الكود.
3. حط الصور ديالك f فولدر `public/` (شوف الجدول ديال تسمية الصور تحت).
4. سير l terminal: `npm install` من بعد `npm run dev`.
5. باش تخرجو online: `npm run build` ثم deploy على Vercel.</callout>

<aside>
⚠️

**ملاحظة مهمة (compliance):** خليت النص ديالك as-is كيف طلبتي. لكن Google/Facebook/TikTok Ads كيرفضو الادعاءات الطبية القاطعة و الشهادات. زدت غير سطر disclaimer صغير ف footer (ماشي دواء / استشير الطبيب) باش يطلع شي حظ يعدي ل review. تقدر تحيدو إلا بغيتي.

</aside>

## 🖼️ تسمية الصور (حطهم f `public/`)

| الملف اللي عندك | سمّيه f public/ | فين كيتعرض |
| --- | --- | --- |
| logo.png | `logo.png` | Header (فوق) |
| backrond.png | `background.png` | خلف الفورم (تحت) |
| image 2.png | `product-1.png` | Hero (فوق) |
| image 1+.png | `product-2.png` | العرض 249 DH |
| image 3.png | `product-3.png` | طبيعي مقابل كيماوي |
| image 4.png | `product-4.png` | المكونات |
| image 5+.png | `product-5.png` | الشهادات |

---

## 📁 بنية المشروع

```
maachaba-landing/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── sitemap.ts
│   ├── robots.ts
│   ├── api/order/route.ts
│   ├── thank-you/page.tsx
│   └── privacy-policy/page.tsx
├── components/
│   ├── Analytics.tsx
│   └── OrderForm.tsx
├── types/global.d.ts
├── public/  (logo.png, background.png, product-1..5.png)
├── package.json
├── postcss.config.mjs
├── next.config.mjs
├── tsconfig.json
├── .env.local.example
└── README.md
```

---

## 1) package.json

```json
{
  "name": "maachaba-landing",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^15.3.0",
    "react": "^19.1.0",
    "react-dom": "^19.1.0"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4.1.5",
    "tailwindcss": "^4.1.5",
    "typescript": "^5.6.3",
    "@types/node": "^22.9.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0"
  }
}
```

## 2) postcss.config.mjs

```jsx
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

## 3) next.config.mjs

```jsx
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
```

## 4) tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

## 5) types/global.d.ts

```tsx
export {};

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    ttq?: { track?: (...args: unknown[]) => void; page?: () => void; load?: (id: string) => void };
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}
```

## 6) .env.local.example

```bash
# بدّل القيم بديالك من بعد سمّي الملف .env.local
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_FB_PIXEL_ID=
NEXT_PUBLIC_TIKTOK_PIXEL_ID=
NEXT_PUBLIC_GA_ID=
```

## 7) app/globals.css

```css
@import "tailwindcss";

@theme {
  --color-brand: #6b1f2a;
  --color-brand-dark: #4a141c;
  --color-gold: #c9a24b;
  --color-cream: #f7efe2;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-cairo), system-ui, sans-serif;
  background-color: var(--color-cream);
  color: #2b2b2b;
}
```

## 8) app/layout.tsx

```tsx
import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/Analytics";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"),
  title: "الباقة الطبيعية | معشبة الحاج العروسي",
  description:
    "باقة طبيعية 100% من أعشاب مدروسة لدعم النشاط والحيوية. التوصيل مجاني والدفع عند الاستلام لجميع المدن المغربية.",
  keywords: ["أعشاب طبيعية", "الحاج العروسي", "المغرب", "الدفع عند الاستلام", "توصيل مجاني"],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "ar_MA",
    title: "الباقة الطبيعية | معشبة الحاج العروسي",
    description: "تركيبة طبيعية لاسترجاع الحيوية. توصيل مجاني والدفع عند الاستلام.",
    images: [{ url: "/product-2.png", width: 1024, height: 1365 }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { themeColor: "#6b1f2a" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

## 9) components/Analytics.tsx

```tsx
"use client";

import Script from "next/script";

const FB = process.env.NEXT_PUBLIC_FB_PIXEL_ID;
const TT = process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID;
const GA = process.env.NEXT_PUBLIC_GA_ID;

export default function Analytics() {
  return (
    <>
      {GA && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA}');
          `}</Script>
        </>
      )}

      {FB && (
        <Script id="fb-pixel" strategy="afterInteractive">{`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window,document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${FB}');
          fbq('track', 'PageView');
        `}</Script>
      )}

      {TT && (
        <Script id="tiktok-pixel" strategy="afterInteractive">{`
          !function (w, d, t) {
            w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];
            ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"];
            ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};
            for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);
            ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e};
            ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=d.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=d.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};
            ttq.load('${TT}');
            ttq.page();
          }(window, document, 'ttq');
        `}</Script>
      )}
    </>
  );
}
```

## 10) components/OrderForm.tsx

```tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const CITIES = [
  "الدار البيضاء", "الرباط", "مراكش", "فاس", "طنجة", "أكادير", "مكناس",
  "وجدة", "القنيطرة", "تطوان", "سلا", "المحمدية", "خريبكة", "بني ملال",
  "الجديدة", "الناظور", "تازة", "سطات", "العرائش", "خنيفرة", "مدينة أخرى",
];

export default function OrderForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", phone: "", city: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!form.name.trim() || !form.phone.trim() || !form.city) {
      setError("المرجو ملء جميع الخانات");
      return;
    }
    const phoneOk = /^(\+212|212|0)?[5-7][0-9]{8}$/.test(form.phone.replace(/\s/g, ""));
    if (!phoneOk) {
      setError("المرجو إدخال رقم هاتف مغربي صحيح");
      return;
    }

    setLoading(true);
    try {
      await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      window.fbq?.("track", "Lead");
      window.ttq?.track?.("SubmitForm");
      window.gtag?.("event", "generate_lead");

      router.push("/thank-you");
    } catch {
      setError("وقع خطأ، حاول مرة أخرى");
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 text-right">
      <div>
        <label className="block mb-1 font-semibold text-sm">الاسم الكامل</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="كتب سميتك"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[var(--color-brand)] focus:outline-none"
        />
      </div>
      <div>
        <label className="block mb-1 font-semibold text-sm">رقم الهاتف</label>
        <input
          name="phone"
          type="tel"
          inputMode="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder="06xxxxxxxx"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[var(--color-brand)] focus:outline-none"
        />
      </div>
      <div>
        <label className="block mb-1 font-semibold text-sm">المدينة</label>
        <select
          name="city"
          value={form.city}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 bg-white focus:border-[var(--color-brand)] focus:outline-none"
        >
          <option value="">اختر المدينة</option>
          {CITIES.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      {error && <p className="text-red-600 text-sm font-semibold">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-[var(--color-brand)] py-4 text-lg font-extrabold text-white shadow-lg transition hover:bg-[var(--color-brand-dark)] disabled:opacity-60"
      >
        {loading ? "كنصيفطو الطلب..." : "اطلب الآن — الدفع عند الاستلام"}
      </button>
      <p className="text-center text-xs text-gray-500">🚚 التوصيل مجاني · 🔒 خلّص فاش توصلك السلعة</p>
    </form>
  );
}
```

## 11) app/api/order/route.ts

```tsx
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, city } = body ?? {};

    if (!name || !phone || !city) {
      return NextResponse.json({ ok: false, error: "missing fields" }, { status: 400 });
    }

    // TODO: ربط مع Google Sheets / CRM / Webhook ديالك
    // مثال: await fetch(process.env.WEBHOOK_URL!, { method: 'POST', body: JSON.stringify({ name, phone, city }) })
    console.log("طلب جديد:", { name, phone, city, date: new Date().toISOString() });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
```

## 12) app/page.tsx

```tsx
import Image from "next/image";
import Link from "next/link";
import OrderForm from "@/components/OrderForm";

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "الباقة الطبيعية — معشبة الحاج العروسي",
  image: "/product-2.png",
  description: "تركيبة طبيعية من أعشاب مدروسة. توصيل مجاني والدفع عند الاستلام.",
  brand: { "@type": "Brand", name: "معشبة الحاج العروسي" },
  offers: {
    "@type": "Offer",
    price: "249",
    priceCurrency: "MAD",
    availability: "https://schema.org/InStock",
  },
};

const jsonLd = { __html: JSON.stringify(productJsonLd) };
const sectionStyle = { backgroundImage: "url('/background.png')" };

export default function Home() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd}
      />

      {/* Header + Logo */}
      <header className="bg-[var(--color-brand-dark)] py-4 flex justify-center">
        <Image src="/logo.png" alt="معشبة الحاج العروسي" width={84} height={84} className="rounded-full" priority />
      </header>

      {/* Hero */}
      <section className="flex justify-center bg-[var(--color-brand-dark)]">
        <Image src="/product-1.png" alt="صحة البروستاتا" width={1024} height={1365} className="w-full max-w-xl h-auto" priority />
      </section>

      {/* Copy */}
      <section className="px-5 py-10 max-w-2xl mx-auto text-center leading-loose">
        <h1 className="text-2xl md:text-3xl font-extrabold text-[var(--color-brand)] mb-6">
          حسيتي براسك ديما عيان، فشلان، ونفسك باردة؟ 🌿
        </h1>
        <p className="mb-4 text-lg">
          السبب غالبا كيكون من &laquo;البرد القديم&raquo; لي كيتراكم وكيأثر على النشاط اليومي ديالك!
        </p>
        <p className="mb-6 text-lg">
          في معشبة تافراوت، جبنا ليك الباك الثلاثي الطبيعي لي كيعتبر أقوى تركيبة لاسترجاع الحيوية وطرد البرد بصفة نهائية، ومكون من 3 منتوجات مدروسة:
        </p>
        <ul className="space-y-3 text-lg text-right max-w-md mx-auto mb-6">
          <li>🍯 نصف كيلو من العسل الحر مخلط بأعشاب طبيعية مقوية.</li>
          <li>💧 زيت التدليك الطبيعي لتنشيط الدورة الدموية.</li>
          <li>🍵 منقوع التنقية لتنظيف الجسم من السموم.</li>
        </ul>
        <p className="mb-2">✅ كل عشبة تدرسات بعناية باش تعطيك نتيجة مضمونة.</p>
        <p className="mb-6">✅ تركيبة آمنة وخالية من أي مواد كيماوية.</p>
        <p className="text-xl font-bold text-[var(--color-brand)]">تهلا فصحتك ورجع النشاط ديالك!</p>
      </section>

      {/* Product images in order */}
      <section className="max-w-xl mx-auto space-y-6 px-3">
        {[2, 3, 4, 5].map((n) => (
          <Image
            key={n}
            src={`/product-${n}.png`}
            alt={`المنتج ${n}`}
            width={1024}
            height={1365}
            className="w-full h-auto rounded-xl shadow-md"
          />
        ))}
      </section>

      {/* Trust badges */}
      <section className="max-w-2xl mx-auto px-5 py-10 grid gap-3 text-center text-lg font-semibold">
        <div className="rounded-xl bg-white shadow p-3">⭐ جودة أصلية ومضمونة 100%</div>
        <div className="rounded-xl bg-white shadow p-3">🚚 التوصيل مجاني لجميع المدن المغربية</div>
        <div className="rounded-xl bg-white shadow p-3">🔒 الدفع عند الاستلام</div>
      </section>

      {/* Offer + Form with background */}
      <section
        id="order"
        className="relative bg-cover bg-center py-14 px-5"
        style={sectionStyle}
      >
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative max-w-md mx-auto rounded-2xl bg-white/95 p-6 shadow-2xl">
          <h2 className="text-center text-2xl font-extrabold text-[var(--color-brand)] mb-1">
            اطلب الباقة ديالك دابا
          </h2>
          <div className="text-center mb-5">
            <span className="text-gray-400 line-through text-xl ml-2">400 DH</span>
            <span className="text-4xl font-extrabold text-[var(--color-brand)]">249 DH</span>
            <p className="text-sm text-gray-600">الثمن الجديد</p>
          </div>
          <OrderForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--color-brand-dark)] text-cream/90 text-center text-sm px-5 py-8 space-y-3">
        <p className="text-xs text-white/70 max-w-xl mx-auto">
          هذا المنتج منتج طبيعي وليس دواءً، ولا يغني عن استشارة الطبيب المختص.
        </p>
        <div className="flex justify-center gap-4 text-white/90">
          <Link href="/privacy-policy" className="underline">سياسة الخصوصية</Link>
        </div>
        <p className="text-white/60">© {new Date().getFullYear()} معشبة الحاج العروسي</p>
      </footer>
    </main>
  );
}
```

## 13) app/thank-you/page.tsx

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "شكراً لك | تم استلام طلبك",
  robots: { index: false, follow: false },
};

export default function ThankYou() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[var(--color-cream)] px-5">
      <Script id="conv" strategy="afterInteractive">{`
        if (window.fbq) fbq('track','Lead');
        if (window.ttq) ttq.track('CompleteRegistration');
        if (window.gtag) gtag('event','conversion');
      `}</Script>
      <div className="text-center max-w-md">
        <div className="text-6xl mb-4">✅</div>
        <h1 className="text-2xl font-extrabold text-[var(--color-brand)] mb-3">
          شكراً لك! تم استلام طلبك بنجاح
        </h1>
        <p className="text-gray-700 mb-6">
          غادي نتواصلو معاك قريباً فالهاتف باش نأكدو الطلب. التوصيل مجاني والدفع عند الاستلام.
        </p>
        <Link
          href="/"
          className="inline-block rounded-xl bg-[var(--color-brand)] px-6 py-3 font-bold text-white"
        >
          العودة للصفحة الرئيسية
        </Link>
      </div>
    </main>
  );
}
```

## 14) app/privacy-policy/page.tsx

```tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "سياسة الخصوصية",
  description: "سياسة الخصوصية الخاصة بموقع معشبة الحاج العروسي.",
};

export default function PrivacyPolicy() {
  return (
    <main className="max-w-2xl mx-auto px-5 py-12 leading-loose text-right">
      <h1 className="text-3xl font-extrabold text-[var(--color-brand)] mb-6">سياسة الخصوصية</h1>

      <h2 className="text-xl font-bold mt-6 mb-2">المعلومات التي نجمعها</h2>
      <p>نجمع المعلومات التي تقدمها طواعية عند ملء نموذج الطلب: الاسم الكامل، رقم الهاتف، والمدينة. نستعمل هذه المعلومات حصرياً لتأكيد الطلب وتوصيله إليك.</p>

      <h2 className="text-xl font-bold mt-6 mb-2">استعمال المعلومات</h2>
      <p>تُستعمل بياناتك من أجل: معالجة طلبك، التواصل معك بخصوص الطلب، وتحسين خدماتنا. لا نبيع بياناتك الشخصية لأي طرف ثالث.</p>

      <h2 className="text-xl font-bold mt-6 mb-2">ملفات تعريف الارتباط (Cookies) وأدوات التتبع</h2>
      <p>قد نستعمل أدوات مثل Facebook Pixel وTikTok Pixel وGoogle Analytics لقياس أداء حملاتنا الإعلانية وتحسين تجربة الزيارة. يمكنك تعطيل الكوكيز من إعدادات متصفحك.</p>

      <h2 className="text-xl font-bold mt-6 mb-2">حماية البيانات</h2>
      <p>نتخذ تدابير معقولة لحماية معلوماتك من الوصول غير المصرح به أو الإفشاء.</p>

      <h2 className="text-xl font-bold mt-6 mb-2">حقوقك</h2>
      <p>يحق لك طلب الاطلاع على بياناتك أو تعديلها أو حذفها في أي وقت عبر التواصل معنا.</p>

      <h2 className="text-xl font-bold mt-6 mb-2">إخلاء مسؤولية</h2>
      <p>المنتجات المعروضة منتجات طبيعية وليست أدوية، ولا تغني عن استشارة الطبيب المختص.</p>

      <h2 className="text-xl font-bold mt-6 mb-2">التواصل</h2>
      <p>لأي استفسار حول الخصوصية، تواصل معنا عبر معلومات الاتصال المتوفرة في الموقع.</p>

      <p className="mt-8">
        <Link href="/" className="text-[var(--color-brand)] underline">العودة للصفحة الرئيسية</Link>
      </p>
    </main>
  );
}
```

## 15) app/robots.ts

```tsx
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/thank-you", "/api/"] },
    sitemap: `${base}/sitemap.xml`,
  };
}
```

## 16) app/sitemap.ts

```tsx
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/privacy-policy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
```

## 17) [README.md](http://README.md)

```markdown
# Landing Page — معشبة الحاج العروسي

Next.js (App Router) + React 19 + Tailwind CSS v4. صفحة هبوط بالعربية (RTL) مع فورم (الاسم / الهاتف / المدينة) و صفحة شكر.

## التشغيل
1. `npm install`
2. نسخ `.env.local.example` إلى `.env.local` وملء القيم.
3. `npm run dev` ثم افتح http://localhost:3000

## الصور (ضعها في public/)
- logo.png — الشعار
- background.png — خلفية الفورم
- product-1.png ... product-5.png — صور المنتج بالترتيب

## متطلبات الإعلانات
- صفحة سياسة الخصوصية: /privacy-policy
- Pixels: Facebook / TikTok / Google عبر متغيرات .env
- أحداث التحويل تُطلق عند إرسال الفورم وفي صفحة /thank-you
- sitemap.xml و robots.txt تلقائيين

## النشر (Vercel)
1. ارفع المشروع إلى GitHub.
2. استورده في Vercel.
3. أضف نفس متغيرات البيئة في إعدادات Vercel.
4. Deploy.

## ربط الطلبات
عدّل app/api/order/route.ts لربط الطلبات بـ Google Sheets أو CRM أو Webhook.
```

---

<aside>
✅

**خطوات سريعة:** صايب الملفات → `npm install` → حط الصور f `public/` → `npm run dev`. باش يخدمو l pixels عمّر `.env.local`. باش تنشرو online استعمل Vercel.

</aside>