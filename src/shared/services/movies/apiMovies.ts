import { api } from "../api/api";

import { 
  IMovies, 
  IObjModelOutput, 
  IReleaseDatesOutput,
  ICreditsMovie,
 } from "./types";
import { IGenresOutputData } from "./types";

async function getMovies (pageNumber: number ) {
  const movies = await api
  .get<IObjModelOutput>(`/movie/popular?api_key=97d81c8553bb84ebfda14b5f577bee4d&language=pt-BR&page=${pageNumber}`);
  return movies.data;
};

async function getGenres () {
  const genres = await api
  .get<IGenresOutputData>("/genre/movie/list?api_key=97d81c8553bb84ebfda14b5f577bee4d&language=pt-BR");
  return genres.data;
};

export async function getMovie (id: number) {
  const movie = await
  api.get<IMovies>(`/movie/${id}?api_key=97d81c8553bb84ebfda14b5f577bee4d&language=pt-BR`);
  return movie.data;
};

export async function getReleaseDate (id: number) {
  const releaseDate = await
  api.get<IReleaseDatesOutput>(`/movie/${id}/release_dates?api_key=97d81c8553bb84ebfda14b5f577bee4d&language=pt-BR`);
  return releaseDate.data;
};

export async function getCredits (idCredits: number) {
  const credits = await 
  api.get<ICreditsMovie>(`/movie/${idCredits}/credits?api_key=97d81c8553bb84ebfda14b5f577bee4d&language=pt-BR`);
  return credits.data;
};

export const apis = {
  getMovies,
  getGenres,
  getMovie,
  getReleaseDate,
  getCredits,
};