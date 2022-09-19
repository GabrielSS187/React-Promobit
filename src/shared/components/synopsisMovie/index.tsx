import { Container_Styles } from "./styles";

interface SynopsisMovieProps {
  overview: string;
};

export function SynopsisMovie ({ overview }: SynopsisMovieProps) {
  return (
    <Container_Styles>
      <h3>Sinopse</h3>
      <p>{overview}</p>
    </Container_Styles>
  );
};