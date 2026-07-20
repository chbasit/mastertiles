import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Star } from "lucide-react";

import "swiper/css";

const testimonials = [
  {
    name: "Ahmed Raza",
    location: "Sialkot",
    review:
      "Amazing quality tiles and excellent customer support. Highly recommended.",
  },
  {
    name: "Sarah Khan",
    location: "Lahore",
    review:
      "The showroom has an outstanding collection with premium quality products.",
  },
  {
    name: "Muhammad Ali",
    location: "Gujranwala",
    review:
      "Professional staff and beautiful luxury tile collections.",
  },
  {
    name: "Usman Tariq",
    location: "Sialkot",
    review:
      "Reasonable prices with excellent customer service.",
  },
  {
    name: "Ali Hassan",
    location: "Islamabad",
    review:
      "Very satisfied with my bathroom renovation materials.",
  },
  {
    name: "Hassan Raza",
    location: "Faisalabad",
    review:
      "Best tile showroom I have visited in Pakistan.",
  },
];

const Card = ({ item }) => (
  <div className="h-[300px] border border-gray-200 bg-[#FCFBFA] p-6  flex flex-col">
    <div className="flex items-center gap-3 mb-4">
       

      <div>
        <h4 className="font-regular text-gray-900">{item.name}</h4>
        <p className="text-sm text-gray-800">{item.location}</p>
      </div>
    </div>

    <div className="flex text-[#FBBC05] mb-4">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          fill="currentColor"
          stroke="currentColor"
          strokeWidth={0}
        />
      ))}
    </div>

    <p className="text-gray-800 text-sm line-clamp-5 pt-8">
      {item.review}
    </p>
  </div>
);

export default function Testimonials() {
  return (
    <section className="pb-4 bg-[#EFECE8]">
      <div className="max-w-[1450px] mx-auto px-5">
        {/* Heading */}
        <div className="text-center mb-10">
          <div className="flex justify-center items-center gap-3 mb-5">
            <span className="text-2xl md:text-5xl font-regular">
              <span className="text-[#4285F4]">G</span>
              <span className="text-[#EA4335]">o</span>
              <span className="text-[#FBBC05]">o</span>
              <span className="text-[#4285F4]">g</span>
              <span className="text-[#34A853]">l</span>
              <span className="text-[#EA4335]">e</span>
            </span>
          </div>

          <h2 className="text-xl md:text-4xl font-regular text-gray-900">
            Rated 4.9 on Google
          </h2>

          <div className="flex justify-center items-center gap-2 mt-4">
            <div className="flex text-[#FBBC05]">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={22}
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth={0}
                />
              ))}
            </div>

            <span className="font-regular text-gray-800">
              337 Reviews
            </span>
          </div>
        </div>

        {/* Reviews Slider */}
        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={800}
          spaceBetween={24}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1.2,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index} className="h-auto">
              <Card item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}