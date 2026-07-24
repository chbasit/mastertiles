import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import tilesVideo from "../assets/images/tiles.mp4";

export default function TilesShowcase() {
  const videoRef = useRef(null);

  return (
    <section className="py-20 bg-[#fff]">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left Content */}
          <div>
            

            <h2 className="mt-5 text-3xl md:text-5xl  font-regular leading-[1.15] text-[#222]">
              See Quality
               
              Built
              <br/> Into
              
              Every Detail
            </h2>

            <p className="mt-8 text-gray-800 text-md  max-w-xl">
              Experience the craftsmanship behind every MasterOne collection.
              From premium porcelain tiles and ceramic surfaces to sanitary ware
              and modern interior solutions, every product is created with
              attention to quality, durability, and timeless design for homes
              and commercial spaces.
            </p>

            <p className="mt-5 text-gray-800 text-md  max-w-xl">
              Discover materials designed to inspire beautiful interiors while
              delivering the performance needed for everyday living.
            </p>

            <a
              href="#collections"
              className="inline-flex items-center gap-3 mt-10 border border-[#222]  px-7 py-3 bg-[#36454F] text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              Explore Collection
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Right Video */}
          <div
            
            className="overflow-hidden rounded-2xl"
          >
            <video
              ref={videoRef}
              className="w-full h-[300px] md:h-[350px] lg:h-[400px] object-cover"
              autoPlay
              muted
              loop
              playsInline
              controls={false}
              onMouseEnter={() => videoRef.current?.pause()}
              onMouseLeave={() => videoRef.current?.play()}
            >
              <source src={tilesVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}