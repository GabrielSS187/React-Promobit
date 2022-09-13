import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Movies } from "../pages/movies";
import { MovieDetails } from "../pages/movieDetails";

export function Routers () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/details/:id" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
};