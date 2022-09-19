import { Container_Styles, Img_Styles } from "./styles";

interface MovieTitleDateImgProps {
  title: string;
  img: string;
};

export function MovieImg ({ img, title }: MovieTitleDateImgProps) {
  return (
    <Container_Styles>
        <Img_Styles 
            src={`https://image.tmdb.org/t/p/original/${img}`} 
            alt={title} 
          />
    </Container_Styles>
  );
}; 