import { Swiper, SwiperProps } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

interface SwiperComponentProps {
  settings: SwiperProps;
  children: React.ReactNode;
};

export const settingsDefault: SwiperProps = {
  spaceBetween: 30,
  slidesPerView: 1,
  centeredSlides: false,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination:  {
    clickable: true,
  },
  navigation: false,
  modules: [Autoplay, Pagination, Navigation],
  effect: "slide"
};


export function SliderComponent ({ settings,  children }: SwiperComponentProps) {
  return (<Swiper {...settings}>{children}</Swiper>);
};

