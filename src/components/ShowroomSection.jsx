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
    image: img5,
    name: "Marble Tiles",
  },
  {
    image: img6,
    name: "Granite Design Tiles",
  },
   
  {
    image: img8,
    name: "Slabs",
  },
];

export default function ShowroomSection() {
  return (
    <section className="py-16 bg-[#F4F4F4]">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-8">

    {/* Heading & Description */}
<div className="max-w-5xl mx-auto text-center mb-20">
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-3xl md:text-5xl leading-[1.15] text-[#222]"
  >
    Premium Porcelain & Ceramic
    <br />
    Tile Collections
  </motion.h2>

  <motion.p
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.15, duration: 0.6 }}
    className="mt-8 max-w-3xl mx-auto text-gray-800 text-md"
  >
    At <span className="font-medium">MasterOne (M1)</span>, we offer a
    carefully curated selection of premium porcelain tiles, ceramic tiles,
    marble finishes, decorative surfaces, and modern interior solutions.
    Every collection is chosen to deliver exceptional quality, timeless
    aesthetics, and long-lasting performance for residential and commercial
    spaces.
  </motion.p>
</div>

       <div className="mt-24">
  <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4">
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