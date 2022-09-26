import { useQuery } from "react-query";

import { apis } from "../../services/movies/apiMovies";

import { 
  Button_Styles, 
  Container_Styles, 
  Ul_Styles,
  Header_Styles
} from "./styles";

interface GenreListProps {
  genreId: string;
  setGenreId: (genre: string) => void;
};

export function GenreList ({ setGenreId, genreId }: GenreListProps) {
  const { data, isLoading, isError } = useQuery("genres", apis.getGenres, {
    refetchOnWindowFocus: false,
  });

  if ( isLoading ) {
    return <h2>Carregando ......</h2>
  };

  if ( isError ) {
    return <h2>Algo deu errado!.</h2>
  };

  if ( data?.genres.length === 0 ) {
    <h2>Lista vazia!.</h2>
  };

  return (
    <Container_Styles>
      <Header_Styles>
        <h1>
          Milhões de filmes, séries e pessoas para
          descobrir. Explore já.
        </h1>
        <h4>FILTRE POR:</h4>
      </Header_Styles>

      <Ul_Styles>
          <Button_Styles 
            className={genreId === "" ? "isActive" : ""}
            onClick={() => setGenreId("")}
          >
            Todos os filmes
          </Button_Styles>
        {
          data?.genres.map((genre) => {
            return (
              <li key={genre.id}>
                <Button_Styles  
                    className={genreId === String(genre.id) ? "isActive" : ""}
                    onClick={() => setGenreId(String(genre.id))}
                  >
                  <a href="#movies">{genre.name}</a>
                </Button_Styles>
              </li>
            )
          })
        }
      </Ul_Styles>
    </Container_Styles>
  );
}; 