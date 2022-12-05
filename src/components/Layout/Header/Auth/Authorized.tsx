import React, {useState} from "react"
import {Link} from "react-router-dom";
import user from "../../../../assets/imgs/theme/icons/icon-user.svg";
import {ProfileMenu} from "./ProfileMenu";

export function Authorized() {
    return (
        <>
            <div className="header-action-icon-2">
                <Link to="/page-account">
                    <a>
                        <img
                            className="svgInject"
                            alt=""
                            src={user}
                        />
                    </a>
                </Link>
                <Link to="/page-account">
                    <a>
                        <span className="lable ml-0">
                            Профиль
                        </span>
                    </a>
                </Link>

                <ProfileMenu />
            </div>
        </>
    );
};
