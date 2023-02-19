import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Footer, Navbar } from "./components";
import { Home, Manga, Movies } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manga" element={<Manga />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
