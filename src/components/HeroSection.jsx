import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

import wallTiles from "../assets/images/tilesfloor.webp";
import vanities from "../assets/images/vanities.webp";
import outdoorTiles from "../assets/images/outdoor.jpg";

const slides = [
  {
    image: outdoorTiles,
    title: "Premium Outdoor Tiles Designed for Every Space in Pakistan",
    description:
      "Enhance patios, terraces, gardens, and commercial spaces with durable porcelain outdoor tiles crafted for long-lasting beauty and performance.",
  },
  {
    image: wallTiles,
    title: "Luxury Wall & Floor Tile Collections",
    description:
      "Explore premium ceramic and porcelain tiles that combine timeless elegance with modern craftsmanship for residential and commercial interiors.",
  },
  {
    image: vanities,
    title: "Modern Bathroom Solutions & Vanities",
    description:
      "Complete your bathroom with stylish vanities, sanitary ware, and accessories designed to deliver comfort, quality, and sophistication.",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Slider */}
      <div
        className="flex h-full transition-transform duration-[1400ms] ease-in-out"
        style={{
          width: `${slides.length * 100}%`,
          transform: `translateX(-${current * (100 / slides.length)}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full h-full flex-shrink-0"
            style={{ width: `${100 / slides.length}%` }}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="absolute inset-0 z-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-full flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-white text-3xl md:text-6xl font-semibold  leading-[1.5] whitespace-pre-line max-w-4xl">
                {slides[current].title}
              </h1>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Right Content */}
        <div className="absolute bottom-24 right-6 lg:right-10 xl:right-16 max-w-md max-md:left-6 max-md:right-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={`desc-${current}`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-white text-base md:text-lg leading-8 mb-8">
                {slides[current].description}
              </p>

              <a
                href="#collections"
                className="inline-flex items-center gap-3 border border-white  px-7 py-4 rounded-full bg-white text-black hover:bg-gray-200  transition-all duration-300"
              >
                Explore Collection
                <ArrowRight size={18} />
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all duration-300 rounded-full ${
              current === index
                ? "w-10 h-2 bg-white"
                : "w-2 h-2 bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}