import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Footer, Navbar } from "./components";
import MovieCard from "./components/movies/MovieCard";
import { Home, Manga, Movies } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manga" element={<Manga />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/video/:_id" element={<MovieCard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
