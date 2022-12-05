import React, {useState} from "react"
import {Authorized} from "./Authorized";
import {Link} from "react-router-dom";
import user from "../../../../assets/imgs/theme/icons/icon-user.svg";
import {ProfileMenu} from "./ProfileMenu";

export function Auth() {
    const [isAuth, setisAuth] = useState(true);

    return (
        <>
            <div className="header-action-icon-2">
                { isAuth && <Authorized /> }
                { !isAuth && <div className="header-action-icon-2">
                    <Link to="/login">
                        <a>
                            <img
                                className="svgInject"
                                alt=""
                                src={user}
                            />
                        </a>
                    </Link>
                    <Link to="/login">
                        <a>
                        <span className="lable ml-0">
                            Вход
                        </span>
                        </a>
                    </Link>
                </div> }
            </div>
        </>
    );
};
