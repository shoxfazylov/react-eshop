import {useState} from "react";
import {useMainFeatureProductsQuery} from "../../../store/api/alibazar.api";
import {useNavigate} from 'react-router-dom';
import {SingleProduct} from "../SingleProduct";

export const FeatureProducts = () => {
    const [active, setActive] = useState("all");
    const {isLoading, isError, data: products} = useMainFeatureProductsQuery('', {
        refetchOnFocus: true
    })
    const hits = [
        ['all', "Все"],
        ['discounts', "Акция"],
        ['hit', "Хит"],
        ['new', "Новинка"],
    ]

    const navigate = useNavigate()
    const selectCategory = (e: any, category: string) => {
        setActive(category)
    }
    return (
        <>
            <section className="product-tabs section-padding position-relative">
                <div className="container">
                    <div className="row">
                        <div className="section-title style-2 wow animate__animated animate__fadeIn">
                            <h3>Популярное</h3>
                            <ul className="nav nav-tabs links" id="myTab" role="tablist">
                                {hits.map(hit => (<li className="nav-item" role="presentation" key={hit[0]}>
                                        <button
                                            className={
                                                active === hit[0] ? "nav-link active" : "nav-link"
                                            }
                                            onClick={(e) => selectCategory(e, hit[0])}
                                        >
                                            {hit[1]}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="tab-content wow fadeIn animated">
                            {hits.map(hit => (<div
                                    key={hit[0]}
                                    className={
                                        active === hit[0]
                                            ? "tab-pane fade show active"
                                            : "tab-pane fade"
                                    }
                                >
                                    <div className="product-grid-4 row">
                                        {products?.filter(product => Object.keys(product.properties.hit).includes(hit[0]))
                                            .map(product => (<SingleProduct {...product} key={product.id}/>))
                                        }
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
