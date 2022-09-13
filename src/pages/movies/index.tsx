import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { apis } from "../../shared/services/movies/apiMovies";
import { useQuery } from "react-query";

import { Pagination } from "../../shared/components/pagination";
import { GenreList } from "../../shared/components/genreList";

import { IMovies } from "../../shared/services/movies/types";

import { Container_Styles } from "./styles";

export function Movies () {
  const [ currentPage, setCurrentPage ] = useState<number>(1);
  const [ genreId, setGenreId ] = useState<string>("");

  const { data, isLoading, isError, refetch } = 
  useQuery("movies", () => apis.getMovies(currentPage));

  useEffect(() => {
   refetch(); 
  }, [currentPage]);

  const navigate = useNavigate();

  const filterGenres = genreId.length > 0 ? data?.results.filter((movies) => {
    return movies.genre_ids.join("").includes(genreId);
  }) : data?.results;

  if ( isLoading ) {
    return <h2>Carr ......</h2>
  };

  if ( isError ) {
    return <h2>Algo deu errado!.</h2>
  };

  if ( data?.results.length === 0 ) {
    <h2>Lista vazia!.</h2>
  };
  
  return (
    <Container_Styles>
        <GenreList 
          setGenreId={setGenreId}
        />

        <br />

        <ul>
          {
            filterGenres!.length ? 
              filterGenres?.map((movie: IMovies) => {
                return(
                  <li key={movie.id} 
                      onClick={() => navigate(`/details/${movie.id}`)}
                  >
                    {movie?.original_title}
                  </li>
                )
              })
            :
              (<h2>Nada encontrado!</h2>)
          }
        </ul>

        <br />

        <Pagination 
          setCurrentPage={setCurrentPage}
        />
    </Container_Styles>
  );
};