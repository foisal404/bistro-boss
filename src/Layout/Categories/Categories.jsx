import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import img1 from '../../../src/assets/home/slide1.jpg';
import img2 from '../../../src/assets/home/slide2.jpg';
import img3 from '../../../src/assets/home/slide3.jpg';
import img4 from '../../../src/assets/home/slide4.jpg';
import img5 from '../../../src/assets/home/slide5.jpg';
import SectionTitles from "../../components/SectionTitles";

const Categories = () => {
  return (
    <section className="px-20 py-10">
        <SectionTitles heading={"ORDER ONLINE"} subHeading={"From 11:00am to 10:00pm"}></SectionTitles>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={img1} alt=""  className="mx-auto"/>
            <p className="text-center -mt-12  text-3xl uppercase text-white">Salads</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img2} alt="" className="mx-auto" />
            <p className="text-center -mt-12  text-3xl uppercase text-white">pizzas</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img3} alt="" className="mx-auto"/>
            <p className="text-center -mt-12  text-3xl uppercase text-white">Soups</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img4} alt="" className="mx-auto"/>
            <p className="text-center -mt-12  text-3xl uppercase text-white">Disserts</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img5} alt="" className="mx-auto"/>
            <p className="text-center -mt-12  text-3xl uppercase text-white">Salads</p>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Categories;
