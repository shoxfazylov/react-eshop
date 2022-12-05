import React from "react"
import {Link} from "react-router-dom";
import wishlist from "../../../../assets/imgs/theme/icons/icon-heart.svg";

export function Wishlist() {
    return (
        <>
            <div className="header-action-icon-2">
                <Link to="/profile/wishlist/">
                    <a>
                        <img
                            className="svgInject"
                            alt="Избранное"
                            src={wishlist}
                        />
                        <span className="pro-count blue">0</span>
                    </a>
                </Link>
                <Link to="/profile/wishlist/">
                    <span className="lable">
                        Избранное
                    </span>
                </Link>
            </div>
        </>
    );
};
