import React, { useEffect, useState } from "react";
import HeroManga from "../components/manga/mangaHero/HeroManga";
import MangaVideo from "../components/manga/mangaVideos/MangaVideo";

const Manga = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center w-full min-h-[100vh]">
          <img
            src="https://64.media.tumblr.com/72cfd5a4b7b1ec7170a91e6fa0956ff4/tumblr_n5fc04BpDZ1skm8cio1_500.gif"
            alt="loading"
            className="object-fill"
          />
        </div>
      ) : (
        <div className="my-8">
          <MangaVideo />
          <HeroManga />
        </div>
      )}
    </>
  );
};

export default Manga;
