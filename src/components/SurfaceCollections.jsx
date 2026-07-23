import { motion } from "framer-motion";

import type1 from "../assets/images/type.jpg";
import type2 from "../assets/images/office.jpg";
import type3 from "../assets/images/type4.jpg";
import type4 from "../assets/images/stonetype.jpg";
import type5 from "../assets/images/type5.jpg";

const collections = [
  {
   
    image: type1,
    height: "h-[240px] lg:h-[290px]",
  },
  {
    image: type2,
    height: "h-[390px] lg:h-[600px]",
  },
  {
    image: type3,
    height: "h-[240px] lg:h-[290px]",
  },
  {
    image: type5,
    height: "h-[240px] lg:h-[290px]",
  },
  {
    image: type4,
    height: "h-[390px] lg:h-[600px]",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 70,
  },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function SurfaceCollections() {
  return (
  <section className="bg-white py-16 overflow-hidden">
  <div className="max-w-[1400px] mx-auto px-5 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 items-start">

      {/* Column 1 */}
      <div className="flex flex-col justify-end gap-5 ">
<motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  custom={0}
  className="min-h-[140px] h-auto lg:h-[290px] flex items-center justify-center py-8 lg:py-0"
>
  <h2 className="text-[#212121] text-3xl md:text-5xl font-semibold text-center">
    Something out of everything
  </h2>
</motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={1}
          className="group relative overflow-hidden   cursor-pointer"
        > 
          <img
            src={collections[0].image}
            alt="image"
            className={`w-full ${collections[0].height} object-cover transition-all duration-700 group-hover:scale-110`}
          />

          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-all duration-500" />

          
        </motion.div>

      </div>

      {/* Column 2 */}
      <div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={2}
          className="group relative overflow-hidden   cursor-pointer"
        >
          <img
            src={collections[1].image}
            alt="image"
            className={`w-full ${collections[1].height} object-cover transition-all duration-700 group-hover:scale-110`}
          />

          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-all duration-500" />

           
        </motion.div>
      </div>

      {/* Column 3 */}
      <div className="flex flex-col gap-5">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={3}
          className="group relative overflow-hidden cursor-pointer"
        >
          <img
            src={collections[2].image}
            alt="image"
            className={`w-full ${collections[2].height} scale-105 object-cover transition-all duration-700 group-hover:scale-110`}
          />

          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-all duration-500" />

           
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={4}
          className="group relative overflow-hidden rounded-md cursor-pointer"
        >
          <img
            src={collections[3].image}
            alt="image"
            className={`w-full ${collections[3].height} object-cover scale-105 transition-all duration-700 group-hover:scale-110`}
          />

          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-all duration-500" />

           
        </motion.div>

      </div>

      {/* Column 4 */}
      <div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={5}
          className="group relative overflow-hidden rounded-md cursor-pointer"
        >
          <img
            src={collections[4].image}
            alt="image"
            className={`w-full ${collections[4].height} object-cover transition-all duration-700 group-hover:scale-110`}
          />

          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-all duration-500" />

           
        </motion.div>
      </div>

    </div>
  </div>
</section>
  );
}