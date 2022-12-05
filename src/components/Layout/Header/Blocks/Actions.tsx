import React from "react";
import {Compare} from "./Compare";
import {Wishlist} from "./Wishlist";
import {Cart} from "./Cart";
import {Auth} from "../Auth/Auth";

export function Actions() {

    return (
        <>
            <div className="header-action-right">
                <div className="header-action-2">
                    <Compare />
                    <Wishlist />
                    <Cart />
                    <Auth />
                </div>
            </div>
        </>
    );
}
