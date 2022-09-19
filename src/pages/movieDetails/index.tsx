import { useParams } from "react-router-dom";

import { useQuery } from "react-query";
import { apis } from "../../shared/services/movies/apiMovies";

import { Header } from "../../shared/components/header";
import { MovieImg } from "../../shared/components/movieImg";
import { MovieInfo } from "../../shared/components/movieInfo";
import { ProducersMovie } from "../../shared/components/producersMovie";
import { ScoreChart } from "../../shared/components/scoreChart";
import { SynopsisMovie } from "../../shared/components/synopsisMovie";

import { formatDate } from "../../shared/utils/formatDate";

import { 
  Container_Styles,
  Container_Information_Styles,
 } from "./styles";
import { useEffect, useState } from "react";

export function MovieDetails () {
  const { id } = useParams();

  const movieDetails =
   useQuery("details", () => apis.getMovie(Number(id)));

  const releaseDate = 
  useQuery("release_date", () => apis.getReleaseDate(Number(id)));

  const creditsMovie = 
  useQuery("credits", () => apis.getCredits(Number(id)));

  if ( movieDetails.isLoading || creditsMovie.isLoading ) {
    return <h2>Carr ......</h2>
  };

  if ( movieDetails.isError ) {
    return <h2>Algo deu errado!.</h2>
  };

  const getYearDate = 
  movieDetails.data?.release_date?.split("-")[0];

  const fullDateBR = 
  formatDate(new Date(movieDetails?.data?.release_date!) ,"short");

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
    <Container_Styles>
        <div>
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
    </Container_Styles>
  );
};