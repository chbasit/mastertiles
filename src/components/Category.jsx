 

import Toilet from "../assets/images/image1.jpg";
import BestSeller from "../assets/images/image2.jpg";
import BathroomSets from "../assets/images/image4.jpg";
import BathroomDesign from "../assets/images/tilesfloor.webp";
import Slabs from "../assets/images/slabs.jpg";
import Outdoor from "../assets/images/outdoor.jpg";



const collections = [
  {
    name: "Toilets",
    image: Toilet,
  },
  {
    name: "Best Seller",
    image: BestSeller,
  },
  {
    name: "Bathroom Sets",
    image: BathroomSets,
  },
  {
    name: " Wall Tiles",
    image: BathroomDesign,
  },
  {
    name: "Slabs Tiles",
    image: Slabs,
  },
  {
    name: "Outdoor Tiles",
    image: Outdoor,
  },
];

export default function CollectionShowcase() {
  return (
    <section className="py-4  bg-gray">
      <div className="max-w-8xl mx-auto px-5 lg:px-12">
        

        {/* Images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6  cursor-pointer">
          {collections.map((item, index) => (
            <div
            
              className="relative group overflow-hidden "
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[350px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              {/* <div className="absolute inset-0 bg-black/35 group-hover:bg-black/45 transition duration-500" /> */}

              {/* Center Text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-2xl md:text-4xl font-medium tracking-wide text-center">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}