import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "سياسة الخصوصية | معشبة الحاج العروسي",
  description: "سياسة الخصوصية وملفات تعريف الارتباط الخاصة بمعشبة الحاج العروسي.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicy() {
  return (
    <main
      className="min-h-screen bg-cream text-gray-800 px-5 py-12 md:py-16 text-right"
      dir="rtl"
    >
      <div className="max-w-2xl mx-auto bg-white border border-brand/10 p-6 md:p-10 rounded-3xl shadow-xl space-y-8">
        <h1 className="text-3xl font-extrabold text-brand border-b border-gold/30 pb-4">
          سياسة الخصوصية
        </h1>

        <div className="space-y-6 text-gray-700 leading-relaxed text-sm md:text-base">
          <section className="space-y-2">
            <h2 className="text-xl font-bold text-brand-dark">المعلومات التي نجمعها</h2>
            <p>
              نحن نجمع البيانات الشخصية التي تقدمها لنا طواعية عند ملء نموذج الطلب في موقعنا. تشمل هذه المعلومات الاسم الكامل، ورقم الهاتف، والمدينة التي تقطن فيها.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-brand-dark">كيفية استخدام معلوماتك</h2>
            <p>
              نستخدم البيانات التي نجمعها حصرياً للأغراض التالية:
            </p>
            <ul className="list-disc list-inside space-y-1 pr-4">
              <li>تأكيد وتوثيق طلبك عبر الاتصال الهاتفي.</li>
              <li>توصيل طلبك إلى عنوانك المحدد بالتعاون مع شركات التوصيل المحلية.</li>
              <li>التواصل معك بخصوص أي استفسار أو تحديث يتعلق بالمنتج والخدمة.</li>
            </ul>
            <p>
              نحن نلتزم بعدم بيع أو مشاركة بياناتك الشخصية مع أي أطراف ثالثة لأغراض تجارية أو إعلانية خارج نطاق معالجة طلبك.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-brand-dark">ملفات تعريف الارتباط (Cookies) وأدوات التتبع</h2>
            <p>
              يستخدم هذا الموقع أدوات التتبع الرقمية والتحليلات مثل <strong>Facebook Pixel</strong> و<strong>TikTok Pixel</strong> و<strong>Google Analytics (gtag)</strong>.
            </p>
            <p>
              تساعدنا هذه الأدوات في قياس أداء حملاتنا الإعلانية وفهم كيفية تفاعل الزوار مع الصفحة لتوفير تجربة مستخدم أفضل. تقوم هذه البيكسلات بجمع بيانات غير معرفة للهوية بشكل مباشر مثل نوع المتصفح، نظام التشغيل، والصفحات التي تمت زيارتها.
            </p>
            <p>
              يمكنك في أي وقت تعطيل أو حظر ملفات تعريف الارتباط (Cookies) من خلال إعدادات متصفح الإنترنت الخاص بك.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-brand-dark">حماية وأمان البيانات</h2>
            <p>
              نحن نتخذ كافة التدابير التقنية والتنظيمية المناسبة لحماية بياناتك الشخصية من الضياع، أو الوصول غير المصرح به، أو الإفشاء، أو التعديل.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-brand-dark">حقوقك القانونية</h2>
            <p>
              لديك الحق الكامل في طلب مراجعة بياناتك المخزنة لدينا، أو طلب تعديلها أو حذفها بالكامل من سجلاتنا في أي وقت. للقيام بذلك، يرجى التواصل معنا عبر الاتصال المباشر.
            </p>
          </section>

          <section className="space-y-3 bg-brand/5 border border-brand/10 p-5 rounded-2xl">
            <h2 className="text-base font-extrabold text-brand-dark">إخلاء مسؤولية طبي هام:</h2>
            <p className="text-xs md:text-sm text-brand-dark font-medium leading-relaxed">
              هذا المنتج منتج طبيعي وليس دواءً، ولا يغني عن استشارة الطبيب المختص. المعلومات الواردة في الموقع لا تغني عن الاستشارة الطبية المتخصصة.
            </p>
          </section>
        </div>

        <div className="border-t border-gold/30 pt-6">
          <Link
            href="/"
            className="inline-block text-brand hover:text-brand-dark font-bold underline decoration-gold decoration-2 underline-offset-4"
          >
            ← العودة للصفحة الرئيسية
          </Link>
        </div>
      </div>
    </main>
  );
}
