import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Movies } from "../pages/movies";
import { MovieDetails } from "../pages/movieDetails";
import { PageNotFound } from "../pages/pageNotFound";

export function Routers () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/details/:id" element={<MovieDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};