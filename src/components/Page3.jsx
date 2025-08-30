import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import logo from "../assets/logo.png";

// Import your 6 images
import img1 from "../assets/swiper_img1.jpg";
import img2 from "../assets/swiper_img2.jpeg";
import img3 from "../assets/swiper_img3.jpg";
import img4 from "../assets/swiper_img4.jpg";
import img5 from "../assets/swiper_img5.jpg";
import img6 from "../assets/swiper_img6.jpg";

const Page3 = () => {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="h-[100%] py-[50px] w-[100vw] flex flex-col items-center">
      <img src={logo} className="h-[100px] w-[100px]" alt="logo" />
      <h2 className="md:text-5xl text-4xl font-extrabold">STAY ON THE</h2>
      <h1 className="text-[#0025ff] md:text-9xl text-8xl font-extrabold mb-10">PULSE</h1>

      {/* Swiper Below Heading */}
      <div className="w-[80%] max-w-[1000px]">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={3} // Show 3 images at a time
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          className="rounded-2xl shadow-lg"
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center">
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="rounded-2xl h-[400px]  w-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Page3;
