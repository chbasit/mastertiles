// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import outdoor from "../assets/images/outdoor.jpg";

// import hero1 from "../assets/images/Neo.jpg";
// import hero2 from "../assets/images/lower-banner.jpg";

// const images = [outdoor,hero1, hero2];

// export default function HeroSection() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % images.length);
//     }, 6000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative h-screen overflow-hidden">
//       {/* Background Slider */}
//       <div
//         className="flex h-full transition-transform duration-[1400ms] ease-in-out"
//         style={{
//           width: `${images.length * 100}%`,
//           transform: `translateX(-${current * (100 / images.length)}%)`,
//         }}
//       >
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className="w-full h-full flex-shrink-0"
//             style={{ width: `${100 / images.length}%` }}
//           >
//             <img
//               src={image}
//               alt={`Hero ${index + 1}`}
//               className="w-full h-full object-cover"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/45" />

//       {/* Content */}
//       <div className="absolute inset-0 z-10">
//         <div className="max-w-[1450px] mx-auto px-6 lg:px-10 h-full flex flex-col justify-center">
//           {/* Title */}
//           <div>
//             <motion.h1
//               initial={{ y: 70, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{
//                 delay: 0.25,
//                 duration: 0.8,
//               }}
//               className="text-white font-regular leading-none text-2xl  md:text-5xl lg:text-7xl max-w-4xl"
//             >
//               Luxury Porcelain<br/> Slabs & Designer
//  <br/> Tiles in Pakistan
//             </motion.h1>

          

            
//           </div>
//         </div>

//         {/* Description */}
//         <motion.div
//           initial={{ y: 40, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{
//             delay: 1,
//             duration: 0.8,
//           }}
//           className="
//             absolute
//             bottom-24
//             right-6
//             lg:right-10
//             xl:right-16
//             max-w-md
//             z-20
//             text-left
//             max-md:left-6
//             max-md:right-6
//           "
//         >
//           <p className="text-white font-regular  text-base md:text-xl">
//             Discover premium ceramic tiles, luxury sanitary ware, and elegant
//             kitchen solutions designed to elevate every space with timeless
//             style, exceptional craftsmanship, and lasting quality.
//           </p>
//         </motion.div>
//       </div>

//       {/* Indicators */}
//       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrent(index)}
//             className={`transition-all duration-300 rounded-full ${
//               current === index
//                 ? "w-10 h-2 bg-white"
//                 : "w-2 h-2 bg-white/50"
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }


import { motion } from "framer-motion";
import heroVideo from "../assets/images/herovideo.webm";

export default function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45 z-[1]" />

      {/* Content */}
      <div className="absolute inset-0 z-10">
        <div className="max-w-[1450px] mx-auto px-6 lg:px-10 h-full flex flex-col justify-center">
          <motion.h1
            initial={{ y: 70, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.25,
              duration: 0.8,
            }}
            className="text-white font-regular leading-none text-2xl md:text-5xl lg:text-7xl max-w-4xl"
          >
            Luxury Porcelain
            <br />
            Slabs & Designer
            <br />
            Tiles in Pakistan
          </motion.h1>
        </div>

        {/* Description */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 1,
            duration: 0.8,
          }}
          className="
            absolute
            bottom-24
            right-6
            lg:right-10
            xl:right-16
            max-w-md
            z-20
            text-left
            max-md:left-6
            max-md:right-6
          "
        >
          <p className="text-white font-regular text-base md:text-xl leading-relaxed">
            Discover premium ceramic tiles, luxury sanitary ware, and elegant
            kitchen solutions designed to elevate every space with timeless
            style, exceptional craftsmanship, and lasting quality.
          </p>
        </motion.div>
      </div>
    </section>
  );
}