import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Keyboard } from "swiper";
import { BsStarFill } from "react-icons/bs";
import { GiRank3 } from "react-icons/gi";
import { MdRememberMe } from "react-icons/md";
import { FcInfo } from "react-icons/fc";
import axios from "axios";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/keyboard";
import "swiper/css/navigation";

const HeroManga = () => {
  const [mangas, setMangas] = useState([]);

  useEffect(() => {
    const getMangas = async () => {
      const res = await axios.get("https://api.jikan.moe/v4/manga");
      setMangas(res.data.data);
    };
    getMangas();
  }, []);

  return (
    <div className="min-h-[50vh] w-full mx-auto text-white container mt-20 text-center">
      <h1 className="heading w-full md:text-4xl text-lg md:text-start px-6 text-center my-4">
        Manga Gallery
      </h1>
      <Swiper
        style={{
          "--swiper-pagination-color": "#C90000",
        }}
        loop={true}
        slidesPerView={"auto"}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay, Keyboard]}
        keyboard={{ enabled: true }}
        autoplay={{ delay: 5000 }}
      >
        {mangas.map((manga, index) => (
          <SwiperSlide key={index}>
            <div className="w-ful text-white h-auto my-4">
              <img
                src={manga.images.webp.large_image_url}
                alt="comics"
                className="relative object-cover m-auto w-[350px] h-[450px] opacity-40 hover:opacity-100"
                loading="lazy"
              />
              <h2 className="text-center text-2xl">{manga.title}</h2>
              <div className="w-full flex justify-center lg:px-16 px-2 md:text-lg text-sm text-justify my-2">
                <p className="absolute top-5 left-1-/2 overflow-hidden text-shw lg:w-[35%] w-full px-2">{manga.background}</p>
              </div>
              <div className="flex justify-center items-center w-full gap-2">
                <div className="flex justify-center items-center gap-1">
                  <BsStarFill className="text-yellow-400 " />
                  <div></div>
                  <p>{manga.favorites}</p>
                </div>
                <div className="flex justify-center items-center gap-1">
                  <GiRank3 />
                  <p>
                    Rank : <span className="gap-1">{manga.rank}</span>
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center w-full gap-1">
                <MdRememberMe style={{ color: "white" }} />
                <p>
                  Members :{" "}
                  <span className="gap-1 text-white">{manga.members}</span>
                </p>
              </div>
              <a
                href={top.url}
                target="_blank"
                className="flex gap-1 justify-center items-center cursor-pointer"
              >
                <FcInfo />
                <span>Read more...</span>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroManga;
