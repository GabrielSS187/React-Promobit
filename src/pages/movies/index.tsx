import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { apis } from "../../shared/services/movies/apiMovies";
import { useQuery } from "react-query";

import { motion } from "framer-motion";

import { Pagination } from "../../shared/components/pagination";
import { GenreList } from "../../shared/components/genreList";
import { Header } from "../../shared/components/header";
import { CardMovie } from "../../shared/components/cardMovie";

import { Load } from "../../shared/components/load";

import { IMovies } from "../../shared/services/movies/types";

import { 
  ContainerListMovies_Styles, 
  Ul_Styles,
 } from "./styles";

export function Movies () {
  const [ currentPage, setCurrentPage ] = useState<number>(1);
  const [ genreId, setGenreId ] = useState<string>("");

  const MINUTES_5 = 5000 * 60;

  const { data, isLoading, isError, refetch } = 
  useQuery("movies", () => apis.getMovies(currentPage), {
    refetchOnWindowFocus: false,
    staleTime: MINUTES_5,
  });

  useEffect(() => {
   refetch();
  //  window.scrollTo(0, 0); 
  }, [currentPage]);

  const navigate = useNavigate();

  const filterGenres = genreId.length > 0 ? data?.results.filter((movies) => {
    return movies.genre_ids.join("").includes(genreId);
  }) : data?.results;

  if ( isLoading ) {
    return <Load />;
  };

  if ( isError ) {
    return <h2>Algo deu errado!.</h2>
  };

  if ( data?.results.length === 0 ) {
    <h2>Lista vazia!.</h2>
  };
  
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 0 }}
      transition={{
        type: "spring",
        duration: .5,
        damping: 5,
        mass: .2,
        stiffness: 150,
       }}
    >
        <div>
            <Header />
            <GenreList 
              genreId={genreId}
              setGenreId={setGenreId}
            />
        </div>

        <br />

        <ContainerListMovies_Styles id="movies">
            <Ul_Styles>
              {
                filterGenres!.length ? 
                  filterGenres?.map((movie: IMovies) => {
                    return(
                      <li key={movie.id} 
                          onClick={() => navigate(`/details/${movie.id}`)}
                      >
                        <CardMovie 
                          tittle={movie.title}
                          imgUrl={movie.poster_path!}
                          date={new Date(movie.release_date)}
                        />
                      </li>
                    )
                  })
                :
                  (<h2>Nada encontrado!</h2>)
              }
            </Ul_Styles>

            <br /><br />

            <Pagination 
              setCurrentPage={setCurrentPage}
            />
        </ContainerListMovies_Styles>
    </motion.div>
  );
};