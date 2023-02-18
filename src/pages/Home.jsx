import React from "react";
import Intro from "../components/homesContainer/intro/Intro";
import Hero from "../components/homesContainer/top/Hero";
import Recommendations from "../components/homesContainer/recommendations/Recommendations";

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
