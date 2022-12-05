import React from "react"
import {Link} from "react-router-dom";

export function ProfileMenu() {
    return (
        <>
            <div className="cart-dropdown-wrap cart-dropdown-hm2 account-dropdown">
                <ul>
                    <li>
                        <Link to="/profile/">
                            <a>
                                <i className="fi fi-rs-user mr-10"></i>
                                Профиль
                            </a></Link>
                    </li>
                    <li>
                        <Link to="/profile/orders"><a>
                            <i className="fi fi-rs-location-alt mr-10"></i>
                            Мои заказы
                        </a></Link>
                    </li>
                    <li>
                        <Link to="/profile/compare/"><a>
                            <i className="fi fi-rs-label mr-10"></i>
                            Сравнение
                        </a></Link>
                    </li>
                    <li>
                        <Link to="/profile/wishlist/"><a>
                            <i className="fi fi-rs-heart mr-10"></i>
                            Избранные
                        </a></Link>
                    </li>
                    <li>
                        <Link to="/profile/edit/"><a>
                            <i className="fi fi-rs-settings-sliders mr-10"></i>
                            Настройки
                        </a></Link>
                    </li>
                    <li>
                        <Link to="/logout"><a>
                            <i className="fi fi-rs-sign-out mr-10"></i>
                            Выход
                        </a></Link>
                    </li>
                </ul>
            </div>
        </>
    );
};
