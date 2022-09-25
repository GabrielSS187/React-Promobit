import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useQuery } from "react-query";
import { apis } from "../../shared/services/movies/apiMovies";

import { Header } from "../../shared/components/header";
import { MovieImg } from "../../shared/components/movieImg";
import { MovieInfo } from "../../shared/components/movieInfo";
import { MovieVideo } from "../../shared/components/movieVideo";
import { MovieActors } from "../../shared/components/movieActors";
import { MovieRecommendations } from "../../shared/components/movieRecommendations";

import { motion } from "framer-motion";

import { Load } from "../../shared/components/load";

import { formatDate } from "../../shared/utils/formatDate";

import { 
  Container_Styles,
  Container_Information_Styles,
 } from "./styles";


export function MovieDetails () {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const movieDetails =
   useQuery("details", () => apis.getMovie(Number(id)), {
    refetchOnWindowFocus: false,
   });
   
  const releaseDate = 
   useQuery("release_date", () => apis.getReleaseDate(Number(id)), {
    refetchOnWindowFocus: false,
  });
  
  const creditsMovie = 
  useQuery("credits", () => apis.getCredits(Number(id)), {
    refetchOnWindowFocus: false,
  });

  if ( movieDetails.isLoading ) {
    return <Load />;
  };
  
  if ( movieDetails.isError ) {
    return <h2>Algo deu errado!.</h2>;
  };
  
  

  const getYearDate = 
  movieDetails.data?.release_date?.split("-")[0];

  const fullDateBR = 
  formatDate(new Date(movieDetails?.data?.release_date!), "short");

  const findReleaseDateActualMovie = 
  releaseDate.data?.results?.find((iso) => iso.iso_3166_1 === "BR");

  //* Idade Ex: 14 anos;
  const certification = 
  findReleaseDateActualMovie?.release_dates[0];

  const hoursMovie = Math.floor(movieDetails.data?.runtime!  / 60);
  const minutesMovie = movieDetails.data?.runtime! % 60;

  const producersSectors = creditsMovie.data?.crew.filter((producer) => {
    if (["Characters", "Director", "Writer"].includes(producer.job)){
      return producer;
    };
  });

  const movieCast = creditsMovie.data?.cast;

  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{duration: .5}}
    >
        <Container_Styles>
          <div className="section-1">
              <Header />
              <Container_Information_Styles>
                      <MovieImg
                        title={movieDetails.data?.title!}
                        img={`https://image.tmdb.org/t/p/original/${movieDetails.data?.poster_path}`}
                      />  

                        <MovieInfo
                          title={movieDetails.data?.title!}
                          year={getYearDate!}
                          ageGroup={certification?.certification!}
                          date={fullDateBR}
                          genres={movieDetails.data?.genres!}
                          hoursMovie={hoursMovie}
                          minutesMovie={minutesMovie}
                          voteAverage={movieDetails.data?.vote_average!}
                          overview={movieDetails.data?.overview!}
                          producers={producersSectors || []}
                          isLoading={creditsMovie.isLoading}
                        />
              </Container_Information_Styles>
          </div>
          
          <div className="section-2">
              <MovieActors 
                actorsList={movieCast} 
                isLoading={creditsMovie.isLoading}
              />

              <MovieVideo
                idMovie={Number(id)}
              />

              <MovieRecommendations 
                idMovie={Number(id)}
              />
          </div>
        </Container_Styles>
    </motion.div>
  );
};