import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const MovieCard = () => {
  const [videos, setVideos] = useState({});
  const { _id } = useParams();

  useEffect(() => {
    const getVideos = async () => {
      const res = await axios.get(
        `https://anime-jqtu.onrender.com/anime/getmovie/${_id}`
      );
      setVideos(res.data.movie);
    };
    getVideos();
  }, [_id]);

  return (
    <div className="min-h-[50vh] flex flex-col h-auto lg:px-8">
      <div className="flex bg-[rgba(0,0,0,0.3)] rounded-sm w-full"></div>
      <div className="bg-[rgba(0,0,0,0.3)] rounded-sm w-full flex lg:flex-row flex-col py-8">
        <div className=" lg:w-1/2 w-full h-full rounded-md justify-start items-start">
          <iframe
            width="560"
            height="100%"
            src={videos.movies}
            frameBorder="0"
            allowFullScreen
            className="w-full lg:h-[715px] aspect-video px-2 object-fill"
          ></iframe>
        </div>
        <div className="lg:w-1/2 w-full min-h-[50vh] h-full rounded-md justify-end flex-col flex  items-end">
          <div className="z-10 p-5 mb-5 w-full ">
            <span className="mr-3 align-middle inline-block w-full">
              <h2 className="leading-9 p-2 mb-0 max-h-none font-light  text-2xl text-blue-600 text-center">
                {videos.title}
              </h2>
            </span>
            <div className="mb-3 text-base leading-5 pt-1 opacity-80 w-full text-center text-white">
              {videos.subTitle}
            </div>
            <div className="flex justify-center items-start w-full h-full">
              <figure className="align-top h-full">
                <img
                  src={videos.poster}
                  alt=""
                  width="185"
                  height="278"
                  loading="lazy"
                  className="max-w-full inline-block overflow-clip"
                />
              </figure>
            </div>
            <div className="max-h-64 text-xl overflow-auto break-words font-light mt-4">
              <p className="m-0 text-white">{videos.desc}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-4">
        <Link
          to="/movies"
          className="flex bg-[#C90000] py-2 md:mb-0 justify-center px-6 rounded mt-2 text-white hover:bg-[#d80d0d] drop-shadow-2xl transition-all duration-200 active:scale-90"
        >
          &larr; Back
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
