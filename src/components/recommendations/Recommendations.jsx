import axios from "axios";
import React, { useEffect, useState } from "react";
import { FcInfo } from "react-icons/fc";
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
      setRecommendationsAnime(res.data.data.slice(21, 39));
    };
    getRecommendation();
  }, []);

  console.log(
    recommendationsAnime.map((recommendation) => recommendation.entry[0].url)
  );

  return (
    <div className="my-8 min-h-[100vh] w-full mx-auto text-white container">
      <h1 className="w-full md:text-4xl text-lg md:text-start px-6 text-center my-4">
        Recommendations Anime
      </h1>
      <div className="grid lg:grid-cols-2 grid-cols-1 place-content-center w-full px-2 flex-col my-4 min-h-screen gap-2">
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
            <h2 className="my-4 text-center">{recommendation.content}</h2>
            <a
              href={recommendation.entry[0].url}
              target="_blank"
              className="absolute top-4 right-4 cursor-pointer"
            >
              <FcInfo size={30} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default recommendations;
