import React, { useEffect, useState } from "react";
import { BsStarFill } from "react-icons/bs";
import { GiRank3 } from "react-icons/gi";
import { MdRememberMe } from "react-icons/md";
import { FcInfo } from "react-icons/fc";
import axios from "axios";

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
      <div className="grid container lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-evenly gap-6">
        {mangas.map((manga, index) => (
          <div className="w-ful text-white h-auto my-4 relative" key={index}>
            <img
              src={manga.images.webp.large_image_url}
              alt="comics"
              className="relative object-fill m-auto w-[350px] h-[450px] opacity-100 rounded"
              loading="lazy"
            />
            <h2 className="text-center text-2xl">{manga.title}</h2>
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
        ))}
      </div>
    </div>
  );
};

export default HeroManga;
