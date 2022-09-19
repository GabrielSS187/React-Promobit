import { Container_Styles } from "./styles";

import { ICrew } from "../../services/movies/types";

import { IGenre } from "../../services/movies/types";
import { ScoreChart } from "../scoreChart";
import { SynopsisMovie } from "../synopsisMovie";
import { ProducersMovie } from "../producersMovie";

interface MovieInfoProps {
  title: string;
  year: string;
  ageGroup: string;
  date: string;
  genres: IGenre[];
  hoursMovie: number;
  minutesMovie: number; 
  voteAverage: number;
  overview: string
  producers: ICrew[] | [];
  isLoading: boolean;
};

export function MovieInfo ({
  title,
  year,
  ageGroup,
  date,
  genres,
  hoursMovie,
  minutesMovie,
  voteAverage,
  overview,
  producers,
  isLoading
}: MovieInfoProps) {
  return (
    <Container_Styles>
          <div className="info-1">
              <h1>{title} ({year})</h1>
              <div className="info-i">
                  <p>
                  Faixa etária: {
                      ageGroup ? 
                      ageGroup
                      : 16
                    } anos
                  ,</p> 

                  <p>
                    Lançamento: <time>{date}  (BR)</time>,
                  </p>

                  <div>
                    <p>Tipos:</p>:
                    {
                      genres.length &&
                      genres?.map((genre) => {
                        return (
                          <p key={self.crypto.randomUUID()}>
                            <span>{genre.name} ,</span>
                          </p>
                        )
                      })
                    }
                  </div>
                  <p>
                    Duração:  <time>{`${hoursMovie}h ${minutesMovie}m`}</time>
                  </p>
              </div>
          </div>

          <div className="info-2">
              <ScoreChart voteAverage={voteAverage} />
                          
              <SynopsisMovie overview={overview} />

              <ProducersMovie
                producers={producers || []}
                isLoading={isLoading}
              />
          </div>
    </Container_Styles>
  );
};