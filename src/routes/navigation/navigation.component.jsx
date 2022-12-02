import React from "react";
import { Fragment, useContext } from "react";
import { Outlet,Link } from "react-router-dom";
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { UserContext } from "../../context/user.context";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import {signOutUser} from '../../utils/firebase/firebase.utils'
import { CartContext} from '../../context/cart.context'
import './navigation.styles.css'

function Navigation() {
    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);
     
    return(
        <Fragment>
            <div className="navigation" >
                <Link className="logo-container" to='/'>
                    <CrwnLogo className = "logo" /> 
                </Link>
                <div className="nav-link-container">
                    <Link className="nav-link" to = '/shop'>
                        SHOP
                    </Link>
                    {
                        currentUser ? (
                            <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
                        ) : (
                            <Link className="nav-link" to = '/auth'>
                                SIGN IN
                            </Link>
                        )
                    }
                    <CartIcon className="nav-link"/>
                </div>
                {isCartOpen && <CartDropdown />}
            </div>
            <Outlet />
        </Fragment>

    )
}

export default Navigation;