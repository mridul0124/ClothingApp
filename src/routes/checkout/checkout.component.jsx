import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import './checkout.styles.css'

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext);
    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div clasName='header-block'>
                <span>Product</span> 
                </div>
                <div clasName='header-block'>
                <span>Description</span>
                </div>
                <div clasName='header-block'>
                <span>Quantity</span>
                </div>
                <div clasName='header-block'>
                <span>Price</span>
                </div>
                <div clasName='header-block'>
                <span>Remove</span>
                </div>
            </div>
                {
                    cartItems.map((cartItem) => (
                        <CheckoutItem key = {cartItem.id} cartItem = {cartItem} />
                    ))}
                    <span className='total'>Total : ${cartTotal}</span>
        </div>
    );
};

export default Checkout;