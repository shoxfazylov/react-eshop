import {Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import "swiper/css/navigation";
import {useMainSlidersQuery} from "../../../store/api/alibazar.api";


export const Slider = () => {
    const {isLoading, isError, data: slider} = useMainSlidersQuery('', {
        refetchOnFocus: true
    })
    return (
        <section className="home-slider position-relative mb-30">
            <div className="container">
                <div className="home-slide-cover mt-30">
                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            prevEl: ".custom_prev_i1", nextEl: ".custom_next_i1",
                        }}
                        className="hero-slider-1 style-4 dot-style-1 dot-style-1-position-1"
                    >
                        {slider?.map(slide => (<SwiperSlide key={slide.id}>
                            <div
                                className="single-hero-slider single-animation-wrap"
                                style={{backgroundImage: `url(${slide.picture})`}}
                            >
                            </div>
                        </SwiperSlide>))}
                    </Swiper>
                    <div className="slider-arrow hero-slider-1-arrow">
                        <span className="slider-btn slider-prev slick-arrow custom_prev_i1">
                            <i className="fi-rs-angle-left"></i>
                        </span>
                        <span className="slider-btn slider-next slick-arrow custom_next_i1">
                            <i className="fi-rs-angle-right"></i>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};
