import { useQuery } from "react-query";

import { apis } from "../../services/movies/apiMovies";

interface GenreListProps {
  setGenreId: (genre: string) => void;
};

export function GenreList ({ setGenreId }: GenreListProps) {
  const { data, isLoading, isError } = useQuery("genres", apis.getGenres);

  if ( isLoading ) {
    return <h2>Carr ......</h2>
  };

  if ( isError ) {
    return <h2>Algo deu errado!.</h2>
  };

  if ( data?.genres.length === 0 ) {
    <h2>Lista vazia!.</h2>
  };

  return (
    <>
      <button onClick={() => setGenreId("")}>
        Todos os filmes
      </button>
      <ul>
        {
          data?.genres.map((genre) => {
            return (
              <li key={genre.id}>
                <button onClick={() => setGenreId(String(genre.id))}>
                  {genre.name}
                </button>
              </li>
            )
          })
        }
      </ul>
    </>
  );
}; 