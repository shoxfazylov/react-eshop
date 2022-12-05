import {IProducts} from "../../models/models";
import {Link} from "react-router-dom";

export const SingleProduct = (product: IProducts) => {
    return (
        <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
            <div className="product-cart-wrap mb-30">
                <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                        <Link to={`/catalog/${product.section_code}/${product.id}/`}>
                                <img
                                    className="default-img"
                                    src={product.picture}
                                    alt={product.name}
                                />
                                <img
                                    className="hover-img"
                                    src={product.picture}
                                    alt={product.name}
                                />
                        </Link>
                    </div>
                    {product.properties && product.properties.hit &&
                        <div className="product-badges product-badges-position product-badges-mrg">
                            {product.properties.hit.hit && <span className="hot">Хит</span>}
                            {product.properties.hit.new && <span className="new">Новинка</span>}
                            {product.properties.hit.discounts && <span className="sale">Акция</span>}
                        </div>
                    }
                </div>
                <div className="product-content-wrap">
                    <h2>
                        <Link to={`/catalog/${product.section_code}/${product.id}/`}>
                            {product.name}
                        </Link>
                    </h2>

                    <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                            <div
                                className="product-rating"
                                style={{ width: "90%" }}
                            ></div>
                        </div>
                        <span className="font-small ml-5 text-muted">
                            {" "}
                            ({product.rating})
                        </span>
                    </div>

                    <div className="product-card-bottom">
                        <div className="product-price">
                            <span>{product.price}</span>
                            <span className="old-price">{product.sale && `${product.sale.price}`}</span>
                        </div>
                        <div className="add-cart">
                            <a
                                className="add"
                            >
                                <i className="fi-rs-shopping-cart mr-5"></i> В корзину
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
