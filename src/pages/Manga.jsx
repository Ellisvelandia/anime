import React from "react";
import HeroManga from "../components/manga/mangaHero/HeroManga";
import MangaVideo from "../components/manga/mangaVideos/MangaVideo";

const Manga = () => {
  return (
    <div className="my-8">
      <HeroManga />
      <MangaVideo />
    </div>
  );
};

export default Manga;
