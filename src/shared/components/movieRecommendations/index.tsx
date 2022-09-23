import { useCallback } from "react";

import { useQuery } from "react-query";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";

import { apis } from "../../services/movies/apiMovies";

import { SwiperProps, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation,  EffectCoverflow} from "swiper";
import "swiper/css/effect-coverflow";

import { SliderComponent } from "../sliderComponent";

import { formatDate } from "../../utils/formatDate";

import imgNotFoundMovie from "../../assets/imgs/image-not-found-movie.jpg"

import { Container_Styles, Li_Styles } from "./styles";

interface IMoviesRecommendationsProps {
  idMovie: number;
};

const settingsFix: SwiperProps = {
  spaceBetween: 30,
  slidesPerView: 3,
  centeredSlides: false,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination:  {
    clickable: true,
    type: "fraction",
  },
  navigation: false,
  modules: [Autoplay, Pagination, Navigation, EffectCoverflow],
  effect: "coverflow"
};

function settingsResponsive (width: number) {
  const widthMedia1 = width < 555;

  const settingsMobile: SwiperProps = {
    ...settingsFix,
    spaceBetween: 3,
    slidesPerView: widthMedia1 ? 1 : 2 ,
    navigation: false,
    modules: [Autoplay, Pagination, Navigation],
    effect: "slide",
  };

  return settingsMobile;
};

export function MovieRecommendations ({ idMovie }: 
  IMoviesRecommendationsProps) {

    const { data, isLoading } = 
    useQuery("recommendations", () => apis.getMovieRecommendations(idMovie), {
      refetchOnWindowFocus: false,
    });
  
    const { width } = useWindowDimensions();
    
    if ( isLoading ) {
      (<p>Carregando...</p>);
    };

    const clickRecommendation = useCallback((id: number) => {
      window.location.replace(`/details/${id}`);
    }, [idMovie]);
    
  return (
    <Container_Styles>
      <h1>Recomendações</h1>
      <ul className="ul-responsive">
          <SliderComponent settings={settingsResponsive(width)}>
                {
                  data?.results.map((movie) => {
                    return (
                      <SwiperSlide key={movie.id}>
                          <Li_Styles onClick={() => clickRecommendation(movie.id)}>
                              <img 
                                src={movie.backdrop_path ? 
                                  `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
                                  :
                                  imgNotFoundMovie
                                } 
                                alt={movie.title} 
                              />
                              <h4>{movie.title}</h4>
                              <time>{formatDate(new Date(movie.release_date), "medium")}</time>
                          </Li_Styles>
                      </SwiperSlide>
                    )
                  })
                }
            </SliderComponent>
      </ul>

      <ul className="ul-fixe">
          <SliderComponent settings={settingsFix}>
              {
                data?.results.map((movie) => {
                  return (
                    <SwiperSlide 
                      key={movie.id} 
                    >
                        <Li_Styles onClick={() => clickRecommendation(movie.id)}>
                              <img 
                                src={movie.backdrop_path ? 
                                  `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
                                  :
                                  imgNotFoundMovie
                                } 
                                alt={movie.title} 
                              />
                            <h4>{movie.title}</h4>
                            <time>{formatDate(new Date(movie.release_date), "medium")}</time>
                        </Li_Styles>
                    </SwiperSlide>
                  )
                })
              }
          </SliderComponent>
      </ul>
    </Container_Styles>
  );
};