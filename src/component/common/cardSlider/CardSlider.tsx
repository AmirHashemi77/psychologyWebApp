"use client";
import React, { useRef, useState, useEffect, ReactNode } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

export default function CardSlider({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = containerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft + el.clientWidth < el.scrollWidth);
    setCanScrollRight(el.scrollLeft > 0);
  };

  const scroll = (dir: "left" | "right") => {
    const el = containerRef.current;
    if (!el) return;
    const scrollAmount = el.clientWidth * 0.8;
    el.scrollBy({ left: dir === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  return (
    <div className="relative w-full">
      {/* دکمه چپ */}
      <button
        onClick={() => scroll("left")}
        // disabled={!canScrollLeft}
        className={`absolute left-2 top-1/2 -translate-y-1/2 p-5 bg-black/70 hover:bg-black  shadow rounded-full transition-all duration-300 cursor-pointer z-10`}
      >
        <BiChevronLeft className="w-5 h-5 md:w-10 md:h-10 text-white" />
      </button>

      {/* کانتینر کارت‌ها */}
      <div ref={containerRef} className="flex overflow-x-auto gap-4 scroll-smooth no-scrollbar">
        {children}
      </div>

      {/* دکمه راست */}
      <button
        onClick={() => scroll("right")}
        // disabled={!canScrollRight}
        className={`absolute right-2 top-1/2 -translate-y-1/2 p-5 bg-black/70 hover:bg-black  shadow rounded-full transition-all duration-300 cursor-pointer  z-10`}
      >
        <BiChevronRight className="w-5 h-5 md:w-10 md:h-10 text-white" />
      </button>
    </div>
  );
}
