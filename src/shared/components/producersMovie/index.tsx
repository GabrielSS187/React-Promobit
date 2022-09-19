import { SwiperProps, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import { SliderComponent } from '../sliderComponent';

import { Container_Styles, Card_Styles } from "./styles";

import { ICrew } from "../../services/movies/types";

interface ProducersMovieProps {
  producers: ICrew[] | [];
  isLoading: boolean;
};

const settings: SwiperProps = {
  spaceBetween: 30,
  slidesPerView: 3,
  centeredSlides: false,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination:  {
    clickable: true,
  },
  navigation: true,
  modules: [Autoplay, Pagination, Navigation],
};

export function ProducersMovie ({ producers, isLoading }: ProducersMovieProps) {

  if ( isLoading ) {
    return <h2>Carr ......</h2>
  };

  return (
    <Container_Styles>
      {producers.length > 3 ? 
          <SliderComponent settings={settings}>
              {
                producers?.map((producer) => {
                  return (
                    <SwiperSlide key={self.crypto.randomUUID()}>
                        <Card_Styles numberProducers={producers.length}>
                            {producer.profile_path ? 
                                <img
                                  src={`https://image.tmdb.org/t/p/original/${producer.profile_path}`} 
                                  alt={producer.name} 
                                />
                              : 
                                <img
                                  src="https://tse2.mm.bing.net/th?id=OIP.ikgL353fKx1Z-74hQLE-sQHaHa&pid=Api&P=0" 
                                  alt={producer.name} 
                                />
                            }
                            <h4>{producer.name}</h4>
                            <h5>{producer.job}</h5>
                        </Card_Styles>
                    </SwiperSlide>
                  )
                })
              }
          </SliderComponent>
        :
          <>
            {
                producers?.map((producer) => {
                  return (
                      <Card_Styles 
                        key={self.crypto.randomUUID()}
                        numberProducers={producers.length}
                      >
                          {producer.profile_path ? 
                              <img src={`https://image.tmdb.org/t/p/original/${producer.profile_path}`} alt={producer.name} />
                            : 
                              <img src="https://tse2.mm.bing.net/th?id=OIP.ikgL353fKx1Z-74hQLE-sQHaHa&pid=Api&P=0" alt={producer.name} />
                          }
                          <h4>{producer.name}</h4>
                          <h5>{producer.job}</h5>
                      </Card_Styles>
                  )
                })
              }
          </>
        }    
      </Container_Styles>
  );
};