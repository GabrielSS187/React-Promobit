import { useWindowDimensions } from "../../hooks/useWindowDimensions";

import { SwiperProps, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectCards } from "swiper";
import "swiper/css/effect-cards";

import { SliderComponent } from "../sliderComponent";

import { ICast } from "../../services/movies/types";

import imgNotFoundPerson from "../../assets/imgs/img-not-found-person.png";

import { Container_Styles, Card_Styles } from "./styles";

interface IMovieActorsProps {
  actorsList: ICast[] | undefined;
  isLoading: boolean;
};

function settingsResponsive (width: number) {
  const settings: SwiperProps = {
    spaceBetween: 30,
    slidesPerView: width < 700 ? 2 : 3,
    centeredSlides: width < 700 && true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination:  {
      clickable: true,
      type: "fraction",
    },
    navigation: false,
    modules: [Autoplay, Pagination, Navigation, EffectCards],
    effect: width < 700 ? "cards" : "slide",
  };

  return settings;
};

export function MovieActors ({ actorsList, isLoading }: IMovieActorsProps) {

  const { width } = useWindowDimensions();

  if ( isLoading ) {
    return <p>Carregando...</p>
  };

  return (
    <Container_Styles>
      <h1>Elenco original</h1>
      <div>
        <SliderComponent settings={settingsResponsive(width)}>
            {
              actorsList?.map((actor) => {
                return (
                  <SwiperSlide key={actor.id}>
                      <Card_Styles>
                          <img src={
                            actor.profile_path ? `https://image.tmdb.org/t/p/original/${actor.profile_path}`
                            : 
                            imgNotFoundPerson
                          } alt={actor.name} />
                          <h4>{actor.name}</h4>
                          <h5>{actor.character}</h5>
                      </Card_Styles>
                  </SwiperSlide>
                )
              })
            }
        </SliderComponent>
      </div>
    </Container_Styles>
  );
};