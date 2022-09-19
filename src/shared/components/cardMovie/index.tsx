import { formatDate } from "../../utils/formatDate";

import { Container_Styles, Img_Styles } from "./styles";

interface ICardMovieProps {
  tittle: string;
  imgUrl: string;
  date: Date;
};

export function CardMovie ({
  tittle,
  imgUrl,
  date,
}: ICardMovieProps) {

  return (
    <Container_Styles>
      <Img_Styles 
        src={`https://image.tmdb.org/t/p/original/${imgUrl}`} 
        alt={tittle}
        loading="lazy"
      />
      <h3>{tittle}</h3>
      <time>{formatDate(date, "full")}</time>
    </Container_Styles>
  );
};