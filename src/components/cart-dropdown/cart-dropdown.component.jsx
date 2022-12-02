import React from "react";
import './cart-dropdown.styles.css'
import Button from '../button/button.component'

const CartDropdown = () => {
    return(
        <div className="cart-dropdown-container">
            <div className="cart-items" />
            <Button>Go To Checkout</Button>
        </div>
    )

}

export default CartDropdown;
