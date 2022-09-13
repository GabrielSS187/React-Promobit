import { useParams } from "react-router-dom";

import { useQuery } from "react-query";
import { apis } from "../../shared/services/movies/apiMovies";

export function MovieDetails () {
  const { id } = useParams();

  const { data, isLoading, isError }
   = useQuery("details", () => apis.getMovie(Number(id)));

   if ( isLoading ) {
    return <h2>Carr ......</h2>
  };

  if ( isError ) {
    return <h2>Algo deu errado!.</h2>
  };

  return (
    <>
      <data>
        <h1>{data?.title}</h1>
      </data>
    </>
  );
};