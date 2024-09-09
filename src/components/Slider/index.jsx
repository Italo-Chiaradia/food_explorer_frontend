import { Card } from "../Card";
import { Container } from "./styles";
import { Navigation } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import {useAuth} from "../../hook/auth";
export function Slider({dishes}) {
  const {user} = useAuth();
  return (
    <Container
      modules={[Navigation]}
      loop={true}
      navigation
      breakpoints={{
        425: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        635: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
    >
      {
        dishes.map((dish, index) => (
          <SwiperSlide key={String(index)}>
            <Card data={dish}/>
          </SwiperSlide>
        ))
      }
      
    </Container>
  )
}