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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "الباقة الطبيعية الثلاثية | معشبة الحاج العروسي",
  description:
    "تركيبة طبيعية 100% لاسترجاع الحيوية والنشاط وطرد البرد. التوصيل مجاني لجميع المدن المغربية والدفع عند الاستلام.",
  keywords: [
    "معشبة الحاج العروسي",
    "البرد القديم",
    "العسل الحر",
    "علاج طبيعي",
    "المغرب",
    "حيوية ونشاط"
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "ar_MA",
    title: "الباقة الطبيعية الثلاثية | معشبة الحاج العروسي",
    description: "تركيبة طبيعية 100% لاسترجاع الحيوية والنشاط وطرد البرد.",
    images: [
      {
        url: "/product-2.webp",
        width: 1024,
        height: 1365,
        alt: "الباقة الطبيعية الثلاثية",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "الباقة الطبيعية الثلاثية | معشبة الحاج العروسي",
    description: "تركيبة طبيعية 100% لاسترجاع الحيوية والنشاط وطرد البرد.",
    images: ["/product-2.webp"],
  },
};

export const viewport: Viewport = {
  themeColor: "#6b1f2a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
