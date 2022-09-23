import { api } from "../api/api";

import { 
  IMovies, 
  IObjModelOutputData, 
  IReleaseDatesOutput,
  ICreditsMovie,
  IVideoMovie,
 } from "./types";
import { IGenresOutputData } from "./types";

import { key } from "./key";

async function getMovies (pageNumber: number ) {
  const movies = await api
  .get<IObjModelOutputData>(`/movie/popular?api_key=${key}&language=pt-BR&page=${pageNumber}`);
  return movies.data;
};

async function getGenres () {
  const genres = await api
  .get<IGenresOutputData>(`/genre/movie/list?api_key=${key}&language=pt-BR`);
  return genres.data;
};

export async function getMovie (id: number) {
  const movie = await
  api.get<IMovies>(`/movie/${id}?api_key=${key}&language=pt-BR`);
  return movie.data;
};

export async function getReleaseDate (id: number) {
  const releaseDate = await
  api.get<IReleaseDatesOutput>(`/movie/${id}/release_dates?api_key=${key}&language=pt-BR`);
  return releaseDate.data;
};

export async function getCredits (idCredits: number) {
  const credits = await 
  api.get<ICreditsMovie>(`/movie/${idCredits}/credits?api_key=${key}&language=pt-BR`);
  return credits.data;
};

async function getVideoMovie (idMovie: number ) {
  const video = await api
  .get<IVideoMovie>(`movie/${idMovie}/videos?api_key=${key}&language=pt-BR`);
  return video.data;
};

async function getMovieRecommendations (idMovie: number ) {
  const recommendations = await api
  .get<IObjModelOutputData>(`movie/${idMovie}/recommendations?api_key=${key}&language=pt-BR`);
  return recommendations.data;
};

export const apis = {
  getMovies,
  getGenres,
  getMovie,
  getReleaseDate,
  getCredits,
  getVideoMovie,
  getMovieRecommendations
};