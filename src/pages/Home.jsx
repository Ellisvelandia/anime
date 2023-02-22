import React, { useEffect, useState } from "react";
import Intro from "../components/homesContainer/intro/Intro";
import Hero from "../components/homesContainer/top/Hero";
import Recommendations from "../components/homesContainer/recommendations/Recommendations";

const Home = () => {
  const [loading, setLoading] = useState(false);
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
          <Intro />
          <Hero />
          <Recommendations />
        </div>
      )}
    </>
  );
};

export default Home;
