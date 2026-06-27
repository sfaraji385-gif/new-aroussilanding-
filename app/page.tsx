import Image from "next/image";
import Link from "next/link";
import OrderForm from "@/components/OrderForm";
import FloatingBuyButton from "@/components/FloatingBuyButton";

export default function Home() {
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "الباقة الطبيعية — معشبة الحاج العروسي",
    "image": "/product-2.webp",
    "description": "تركيبة طبيعية من أعشاب مدروسة. توصيل مجاني والدفع عند الاستلام.",
    "brand": {
      "@type": "Brand",
      "name": "معشبة الحاج العروسي"
    },
    "offers": {
      "@type": "Offer",
      "price": "249",
      "priceCurrency": "MAD",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <main className="min-h-screen bg-cream text-gray-800 font-sans" dir="rtl">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      {/* 1. Header (Logo on LEFT physically, Brand Name in gold on RIGHT physically under RTL) */}
      <header className="bg-brand-dark px-6 py-4 flex justify-between items-center border-b border-gold/20 shadow-md">
        <span className="text-xl md:text-2xl font-bold text-gold">معشبة الحاج العروسي</span>
        <Image
          src="/logo.webp"
          alt="شعار معشبة الحاج العروسي"
          width={60}
          height={60}
          className="rounded-full"
          priority
        />
      </header>

      {/* Images Section (Edge-to-Edge, Full Bleed, Zero Gap) */}
      <div className="flex flex-col w-full bg-cream">
        {/* OFFER image shown FIRST */}
        <div className="w-full relative">
          <Image
            src="/product-2.webp"
            alt="العرض الخاص 249 درهم"
            width={1024}
            height={1365}
            className="w-full h-auto block"
            priority
          />
        </div>

        {/* Primary Buy Now Button container */}
        <div className="w-full bg-[#f7efe2] py-6 px-4 flex justify-center border-t border-b border-brand/5">
          <a
            href="#order"
            className="w-full max-w-md bg-[#e11d2a] hover:bg-[#c91823] text-white text-2xl font-extrabold py-5 px-8 rounded-2xl shadow-xl transition-all duration-200 animate-gentle-pulse text-center cursor-pointer block"
          >
            اشتري الآن
          </a>
        </div>

        {/* HERO image */}
        <div className="w-full relative">
          <Image
            src="/product-1.webp"
            alt="صحة وحيوية وطرد البرد"
            width={1024}
            height={1365}
            className="w-full h-auto block"
          />
        </div>

        {/* COMPARE image */}
        <div className="w-full relative">
          <Image
            src="/product-3.webp"
            alt="طبيعي مقابل كيماوي"
            width={1024}
            height={1365}
            className="w-full h-auto block"
          />
        </div>

        {/* INGREDIENTS image */}
        <div className="w-full relative">
          <Image
            src="/product-4.webp"
            alt="المكونات الطبيعية"
            width={1024}
            height={1365}
            className="w-full h-auto block"
          />
        </div>

        {/* TESTIMONIALS image */}
        <div className="w-full relative">
          <Image
            src="/product-5.webp"
            alt="آراء العملاء"
            width={1024}
            height={1365}
            className="w-full h-auto block"
          />
        </div>
      </div>

      {/* Offer + Order form section */}
      <section
        id="order"
        className="relative bg-cover bg-center py-16 px-4 border-t border-gold/30"
        style={{ backgroundImage: "url('/background.webp')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-brand-dark/85 backdrop-blur-[2px]" />

        <div className="relative max-w-md mx-auto rounded-3xl bg-white/95 p-6 md:p-8 shadow-2xl border border-gold/40">
          <div className="text-center mb-6 border-b border-gray-150 pb-5">
            <h2 className="text-2xl md:text-3xl font-extrabold text-brand mb-3">
              اطلب الباقة ديالك الآن
            </h2>
            <div className="flex justify-center items-center gap-4">
              <span className="text-gray-400 line-through text-lg font-bold">400 DH</span>
              <span className="text-4xl font-black text-brand bg-gold/10 px-3 py-1.5 rounded-xl border border-gold/20">
                249 DH
              </span>
            </div>
            <p className="text-sm font-bold text-gold mt-1.5">الثمن الجديد (السعر شامل التوصيل)</p>
          </div>

          <div className="bg-brand/5 border border-brand/10 rounded-2xl p-4 mb-6 text-right">
            <p className="text-sm text-brand-dark leading-relaxed font-semibold">
              عمّر الفورم تحت بالاسم، الهاتف، والمدينة باش تطلب الباك ديالك. التوصيل راه فابور تال باب الدار، وكتخلص حتى كتقلب سلعتك!
            </p>
          </div>

          {/* Client Side Order Form */}
          <OrderForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark text-cream/90 text-center px-4 py-10 border-t border-gold/20">
        <div className="max-w-2xl mx-auto space-y-6">
          <p className="text-xs text-white/60 leading-relaxed max-w-xl mx-auto border-b border-white/10 pb-5">
            هذا المنتج منتج طبيعي وليس دواءً، ولا يغني عن استشارة الطبيب المختص.
          </p>
          
          <div className="flex justify-center gap-6 text-sm">
            <Link
              href="/privacy-policy"
              className="hover:text-gold transition font-semibold underline decoration-gold underline-offset-4"
            >
              سياسة الخصوصية
            </Link>
          </div>

          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} معشبة الحاج العروسي. كل الحقوق محفوظة.
          </p>
        </div>
      </footer>

      {/* Floating Sticky Buy Button */}
      <FloatingBuyButton />
    </main>
  );
}
