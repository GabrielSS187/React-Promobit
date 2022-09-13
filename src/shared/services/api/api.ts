import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3"
});

// /movie/popular?api_key=97d81c8553bb84ebfda14b5f577bee4d&language=en-US&page=1"