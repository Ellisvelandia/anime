import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdMore } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const recommendations = () => {
  const [recommendationsAnime, setRecommendationsAnime] = useState([]);
  AOS.init();

  useEffect(() => {
    const getRecommendation = async () => {
      const res = await axios.get(
        "https://api.jikan.moe/v4/recommendations/anime"
      );
      setRecommendationsAnime(res.data.data.slice(19, 39));
    };
    getRecommendation();
  }, []);

  return (
    <div className="my-8 min-h-[100vh] w-full mx-auto text-white container">
      <h1 className="w-full md:text-4xl text-lg md:text-start px-6 text-center my-4">
        Recommendations Anime
      </h1>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 place-content-center w-full px-2 flex-col my-4 min-h-screen gap-2">
        {recommendationsAnime.map((recommendation, index) => (
          <div
            key={index}
            className="relative w-full h-full object-cover my-3 mx-auto shadow-lg p-4 rounded text-center font-semibold text-lg"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="800"
          >
            <h2 className="text-center my-4">
              {recommendation.entry[1].title}
            </h2>
            <img
              src={recommendation.entry[1].images.webp.large_image_url}
              alt="webp/images"
              className="object-fill m-auto w-[550px] h-[500px] "
              loading="lazy"
            />
            <p className="my-4 text-center">
              {recommendation.content.slice(0, 120)}...
            </p>
            <a
              href={recommendation.entry[0].url}
              target="_blank"
              className="cursor-pointer flex__center"
            >
              <MdMore size={30} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default recommendations;
