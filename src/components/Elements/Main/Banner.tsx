import React from "react";
import {useMainBannersQuery} from "../../../store/api/alibazar.api";
import {Link} from "react-router-dom";

export const Banner = () => {
    const {isLoading, isError, data: banners} = useMainBannersQuery('', {
        refetchOnFocus: true
    })
    return (
        <section className="banners mb-15">
            <div className="container">
                <div className="row">
                    {banners?.map(banner => (<div key={banner.id} className="col-lg-4 col-md-6">
                            <div
                                className="banner-img wow animate__animated animate__fadeInUp"
                                data-wow-delay="0"
                            >
                                <img src={banner.picture} alt={banner.name} />
                                <div className="banner-text">
                                    <h4>{banner.name}</h4>
                                    <Link to={banner.url} className="btn btn-xs">
                                        Подробнее <i className="fi-rs-arrow-small-right"></i>
                                    </Link>
                                </div>
                            </div>
                    </div>))}
                </div>
            </div>
        </section>
    );
};
