import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';
import {useGetProductListQuery} from "../../../store/api/alibazar.api";
import {Header} from "../../Layout/Header/Header";
import {Footer} from "../../Layout/Footer/Footer";
import {Breadcrumb} from "../../Elements/Breadcrumb";
import {SingleProduct} from "../../Elements/SingleProduct";
import {Loader} from "../../Elements/Loader";

export function Section() {
    const params = useParams()
    const [filter, setFilter] = useState({})
    const {isSuccess, isLoading, data} = useGetProductListQuery({
        category: params.category,
        page: 1,
        size: 20
    })

    useEffect(() => {
        setFilter({
            category: params.category
        })
    }, [params])
    return (
        <>
            <Header/>
            <main className="main">
                <Breadcrumb/>
                <section className="mt-50 mb-50">
                    <div className="container mb-30">
                        <div className="row flex-row-reverse">
                            <div className="col-lg-4-5">
                                <div className="shop-product-fillter">
                                    <div className="totall-product">
                                        <p>
                                            Мы нашли для вас
                                            <strong className="text-brand">
                                                {data?.totalCount && <span>{data.totalCount}</span>}
                                            </strong>
                                            позиции!
                                        </p>
                                    </div>
                                    <div className="sort-by-product-area">
                                        <div className="sort-by-cover mr-10">
                                            {/*<ShowSelect*/}
                                            {/*    selectChange={selectChange}*/}
                                            {/*    showLimit={showLimit}*/}
                                            {/*/>*/}
                                        </div>
                                        <div className="sort-by-cover">
                                            {/*<SortSelect/>*/}
                                        </div>
                                    </div>
                                </div>
                                <div className="row product-grid">
                                    {/*isLoading && <Loader/>*/}
                                    {isSuccess &&
                                        data?.data.map((product, i) => (
                                            <SingleProduct {...product} key={i}/>
                                        ))
                                    }
                                </div>

                                <div className="pagination-area mt-15 mb-sm-5 mb-lg-0">
                                    <nav aria-label="Page navigation example">
                                        {/*<Pagination*/}
                                        {/*    getPaginationGroup={*/}
                                        {/*        getPaginationGroup*/}
                                        {/*    }*/}
                                        {/*    currentPage={currentPage}*/}
                                        {/*    pages={pages}*/}
                                        {/*    next={next}*/}
                                        {/*    prev={prev}*/}
                                        {/*    handleActive={handleActive}*/}
                                        {/*/>*/}
                                    </nav>
                                </div>
                            </div>
                            <div className="col-lg-1-5 primary-sidebar sticky-sidebar">
                                <div className="sidebar-widget widget-category-2 mb-30">
                                    <h5 className="section-title style-1 mb-30">
                                        Category
                                    </h5>
                                    {/*<CategoryProduct/>*/}
                                </div>

                                <div className="sidebar-widget price_range range mb-30">
                                    <h5 className="section-title style-1 mb-30">Fill by price</h5>

                                    <div className="price-filter">
                                        <div className="price-filter-inner">
                                            <br/>
                                            {/*<PriceRangeSlider/>*/}

                                            <br/>
                                        </div>
                                    </div>

                                    <div className="list-group">
                                        <div className="list-group-item mb-10 mt-10">
                                            <label className="fw-900">
                                                Color
                                            </label>
                                            {/*<VendorFilter/>*/}
                                            <label className="fw-900 mt-15">
                                                Item Condition
                                            </label>
                                            {/*<SizeFilter/>*/}
                                        </div>
                                    </div>
                                    <br/>
                                </div>

                                <div className="sidebar-widget product-sidebar  mb-30 p-30 bg-grey border-radius-10">
                                    <h5 className="section-title style-1 mb-30">New products</h5>
                                    <div className="single-post clearfix">
                                        <div className="image">
                                            <img
                                                src="/assets/imgs/shop/thumbnail-3.jpg"
                                                alt="#"
                                            />
                                        </div>
                                        <div className="content pt-10">
                                            <h5>
                                                <a>Chen Cardigan</a>
                                            </h5>
                                            <p className="price mb-0 mt-5">
                                                $99.50
                                            </p>
                                            <div className="product-rate">
                                                <div
                                                    className="product-rating"
                                                    style={{width: "90%"}}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-post clearfix">
                                        <div className="image">
                                            <img
                                                src="/assets/imgs/shop/thumbnail-4.jpg"
                                                alt="#"
                                            />
                                        </div>
                                        <div className="content pt-10">
                                            <h6>
                                                <a>Chen Sweater</a>
                                            </h6>
                                            <p className="price mb-0 mt-5">
                                                $89.50
                                            </p>
                                            <div className="product-rate">
                                                <div
                                                    className="product-rating"
                                                    style={{width: "80%"}}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-post clearfix">
                                        <div className="image">
                                            <img
                                                src="/assets/imgs/shop/thumbnail-5.jpg"
                                                alt="#"
                                            />
                                        </div>
                                        <div className="content pt-10">
                                            <h6>
                                                <a>Colorful Jacket</a>
                                            </h6>
                                            <p className="price mb-0 mt-5">
                                                $25
                                            </p>
                                            <div className="product-rate">
                                                <div
                                                    className="product-rating"
                                                    style={{width: "60%"}}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="banner-img wow fadeIn mb-lg-0 animated d-lg-block d-none">
                                    <img
                                        src="/assets/imgs/banner/banner-11.png"
                                        alt=""
                                    />
                                    <div className="banner-text">
                                        <span>Oganic</span>
                                        <h4>
                                            Save 17% <br/>
                                            on{" "}
                                            <span className="text-brand">
                                                Oganic
                                            </span>
                                            <br/>
                                            Juice
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}
