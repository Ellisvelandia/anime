import React from "react";
import { videos } from "./data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const MangaVideo = () => {
  return (
    <div className="min-h-[50vh] m-auto w-full container">
      <h1 className="heading w-full md:text-4xl text-lg md:text-start px-6 text-center my-4">
        Manga Top Videos
      </h1>
      <Swiper
        style={{
          "--swiper-pagination-color": "#C90000",
        }}
        navigation
        slidesPerView={1}
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation]}
      >
        {videos.map((video) => (
          <SwiperSlide key={video.id}>
            <div className="h-[500px] pl-5">
              <iframe
                width="100%"
                height="100%"
                src={video.video}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full object-fill"
                loading="lazy"
              ></iframe>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MangaVideo;
