import { motion } from "framer-motion";

import img1 from "../assets/images/Ceramic-Tiles.jpg";
import img2 from "../assets/images/Porcelain-Tiles.jpg";
import img3 from "../assets/images/Travertine-Tiles.jpg";
import img4 from "../assets/images/Natural-Stone-Tiles.jpg";
import img5 from "../assets/images/Marble-Tiles.jpg";
import img6 from "../assets/images/Granite-Design-Tiles.jpg";
import img7 from "../assets/images/decor-tiles.jpg";
import img8 from "../assets/images/slabs.jpg";

const gallery = [
  {
    image: img1,
    name: "Ceramic Tiles",
  },
  {
    image: img2,
    name: "Porcelain Tiles",
  },
  {
    image: img3,
    name: "Travertine Tiles",
  },
  {
    image: img4,
    name: "Natural Stone Tiles",
  },
  {
    image: img5,
    name: "Marble Tiles",
  },
  {
    image: img6,
    name: "Granite Design Tiles",
  },
  {
    image: img7,
    name: "Decor Tiles",
  },
  {
    image: img8,
    name: "Slabs",
  },
];

export default function ShowroomSection() {
  return (
    <section className="py-8 bg-[#EFECE8]">
      <div className="max-w-[1450px] mx-auto px-5 lg:px-8">

        {/* Top Content */}
        <div className="grid lg:grid-cols-12 gap-12">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4"
          >
            <h2 className="text-2xl lg:text-5xl font-regular   text-[#222]">
              No 1. Porcelain Tiles & Ceramics Tiles Company in Pakistan
            </h2>
          
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-8"
          >
            <div className="space-y-8 text-lg  text-gray-800">
              <p>
                Welcome to  M1 Store your destination for
                luxury tiles, sanitary ware, and premium interior solutions.
                Our showroom is designed to inspire homeowners, architects,
                interior designers, and builders with elegant products that
                combine style, durability, and quality.
              </p>

              <p>
                Located on Kashmir Road, Habib Mall Plaza, Sialkot, our showroom
                lets you experience materials firsthand before making the
                perfect choice for your home or commercial project.
              </p>

               
            </div>
          </motion.div>
        </div>

       <div className="mt-24">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {gallery.map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.08 }}
        className="group cursor-pointer"
      >
        <div className="overflow-hidden rounded-md">
          <div className="relative overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[250px] object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-500" />
          </div>
        </div>

        {/* Product Name */}
        <h3 className="mt-4 text-lg font-regular text-[#222] text-center transition-colors duration-300 group-hover:text-[#B9975B]">
          {item.name}
        </h3>
      </motion.div>
    ))}
  </div>
</div>

      </div>
    </section>
  );
}