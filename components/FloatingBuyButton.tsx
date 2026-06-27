"use client";

import { useEffect, useState } from "react";

export default function FloatingBuyButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const orderSection = document.getElementById("order");
    if (!orderSection) return;

    // Observe when the order section is visible on screen
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowButton(false);
        } else {
          // Show floating button only if scrolled down past the initial screen fold
          if (window.scrollY > 300) {
            setShowButton(true);
          }
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(orderSection);

    // scroll listener fallback and top fold handling
    const handleScroll = () => {
      const rect = orderSection.getBoundingClientRect();
      const isOrderVisible = rect.top < window.innerHeight && rect.bottom > 0;
      if (isOrderVisible) {
        setShowButton(false);
      } else {
        if (window.scrollY > 300) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none">
      <button
        onClick={() => {
          document.getElementById("order")?.scrollIntoView({ behavior: "smooth" });
        }}
        className={`w-full max-w-md bg-[#e11d2a] hover:bg-[#c91823] text-white text-xl font-bold py-4 px-6 rounded-xl shadow-2xl transition-all duration-300 transform animate-gentle-pulse cursor-pointer pointer-events-auto ${
          showButton ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0 pointer-events-none"
        }`}
        dir="rtl"
      >
        اشتري الآن — الدفع عند الاستلام
      </button>
    </div>
  );
}
