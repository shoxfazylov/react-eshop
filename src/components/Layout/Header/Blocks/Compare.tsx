import React from "react"
import {Link} from "react-router-dom";
import compare from "../../../../assets/imgs/theme/icons/icon-compare.svg";

export function Compare() {
    return (
        <>
            <div className="header-action-icon-2">
                <Link to="/profile/compare/">
                    <a>
                        <img
                            className="svgInject"
                            alt="Сравнение"
                            src={compare}
                        />
                        <span className="pro-count blue">0</span>
                    </a>
                </Link>
                <Link to="/profile/compare/">
                    <a>
                        <span className="lable ml-0">
                            Сравнение
                        </span>
                    </a>
                </Link>
            </div>
        </>
    );
};
