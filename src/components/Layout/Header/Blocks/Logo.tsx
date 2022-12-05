import React from "react"
import {Link} from "react-router-dom";

export function Logo() {
    return (
        <>
            <div className="logo logo-width-1">
                <Link to="/">
                    <a>
                        <img
                            src='/imgs/theme/alibazar.png'
                            alt={'Alibazar logo'}
                            title={'Alibazar logo'}
                        />
                    </a>
                </Link>
            </div>
        </>
    );
};
