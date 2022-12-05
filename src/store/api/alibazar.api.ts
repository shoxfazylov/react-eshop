import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {
    ServerResponse,
    ISlider,
    ICategories,
    IBanner,
    IProducts,
    IProduct,
    ServerResponseDetail
} from "../../models/models";
import {Http2ServerResponse} from "http2";
import {totalmem} from "os";

export const alibazarApi = createApi({
    reducerPath: 'alibazar/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://alibazar.uz/api/'
    }),
    refetchOnFocus: true,
    endpoints: build => {
        return ({
            mainSliders: build.query<ISlider[], string>({
                query: () => ({
                    url: 'banners/main/'
                }),
                transformResponse: (response: ServerResponse<ISlider>) => response.data
            }),
            mainFeatureCategories: build.query<ICategories[], string>({
                query: () => ({
                    url: 'catalog/section/popular/'
                }),
                transformResponse: (response: ServerResponse<ICategories>) => response.data
            }),
            mainBanners: build.query<IBanner[], string>({
                query: () => ({
                    url: 'banners/advertising/'
                }),
                transformResponse: (response: ServerResponse<IBanner>) => response.data
            }),
            mainFeatureProducts: build.query<IProducts[], string>({
                query: () => ({
                    url: 'catalog/product/popular/'
                }),
                transformResponse: (response: ServerResponse<IProducts>) => response.data
            }),
            getProductList: build.query<ServerResponse<IProducts>, any>({
                query: (params: any) => ({
                    method: 'POST',
                    url: `catalog/${params.category}/`,
                    params: {...params}
                })
            }),
            getProductDetail: build.query<IProduct, any>({
                query: (params: any) => ({
                    method: 'POST',
                    url: `catalog/detail/${params.id}/`
                }),
                transformResponse: (response: ServerResponseDetail<IProduct>) => response.data
            }),
        });
    }
})

export const {
    useMainSlidersQuery,
    useMainBannersQuery,
    useMainFeatureCategoriesQuery,
    useMainFeatureProductsQuery,
    useLazyGetProductListQuery,
    useGetProductListQuery,
    useGetProductDetailQuery
} = alibazarApi
