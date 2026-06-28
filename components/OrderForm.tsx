"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function OrderForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", phone: "", city: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    // Trim and check fields
    const nameVal = form.name.trim();
    const phoneVal = form.phone.trim().replace(/\s/g, "");
    const cityVal = form.city.trim();

    if (!nameVal || !phoneVal || !cityVal) {
      setError("المرجو ملء جميع الخانات المرجوة");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: nameVal,
          phone: phoneVal,
          city: cityVal
        }),
      });

      if (!res.ok) {
        throw new Error("API responded with an error");
      }

      // Fire tracking events on form submit
      if (typeof window !== "undefined") {
        if (window.fbq) {
          window.fbq("track", "Lead");
          window.fbq("track", "Purchase", { value: 249, currency: "MAD" });
        }
        if (window.ttq && window.ttq.track) {
          window.ttq.track("SubmitForm");
        }
        if (window.gtag) {
          window.gtag("event", "generate_lead");
        }
      }

      // Redirect to thank-you page
      router.push("/thank-you");
    } catch (err) {
      console.error(err);
      setError("وقع خطأ أثناء إرسال الطلب، المرجو المحاولة مرة أخرى.");
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-right" dir="rtl">
      <div>
        <label htmlFor="form-name" className="block mb-1.5 font-bold text-gray-700 text-sm">
          الاسم <span className="text-red-500">*</span>
        </label>
        <input
          id="form-name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="مثال: محمد العلوي"
          className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-800 transition focus:border-brand focus:ring-2 focus:ring-brand/20 focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="form-phone" className="block mb-1.5 font-bold text-gray-700 text-sm">
          رقم الهاتف <span className="text-red-500">*</span>
        </label>
        <input
          id="form-phone"
          name="phone"
          type="tel"
          inputMode="tel"
          required
          value={form.phone}
          onChange={handleChange}
          placeholder="رقم الهاتف"
          className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-800 transition focus:border-brand focus:ring-2 focus:ring-brand/20 focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="form-city" className="block mb-1.5 font-bold text-gray-700 text-sm">
          المدينة <span className="text-red-500">*</span>
        </label>
        <input
          id="form-city"
          name="city"
          type="text"
          required
          value={form.city}
          onChange={handleChange}
          placeholder="مثال: الدار البيضاء"
          className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-800 transition focus:border-brand focus:ring-2 focus:ring-brand/20 focus:outline-none"
        />
      </div>

      {error && (
        <div className="bg-red-50 border-r-4 border-red-500 p-3 rounded-lg text-red-700 text-sm font-semibold">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-2xl bg-brand py-4 px-6 text-xl font-extrabold text-white shadow-lg transition duration-200 hover:bg-brand-dark hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:pointer-events-none"
      >
        {loading ? "جاري إرسال الطلب..." : "اطلب الآن — الدفع عند الاستلام"}
      </button>

      <p className="text-center text-xs text-gray-500 mt-2">
        🚚 التوصيل مجاني · 🔒 الدفع نقداً عند استلام طلبك
      </p>
    </form>
  );
}
