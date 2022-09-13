export interface IMovies {
poster_path: string | null;
adult: boolean;
overview: string;
release_date: string;
genre_ids: number[];
id: number;
original_title: string;
original_language: string;
title: string;
backdrop_path: string | null;
popularity: number;
vote_count: number;
video: boolean;
vote_average: number;
};

export interface IObjModelOutput {
  page: number; 
  results: IMovies[]; 
  total_pages: number; 
  total_results: number;
};

interface IGenre {
  id: number;
  name: String;
};

export interface IGenresOutputData {
  genres: IGenre[];
};