import { useState } from "react";
import SwiperCore, { Navigation, Thumbs } from "swiper";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from "swiper/react";
import {IProduct} from "../../../models/models";

SwiperCore.use([Navigation, Thumbs]);

export const ThumbSlider = (product: IProduct) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

    return (
        <div>
            <Swiper
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                className="mySwiper2"
            >
                {product.photos && product.photos.map((photo, i) => (
                    <SwiperSlide key={i}><img src={photo} /></SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                className="mySwiper"
            >
                {product.photos && product.photos.map((photo,i) => (
                    <SwiperSlide key={i}><img src={photo} /></SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

