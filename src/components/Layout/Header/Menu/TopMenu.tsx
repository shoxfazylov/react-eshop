import React from "react"
import {Link} from "react-router-dom"

export function TopMenu() {
    return (
        <>
            <div className="col-xl-3 col-lg-4">
                <div className="header-info">
                    <ul>
                        <li>
                            <Link to="/about">
                                <a>О компании</a>
                            </Link>
                        </li>
                        <li>
                            <Link to="/news">
                                <a>Новости</a>
                            </Link>
                        </li>
                        <li>
                            <Link to="/contacts">
                                <a>Контакты</a>
                            </Link>
                        </li>
                        <li>
                            <Link to="/faq">
                                <a>Помощь</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};
