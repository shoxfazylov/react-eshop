import React from "react"
import {Link} from "react-router-dom";
import cart from "../../../../assets/imgs/theme/icons/icon-cart.svg";

export function Cart() {
    return (
        <>
            <div className="header-action-icon-2">
                <Link to="/profile/cart/">
                    <a className="mini-cart-icon">
                        <img
                            alt="Корзина"
                            src={cart}
                        />
                        <span className="pro-count blue">0</span>
                    </a>
                </Link>
                <Link to="/profile/cart/">
                    <a>
                        <span className="lable">
                            Корзина
                        </span>
                    </a>
                </Link>
            </div>
        </>
    );
};
