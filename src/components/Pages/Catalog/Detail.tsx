import React from 'react'
import {Header} from "../../Layout/Header/Header";
import {Footer} from "../../Layout/Footer/Footer";
import {Breadcrumb} from "../../Elements/Breadcrumb";
import {useParams} from 'react-router-dom';
import {ProductDetails} from "../../Elements/Catalog/ProductDetails";
import {useGetProductDetailQuery} from "../../../store/api/alibazar.api";

export function Detail() {
    const params = useParams()
    const {isSuccess, isLoading, data: product} = useGetProductDetailQuery({
        id: params.id,
    })

    return (
        <>
            <Header/>
            <main className="main">
                <Breadcrumb/>
                <div className="container">
                    {isSuccess && <ProductDetails {...product} />}
                </div>
            </main>
            <Footer/>
        </>
    )
}
