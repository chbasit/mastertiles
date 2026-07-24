import Toilet from "../assets/images/image1.jpg";
import BestSeller from "../assets/images/image2.jpg";
import BathroomSets from "../assets/images/image4.jpg";

const items = [
  {
    image: Toilet,
    title: "QUALITY",
  },
  {
    image: BestSeller,
    title: "INNOVATION",
  },
  {
    image: BathroomSets,
    title: "TRUST",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-[#36454F] py-18 lg:py-20">
      <div className="max-w-[1600px] mx-auto px-5 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-white text-3xl md:text-5xl font-medium">
            About MasterOne (M1 Tiles)
          </h2>

          <p className="mt-5 text-sm md:text-base uppercase tracking-[4px] text-white/70">
            PREMIUM TILES • SANITARY WARE • MODERN LIVING
          </p>

          <p className="mt-6 text-white/80 text-base md:text-lg leading-8">
            MasterOne (M1 Tiles) is committed to delivering premium-quality
            tiles, sanitary ware, bathroom fittings, and interior solutions that
            combine elegance with long-lasting performance. Every collection is
            carefully selected to help homeowners, architects, and designers
            create stylish, functional, and timeless living spaces.
          </p>
        </div>

        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          {items.map((item, index) => (
            <div key={index} className="group">
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[620px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <h3 className="mt-8 text-center text-white text-xl tracking-[3px] uppercase">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="max-w-5xl mx-auto text-center mt-16">
          <p className="text-lg md:text-2xl font-medium text-white leading-relaxed">
            At <span className="text-yellow-400">MasterOne (M1 Tiles)</span>, we
            believe every home deserves exceptional design. From luxurious floor
            and wall tiles to contemporary sanitary ware and bathroom fittings,
            our carefully curated collections are designed to inspire beautiful
            interiors while providing the durability and quality that customers
            can trust for years to come.
          </p>
        </div>
      </div>
    </section>
  );
}