import {Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

import 'swiper/css';
import "swiper/css/navigation";
import {useMainFeatureCategoriesQuery} from "../../../store/api/alibazar.api";
import {useNavigate} from 'react-router-dom';

export const FeatureCategories = () => {
    const {isLoading, isError, data: sections} = useMainFeatureCategoriesQuery('', {
        refetchOnFocus: true
    })

    const navigate = useNavigate()
    const selectCategory = (e: any, category: string) => {
        e.preventDefault();
        navigate('/catalog/' + category + '/');
    }

    return (
        <section className="popular-categories section-padding">
            <div className="container wow animate__fadeIn animate__animated">
                <div className="section-title">
                    <div className="title">
                        <h3>Популярные категории</h3>
                    </div>
                </div>
                <div className="carausel-10-columns-cover position-relative">
                    <div className="carausel-10-columns" id="carausel-10-columns">
                        <Swiper
                            modules={[Navigation]}
                            autoplay={true}
                            navigation={{
                                prevEl: ".custom_prev_ct1",
                                nextEl: ".custom_next_ct1"
                            }}
                            className="custom-class"
                            breakpoints={{
                                480: {
                                    slidesPerView: 2
                                },
                                640: {
                                    slidesPerView: 3
                                },
                                768: {
                                    slidesPerView: 5
                                },
                                1024: {
                                    slidesPerView: 8
                                }
                            }}
                        >
                            {sections?.map(section => (<SwiperSlide key={section.id}>
                                <div className={`card-2 wow animate__animated animate__fadeInUp cursor`}
                                     onClick={(e) => selectCategory(e, section.code)}>
                                    <figure className=" img-hover-scale overflow-hidden">
                                        <a>
                                            <img src={section.picture}
                                                 alt={section.name}/>
                                        </a>
                                    </figure>
                                    <h6>{section.name}</h6>
                                </div>
                            </SwiperSlide>))}
                        </Swiper>
                        <div className="slider-arrow slider-arrow-2 flex-right carausel-10-columns-arrow"
                             id="carausel-10-columns-arrows">
                            <span className="slider-btn slider-prev slick-arrow custom_prev_ct1">
                                <i className="fi-rs-arrow-small-left"></i>
                            </span>
                            <span className="slider-btn slider-next slick-arrow custom_next_ct1">
                                <i className="fi-rs-arrow-small-right"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
