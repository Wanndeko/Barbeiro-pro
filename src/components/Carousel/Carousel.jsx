import alisamento from '../../assets/carro-imgs/alisamento.png'
import barba from '../../assets/carro-imgs/barba.png'
import corte from '../../assets/carro-imgs/corte.png'
import degrade from '../../assets/carro-imgs/degrade.png'
import sobrancelha from '../../assets/carro-imgs/sobrancelha.png'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import CardsCaro from '../Cards/Cards';
// import './styles.css';


import { Pagination, Navigation } from 'swiper/modules';
import { Container } from './style'

export default function Carousel() {
  return (
    <>
      <Container>
        <div >
          <h2>CONQUISTE SEUS CLIENTES
            COM TÉCNICAS PROFISSIONAIS</h2>
          <p>
            VEJA UM POUCO DO QUE TE AGUARDA NO TREINAMENTO
          </p>
        </div>
        <Swiper
          slidesPerView={4}
          spaceBetween={1}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide><img src={alisamento} alt="" /></SwiperSlide>
          <SwiperSlide><img src={barba} alt="" /></SwiperSlide>
          <SwiperSlide><img src={corte} alt="" /></SwiperSlide>
          <SwiperSlide><img src={degrade} alt="" /></SwiperSlide>
          <SwiperSlide><img src={sobrancelha} alt="" /></SwiperSlide>
        </Swiper>
      </Container>
    </>
  );
}
