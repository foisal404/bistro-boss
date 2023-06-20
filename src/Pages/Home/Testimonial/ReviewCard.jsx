import { SwiperSlide } from "swiper/react";

import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const ReviewCard = ({review}) => {
    const {name,details,rating}=review;
    return (
        <div className="text-center mx-auto px-32">
            <Rating style={{ maxWidth: 180 }} value={rating} readOnly  className="mx-auto"/>
            <svg  className="mx-auto my-10 h-24 w-24"  viewBox="0 0 32 32" width="32" height="32" stroke="currentColor" fill="currentColor"><path d="M13.8 2.8C8.2 3.2 0 4.1 0 15.2v14h12.7v-15H8.5C8.2 10.3 11.5 9.2 15 8.4l-1.2-5.6z m17 0c-5.7 0.4-13.8 1.3-13.8 12.4v14h12.6v-15H25.4C25.1 10.3 28.4 9.2 32 8.4l-1.2-5.6z"  /></svg>
            <p>{details}</p>
            <h2 className="text-4xl text-amber-600"> {name}</h2>
            
        </div>
    );
};

export default ReviewCard;