import { Routes, Route, useLocation } from "react-router-dom";

import { Movies } from "../pages/movies";
import { MovieDetails } from "../pages/movieDetails";
import { PageNotFound } from "../pages/pageNotFound";

import { AnimatePresence } from "framer-motion";

export function Routers () {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Movies />} />
        <Route path="/details/:id" element={<MovieDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </AnimatePresence>
  );
};