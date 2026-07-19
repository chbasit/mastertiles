import { motion } from "framer-motion";
import tilesVideo from "../assets/images/tiles.mp4";

export default function TilesShowcase() {
  return (
    <section className="py-24 bg-[#EFECE8]">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          

          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-5xl font-medium  text-[#222]  "
          >
            Discover the Beauty of Premium Tiles
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 text-gray-800 text-sm md:text-lg"
          >
            Crafted with precision and designed for modern living, our premium
            porcelain slabs and ceramic tiles bring elegance, durability, and
            timeless style to every residential and commercial space.
          </motion.p>
        </div>

        {/* Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-xl shadow-xl"
        >
          <video
            className="w-full h-[300px] md:h-[500px] lg:h-[700px] object-cover"
            autoPlay
            muted
            loop
            playsInline
            controls={false}
          >
            <source src={tilesVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>
    </section>
  );
}