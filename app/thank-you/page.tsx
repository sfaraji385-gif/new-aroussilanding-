import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "شكراً لك | تم استلام طلبك",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYou() {
  return (
    <main
      className="min-h-screen flex items-center justify-center bg-cream px-5 py-12"
      dir="rtl"
    >
      {/* Fire conversion tracking events on thank you page load */}
      <Script id="thank-you-conv-events" strategy="afterInteractive">
        {`
          if (window.fbq) {
            window.fbq('track', 'Lead');
          }
          if (window.ttq && window.ttq.track) {
            window.ttq.track('CompleteRegistration');
          }
          if (window.gtag) {
            window.gtag('event', 'conversion');
          }
        `}
      </Script>

      <div className="bg-white border border-brand/10 rounded-3xl p-8 md:p-12 shadow-2xl max-w-md w-full text-center space-y-6">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-50 text-emerald-600 text-5xl shadow-inner select-none animate-bounce">
          ✓
        </div>

        <div className="space-y-3">
          <h1 className="text-2xl md:text-3xl font-extrabold text-brand">
            شكراً لك! تم استلام طلبك بنجاح.
          </h1>
          <p className="text-gray-600 text-sm md:text-base font-semibold">
            غادي نتواصلو معاك قريباً فالهاتف باش نأكدو الطلب.
          </p>
        </div>

        <div className="bg-gold/5 border border-gold/25 rounded-2xl p-4 text-sm text-brand-dark space-y-2 leading-relaxed">
          <p>🚚 التوصيل مجاني تال باب الدار.</p>
          <p>🔒 الدفع كيكون نقداً فاش كتستلم السلعة ديالك وتقلبها.</p>
        </div>

        <div>
          <Link
            href="/"
            className="inline-block w-full rounded-2xl bg-brand py-4 px-6 text-lg font-bold text-white shadow-lg transition duration-200 hover:bg-brand-dark hover:scale-[1.01] active:scale-[0.99]"
          >
            العودة للصفحة الرئيسية
          </Link>
        </div>
      </div>
    </main>
  );
}
