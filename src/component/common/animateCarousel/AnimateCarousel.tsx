"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const images = ["/image/ChatGPT Image Aug 15, 2025, 03_13_18 PM.png", "/image/ChatGPT Image Aug 15, 2025, 03_13_18 PM.png", "/image/ChatGPT Image Aug 15, 2025, 03_13_18 PM.png", "gdgd", "hhfg"];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

const AnimateCarousel = () => {
  const [[currentIndex, direction], setIndex] = useState([0, 0]);

  const nextSlide = () => {
    setIndex(([prevIndex]) => [prevIndex === images.length - 1 ? 0 : prevIndex + 1, 1]);
  };

  // const prevSlide = () => {
  //     setIndex(([prevIndex]) => [prevIndex === 0 ? images.length - 1 : prevIndex - 1, -1])
  // }

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 8000);
    return () => clearInterval(slideInterval);
  }, [currentIndex]);

  const handleDotClick = (index: number) => {
    setIndex(() => [index, index > currentIndex ? 1 : -1]);
  };

  return (
    <div className="relative w-full overflow-hidden h-72 md:h-[450px] pt-11 ">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ type: "tween", duration: 0.7 }}
          className="absolute w-full h-full"
        >
          <Image width={300} height={400} src="/images/ChatGPT Image Sep 1, 2025, 12_50_04 PM.png" alt={`Slide ${currentIndex + 1}`} className="object-cover " />
        </motion.div>
      </AnimatePresence>

      {/* Indicators */}
      <div className="absolute flex -translate-x-1/2 bottom-2 left-1/2 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-2 h-2 rounded-full border border-customOrangeRed bg-white transition-all duration-300 ${currentIndex === index ? "w-4 bg-orange-500" : ""}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimateCarousel;
