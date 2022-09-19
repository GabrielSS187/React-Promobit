import { useEffect } from "react";

import { Swiper, SwiperProps } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

interface SwiperComponentProps {
  settings: SwiperProps;
  children: React.ReactNode;
};

export function SliderComponent ({ settings,  children }: SwiperComponentProps) {
  return (<Swiper {...settings}>{children}</Swiper>);
};

