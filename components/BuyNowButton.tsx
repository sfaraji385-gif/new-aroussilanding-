"use client";

export default function BuyNowButton() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Avoid default anchor behavior if we want custom smooth scrolling control
    // but standard anchor with native scroll works as well
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "InitiateCheckout");
    }
  };

  return (
    <a
      href="#order"
      onClick={handleClick}
      className="w-full max-w-md bg-[#e11d2a] hover:bg-[#c91823] text-white text-2xl font-extrabold py-5 px-8 rounded-2xl shadow-xl transition-all duration-200 animate-gentle-pulse text-center cursor-pointer block"
    >
      اشتري الآن
    </a>
  );
}
