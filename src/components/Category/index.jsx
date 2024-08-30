import "swiper/css";
import "swiper/css/navigation";
import { Card } from "../Card";
import { Container } from "./styles";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

export function Category({user, title, dishes}) {
  return (
    <Container>
      <h2>{title}</h2>
      
      <Swiper
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
              <Card user={user} data={dish}/>
            </SwiperSlide>
          ))
        }
        
      </Swiper>
    </Container>
  )
}