import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const slides = [
  {
    title: "SuperMarket For Fresh Grocery",
    description:
      "Introduced a new model for online grocery shopping and convenient home delivery at any time.",
    image: "hero-1.jpg",
  },
  {
    title: "Freshness Delivered to Your Doorstep",
    description:
      "Get premium-quality groceries with lightning-fast delivery across the city.",
    image: "hero-2.jpg",
  },
  {
    title: "Grocery Shopping Made Simple",
    description:
      "Shop smart, eat fresh. Your favorite groceries at the best prices.",
    image: "hero-3.jpg",
  },
];

const HeroCarousel = () => {
  return (
    <div className="w-full bg-green-600 rounded-xl overflow-hidden mt-5">
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination]}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col gap-5 md:flex-row items-center justify-between px-10 py-10 text-white">
              <div className=" space-y-4 flex flex-col gap-5">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  {slide.title}
                </h1>
                <p className="text-lg text-white/90">{slide.description}</p>
                <button className="bg-black w-[50%] text-white px-6 py-2 rounded-md mt-4 hover:bg-gray-800 transition">
                  Shop Now →
                </button>
              </div>
              <div className="md:w-1/2 mt-6 md:mt-0">
                <img
                  src={slide.image}
                  alt="Hero"
                  className="w-full max-w-md mx-auto"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroCarousel;
