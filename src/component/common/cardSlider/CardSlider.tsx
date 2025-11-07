"use client";
import React, { useRef, useState, useEffect, ReactNode } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

export default function CardSlider({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false); // می‌تواند به راست (شروع) برود
  const [canScrollRight, setCanScrollRight] = useState(true); // می‌تواند به چپ (انتها) برود

  const checkScroll = () => {
    const el = containerRef.current;
    if (!el) return;

    // آیا می‌تواند به «قبلی» (راست) برود؟
    setCanScrollLeft(el.scrollLeft > 0);

    // آیا می‌تواند به «بعدی» (چپ) برود؟
    const isAtEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 5;
    setCanScrollRight(!isAtEnd);
  };

  const scroll = (dir: "left" | "right") => {
    const el = containerRef.current;
    if (!el || el.children.length === 0) return;

    const firstCard = el.children[0] as HTMLElement;
    const cardWidth = firstCard.offsetWidth;
    const containerStyle = window.getComputedStyle(el);
    const gap = parseFloat(containerStyle.gap) || 0;
    const scrollAmount = cardWidth + gap;

    el.scrollBy({
      // dir 'left' = scrollLeft کم می‌شود (حرکت به راست)
      // dir 'right' = scrollLeft زیاد می‌شود (حرکت به چپ)
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  // --- تغییرات اصلی اینجا در JSX است ---

  return (
    <div className="relative w-full">
      {/* دکمه چپ (بعدی) */}
      <button
        onClick={() => scroll("left")} // <- تغییر کرد: به سمت چپ (بعدی) می‌رود
        // disabled={!canScrollRight} // <- تغییر کرد: چک کردن انتها
        className={`absolute left-2 top-1/2 -translate-y-1/2 p-5 bg-black/70 hover:bg-black shadow rounded-full transition-all duration-300 cursor-pointer z-10
                    ${!canScrollRight ? "opacity-30 cursor-not-allowed" : ""}`}
      >
        <BiChevronLeft className="w-5 h-5 md:w-10 md:h-10 text-white" />
      </button>

      {/* کانتینر کارت‌ها */}
      <div ref={containerRef} className="flex overflow-x-auto gap-4 scroll-smooth no-scrollbar">
        {children}
      </div>

      {/* دکمه راست (قبلی) */}
      <button
        onClick={() => scroll("right")} // <- تغییر کرد: به سمت راست (قبلی) می‌رود
        // disabled={!canScrollLeft} // <- تغییر کرد: چک کردن ابتدا
        className={`absolute right-2 top-1/2 -translate-y-1/2 p-5 bg-black/70 hover:bg-black shadow rounded-full transition-all duration-300 cursor-pointer z-10
                    ${!canScrollLeft ? "opacity-30 cursor-not-allowed" : ""}`}
      >
        <BiChevronRight className="w-5 h-5 md:w-10 md:h-10 text-white" />
      </button>
    </div>
  );
}
