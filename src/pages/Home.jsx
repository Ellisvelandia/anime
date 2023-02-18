import React from "react";
import Intro from "../components/intro/Intro";
import Hero from "../components/top/Hero";
import Recommendations from "../components/recommendations/Recommendations";

const Home = () => {
  return (
    <div className="my-8">
      <Intro />
      <Hero />
      <Recommendations />
    </div>
  );
};

export default Home;
