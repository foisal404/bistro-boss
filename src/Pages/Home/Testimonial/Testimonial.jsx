import SectionTitles from "../../../components/SectionTitles";

import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

import { Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

const Testimonial = () => {
    const [reviews,setReviews]=useState([])
    useEffect(()=>{
        // fetch('reviews.json')
        fetch('http://localhost:5000/review')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
  return (
    <div className="py-10 px-20">
      <SectionTitles
        subHeading={"What Our Clients Say"}
        heading={"TESTIMONIALS"}
      ></SectionTitles>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
            reviews.map(review=><SwiperSlide  key={review._id} ><ReviewCard review={review}></ReviewCard></SwiperSlide>)
        }
      </Swiper>
      
    </div>
  );
};

export default Testimonial;
