import React, { useEffect, useState } from "react";
import axios from "axios";
import { FcRating } from "react-icons/fc";
import { ImYoutube2 } from "react-icons/im";
import { IoLogoYoutube } from "react-icons/io";
import { FcInfo } from "react-icons/fc";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay, Keyboard, Navigation, Zoom } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/keyboard";
import "swiper/css/navigation";
import "swiper/css/zoom";

const Hero = () => {
  const [topAnime, setTopAnime] = useState([]);
  const [movie, setMovie] = useState(null);

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
      <h1 className="w-full md:text-4xl text-lg md:text-start px-6 text-center my-4">Top Anime</h1>
      <Swiper
        style={{
          "--swiper-pagination-color": "#C90000",
        }}
        modules={[Pagination, A11y, Autoplay, Keyboard, Navigation, Zoom]}
        slidesPerView={
          screenSize < 768 ? 1 : screenSize >= 768 && screenSize < 1024 ? 2 : 4
        }
        navigation
        zoom={true}
        spaceBetween={10}
        keyboard={{ enabled: true }}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
      >
        {topAnime.map((top, index) => (
          <SwiperSlide key={index}>
            <div className="w-full relative drop-shadow-lg shadow-black font-bold text-white ">
              <img
                src={top.images.webp.large_image_url}
                alt="comics"
                className="object-cover m-auto w-[350px] h-[500px] opacity-70 hover:opacity-100"
                loading="lazy"
              />
              <h2 className="absolute top-6 text-center left-4 right-4 text-lg">
                {top.title}
              </h2>
              <div className="flex items-center justify-center gap-2 absolute md:bottom-10 bottom-2 left-4 right-4">
                <FcRating />
                <p className="text-lg text-center">{top.rating}</p>
              </div>
              <div
                className="absolute bottom-20 left-[45%] right-1/2 text-[#fc0c0c] cursor-pointer flex items-center w-60 shadow-2xl"
                onClick={() => setMovie(top.trailer.embed_url)}
              >
                <IoLogoYoutube size={45} />
                <ImYoutube2 size={45} />
              </div>
              <a
                href={top.url}
                target="_blank"
                className="absolute top-1 right-4 text-[#fc0c0c] cursor-pointer"
              >
                <FcInfo size={30} />
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        className="popup-media"
        style={{ display: movie ? "block" : "none" }}
      >
        {movie && (
          <>
            <iframe
              title=""
              src={movie}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              width="100%"
              height="100%"
              className="aspect-video w-full"
              loading="lazy"
            />
            <button onClick={() => setMovie(null)}>&times;</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Hero;
