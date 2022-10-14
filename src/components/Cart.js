import React from 'react'

import '../styles/components/Cart.scss'

import deleteIcon from '../images/icon-delete.svg'

const Cart = ({ count, openCart, price, desc, image, handleRemoveItem, cartOpen }) => {
    const total = price * count
    return (
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <div ref={cartOpen} className='cart' style={{ display: openCart ? 'block' : 'none', position: 'fixed' }}>
                <p className='cart-header'>Cart</p>
                <div className='cart-body'>
                    {count < 1 ? <span>Your cart is empty</span> :
                        <>
                            <div className='cart-item'>
                                <img src={image} alt='product item' className='cart-item-img' />
                                <div className='cart-item-decs'>
                                    <p>{desc}</p>
                                    <p>${price} x {count} <span className='totalPrice'>${total}.00</span></p>
                                </div>
                                <img src={deleteIcon} alt='delete cart' onClick={handleRemoveItem} style={{ cursor: 'pointer' }} />
                            </div>
                            <button className='checkout-btn'>Checkout</button>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default Cart
