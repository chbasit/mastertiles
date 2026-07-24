import { motion, useScroll, useTransform } from "framer-motion";

import bathroom1 from "../assets/images/bathroom1.jpg";
import PrivateWellness from "../assets/images/collection1.webp";
import Kitchen from "../assets/images/collection.webp";
import decor from "../assets/images/collection2.webp";
import Lappato from "../assets/images/Lappato.webp";
import appolo from "../assets/images/oppolo2.jpg";
import Vanities from "../assets/images/vanities.webp";
import Slabs from "../assets/images/slabs.jpg";



const products = [
  {
    image: bathroom1,
    title: "Wall Tiles",
  },
   {
    image: Lappato,
    title: "Lappato",
  },
  {
    image: appolo,
    title: "Appolo",
  },
  {
    image: Vanities,
    title: "vanities",
  },
  {
    image: Slabs,
    title: "Slabs",
  },
  {
    image: PrivateWellness,
    title: "Private Wellness",
  },
  {
    image: Kitchen,
    title: "Kitchen",
  },
  {
    image: decor,
    title: "Decor",
  },
 
];

export default function TrendingItems() {
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <section className="py-16 bg-[#F4F4F4] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-20">
          

          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl lg:text-5xl font-regular text-[#222]"
          >
            Explore Our Collections
          </motion.h2>
        </div>

        {/* Products Grid */}
        <motion.div
          style={{ y }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 cursor-pointer"
        >
          {products.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.35 }}
              className="group"
            >
              <div className="  overflow-hidden    h-full">
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[350px] rounded-sm object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  

                  <h3 className="text-md md:text-lg font-regular text-gray-800 text-center ">
                    {item.title}
                  </h3>

                  
                </div>
                
              </div>
              
            </motion.div>
          
          ))}
        </motion.div>
      </div>
    </section>
  );
}