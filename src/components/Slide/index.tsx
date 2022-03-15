import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'

import { SlideContainer } from './SlideContainer'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export function Slide() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className={`${'mySwiper'}`}
      color="#ffba08"
    >
      <SwiperSlide>
        <SlideContainer
          image="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=820&q=80"
          title="Europa"
          text="O continente mais antigo"
        />
      </SwiperSlide>

      <SwiperSlide>
        <SlideContainer
          image="https://images.unsplash.com/photo-1619546952812-520e98064a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
          title="América do Sul"
          text="Continente que compreende a porção meridional da América"
        />
      </SwiperSlide>

      <SwiperSlide>
        <SlideContainer
          image="https://images.unsplash.com/photo-1619546952812-520e98064a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
          title="América do Sul"
          text="Continente que compreende a porção meridional da América"
        />
      </SwiperSlide>

      <SwiperSlide>
        <SlideContainer
          image="https://images.unsplash.com/photo-1574236170878-f66e35f83207?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          title="Ásia"
          text="A Ásia é o maior dos continentes, tanto em área como em população"
        />
      </SwiperSlide>

      <SwiperSlide>
        <SlideContainer
          image="https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80"
          title="África"
          text="É o segundo continente mais populoso da Terra"
        />
      </SwiperSlide>

      <SwiperSlide>
        <SlideContainer
          image="https://images.unsplash.com/photo-1595897313080-4896d0999613?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          title="Oceania"
          text="Região geográfica composta por vários grupos de ilhas do oceano Pacífico"
        />
      </SwiperSlide>
    </Swiper>
  )
}
