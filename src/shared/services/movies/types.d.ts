export interface IMovies {
  poster_path: string | null;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  genres: IGenre[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string | null;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
  runtime: number;
  status: string;
};

export interface IObjModelOutputData {
  page: number; 
  results: IMovies[]; 
  total_pages: number; 
  total_results: number;
};

export interface IGenre {
  id: number;
  name: String;
};

export interface IGenresOutputData {
  genres: IGenre[];
};

interface IReleaseDates {
  certification: string;
  iso_639_1: string;
  release_date: string
  type: number;
  note: string;
};

interface IIso {
  iso_3166_1: string;
  release_dates:IReleaseDates[];
};

export interface IReleaseDatesOutput {
  id: number;
  results: IIso[];
};

export interface ICast {
  adult: boolean;
  gender: number | null;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
};

export interface ICrew {
  adult: boolean;
  gender: number | null;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  credit_id: string;
  department: string;
  job: string;
};

export interface ICreditsMovie {
  id: number;
  cast: ICast[];
  crew: ICrew[];
};

export interface IVideoMovie {
  id: number;
  results: [{
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    key: string;
    site: string;
    size: number;
    type: string;
    official: boolean;
    published_at: string;
    id: string;
  }]
};