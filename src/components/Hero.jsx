import React, { useEffect, useState } from "react";
import axios from "axios";
import { FcRating } from "react-icons/fc";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay, Keyboard } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/keyboard";

const Hero = () => {
  const [topAnime, setTopAnime] = useState([]);

  useEffect(() => {
    const getTopAnime = async () => {
      const res = await axios.get("https://api.jikan.moe/v4/top/anime");
      setTopAnime(res.data.data);
      console.log(res.data.data);
    };
    getTopAnime();
  }, []);

  const [screenSize, setScreenSize] = useState(window.screen.width);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.screen.width);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [screenSize]);

  return (
    <div className="min-h-[50vh] w-full mx-auto text-white container">
      <Swiper
        style={{
          "--swiper-pagination-color": "#C90000",
          "--swiper-pagination-bullet-size": "16px",
        }}
        modules={[Pagination, A11y, Autoplay, Keyboard]}
        slidesPerView={
          screenSize < 768 ? 1 : screenSize >= 768 && screenSize < 1024 ? 2 : 4
        }
        spaceBetween={10}
        keyboard={{ enabled: true }}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
      >
        {topAnime.map((top, index) => (
          <SwiperSlide key={index}>
            <div className="w-full relative overflow-x-hidden max-w-screen-md drop-shadow-lg shadow-black font-bold text-white ">
              <img
                src={top.images.webp.large_image_url}
                alt="comics"
                className="object-cover m-auto w-[350px] h-[500px] opacity-80 hover:opacity-100"
                loading="lazy"
              />
              <h2 className="absolute top-6 text-center left-4 right-4 text-lg">
                {top.title}
              </h2>
              <div className="flex items-center justify-center gap-2 absolute md:bottom-10 bottom-2 left-4 right-4">
                <FcRating />
                <p className="text-lg text-center">{top.rating}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
