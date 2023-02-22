import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const movieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const res = await axios.get(
        "https://anime-jqtu.onrender.com/anime/getmovie"
      );
      setMovies(res.data.movie);
    };
    getMovies();
  }, []);

  return (
    <div className="min-h-[100vh] w-full flex flex-col h-auto lg:px-8 px-1">
      <h1 className=" w-full md:text-4xl text-lg md:text-start px-6 text-center my-4">
        Movies Gallery
      </h1>
      <div className="bg-[rgba(0,0,0,0.3)] md:p-4 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-4 rounded-sm w-full my-8 h-full">
        {movies.map((movie) => (
          <Link
            to={`/video/${movie._id}`}
            key={movie._id}
            className="shadow-2xl w-full hover:scale-105 transition-transform ease-out duration-500 my-4"
          >
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-[420px] rounded object-fill md:p-4"
              loading="lazy"
            />
            <h2 className="text-center leading-5 text-xl text-white tracking-normal my-4">
              {movie.subTitle}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default movieList;
