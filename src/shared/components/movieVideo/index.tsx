import { useQuery } from "react-query";

import ReactPlayer, { YouTubeConfig } from "react-player/youtube";

import { apis } from "../../services/movies/apiMovies";

import  imgVideoNotFound from "../../assets/imgs/video-not-found.png"

import { Container_Styles } from "./styles";

interface IMovieVideosPros {
  idMovie: number;
};

export function MovieVideo ({ idMovie }: IMovieVideosPros) {

  const { data, isLoading } = useQuery("video", () => apis.getVideoMovie(idMovie), {
    refetchOnWindowFocus: false,
  });
  const isoBr = data?.results[0];

  if ( isLoading ) {
    return <p>Carregando...</p>
  };

  const config: YouTubeConfig = {
    playerVars : {  showinfo : 1  },
  };
  
  return (
    <Container_Styles>
      <h1>Trailer</h1>
      <div>
          {
            isoBr ?
            (
              <ReactPlayer 
                config={config}
                url={`https://www.youtube.com/watch?v=${isoBr?.key}`}
                width="100%"
                height="100%"
                controls={true}
              />
            )
          :
            (<img src={imgVideoNotFound} alt="video not found"/>)
          }
      </div>
    </Container_Styles>
  );
};