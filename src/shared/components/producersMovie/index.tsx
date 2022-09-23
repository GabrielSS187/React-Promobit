import { useWindowDimensions } from "../../hooks/useWindowDimensions";

import { SwiperProps, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectCards, EffectCube } from "swiper";
import "swiper/css/effect-cards";
import "swiper/css/effect-cube";

import { SliderComponent, settingsDefault } from '../sliderComponent';

import imgNotFoundPerson from "../../assets/imgs/img-not-found-person.png";

import {
  Container_Styles_Responsive,
  Container_Styles_Fixe,
  Card_Styles_Responsive,
  Card_Styles_Fixe
 } from "./styles";

import { ICrew } from "../../services/movies/types";

interface ProducersMovieProps {
  producers: ICrew[] | [];
  isLoading: boolean;
};

function settingsResponsive (arrayLength: number, width: number) {
  const widthMedia2 = width < 500;
 
  const settings: SwiperProps = {
    ...settingsDefault,
    centeredSlides: false,
    slidesPerView: 3,
    pagination:  {
      clickable: true,
      type: "progressbar",
    },
    modules: [Autoplay, Pagination, Navigation, EffectCards, EffectCube],
    effect: arrayLength > 3 && widthMedia2 ? "cube" : "slide",
  };

    return settings;
  };

  const settingsFixe: SwiperProps = {
    ...settingsDefault,
    centeredSlides: false,
    slidesPerView: 3,
  };

export function ProducersMovie ({ producers, isLoading }: ProducersMovieProps) {

  const { width } = useWindowDimensions();

  if ( isLoading ) {
    return <h2>Carr ......</h2>
  };

  return (
    <>
      {
          width < 1000 ?
        (
            <Container_Styles_Responsive numberProducers={producers.length}>
                <ul>
                    <SliderComponent settings={settingsResponsive(producers.length, width)}>
                        {
                          producers?.map((producer) => {
                            return (
                              <SwiperSlide key={self.crypto.randomUUID()}>
                                  <Card_Styles_Responsive numberProducers={producers.length}>
                                      <img
                                          src={
                                            producer.profile_path ?
                                            `https://image.tmdb.org/t/p/original/${producer.profile_path}`
                                            : 
                                            imgNotFoundPerson
                                          } 
                                          alt={producer.name} 
                                        />
                                        <h4>{producer.name}</h4>
                                        <h5>{producer.job}</h5>
                                    </Card_Styles_Responsive>
                                </SwiperSlide>
                            )
                          })
                        }
                    </SliderComponent>
                </ul>
            </Container_Styles_Responsive>
          )
        :
          (
            <Container_Styles_Fixe>
                <ul>
                    <SliderComponent settings={settingsFixe}>
                        {
                          producers?.map((producer) => {
                            return (
                              <SwiperSlide key={self.crypto.randomUUID()}>
                                  <Card_Styles_Fixe numberProducers={producers.length}>
                                      <img
                                        src={
                                          producer.profile_path ?
                                          `https://image.tmdb.org/t/p/original/${producer.profile_path}`
                                          : 
                                          imgNotFoundPerson
                                        } 
                                        alt={producer.name} 
                                      />
                                      <h4>{producer.name}</h4>
                                      <h5>{producer.job}</h5>
                                  </Card_Styles_Fixe>
                              </SwiperSlide>
                            )
                          })
                        }
                    </SliderComponent>
                </ul>
            </Container_Styles_Fixe>
        )
      }
    </>
  );
};