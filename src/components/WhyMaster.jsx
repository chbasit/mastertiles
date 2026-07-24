import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    number: "01",
    title: "Premium Materials",
    description:
      "Every tile, sanitary product, and interior solution is selected for lasting durability, refined finishes, and dependable everyday performance.",
  },
  {
    number: "02",
    title: "Modern Living Spaces",
    description:
      "Contemporary collections designed to complement today's homes, offices, and commercial interiors with timeless elegance.",
  },
  {
    number: "03",
    title: "Everything Under One Roof",
    description:
      "From wall and floor tiles to sanitary ware, kitchen collections, and bathroom accessories, find complete interior solutions in one destination.",
  },
  {
    number: "04",
    title: "Trusted Industry Partner",
    description:
      "Preferred by homeowners, architects, interior designers, and contractors for consistent quality, professional service, and reliable supply.",
  },
  
];

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function WhyMaster() {
  return (
    <section className="bg-[#F4F4F4] py-16">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="uppercase tracking-[4px] text-sm text-gray-800 font-medium">
            Why Choose MasterOne
          </span>

          <h2 className="text-3xl md:text-5xl  font-regular text-[#222] leading-tight mt-3">
            Crafted to bring every
            <br />
            interior together beautifully.
          </h2>

         
        </motion.div>

      <div className="grid md:grid-cols-2 border-t border-l border-gray-300">
  {features.map((item, index) => (
    <motion.div
      key={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="border-r border-b border-gray-300 p-6 lg:p-8 hover:bg-white transition-all duration-300"
    >
      <span className="text-4xl font-light text-gray-600">
        {item.number}
      </span>

      <h3 className="text-xl font-medium text-[#222] mt-6">
        {item.title}
      </h3>

      <p className="text-gray-800 text-md mt-4">
        {item.description}
      </p>
    </motion.div>
  ))}
</div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
        >
          <div>
            <h3 className="text-xl md:text-3xl font-regular text-[#222]">
              Ready to transform your space?
            </h3>

            <p className="text-gray-800 mt-4 max-w-2xl">
              Discover premium wall tiles, floor tiles, porcelain collections,
              sanitary ware, kitchen solutions, and elegant interior finishes
              designed for modern homes and commercial projects.
            </p>
          </div>

          <a
            href="#collections"
            className="inline-flex items-center gap-3 border border-[#222] px-7 py-3 bg-[#36454F] text-white hover:bg-white hover:text-black  transition-all duration-300 w-fit"
          >
            Explore Collections
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}