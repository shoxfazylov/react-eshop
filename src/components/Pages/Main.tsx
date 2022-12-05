import React from 'react'
import {Header} from "../Layout/Header/Header";
import {Footer} from "../Layout/Footer/Footer";
import {Slider} from "../Elements/Main/Slider";
import {FeatureCategories} from "../Elements/Main/FeatureCategories";
import {Banner} from "../Elements/Main/Banner";
import {FeatureProducts} from "../Elements/Main/FeatureProducts";


export function Main() {
    return (
        <>
            <Header/>
                <main className="main">
                    <Slider/>
                    <FeatureCategories/>
                    <Banner/>
                    <FeatureProducts/>
                </main>
            <Footer/>
        </>
    )
}
