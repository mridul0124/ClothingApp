import React from "react";
import { Fragment } from "react";
import { Outlet,Link } from "react-router-dom";
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'

import './navigation.styles.css'

function Navigation() {
    return(
        <Fragment>
            <div className="navigation" >
                <Link className="logo-container" to='/'>
                    <CrwnLogo className = "logo" />
                </Link>
                <div className="nav-link-container">
                    <Link className="nav-link" to = '/shop'>
                        Shop
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>

    )
}

export default Navigation;