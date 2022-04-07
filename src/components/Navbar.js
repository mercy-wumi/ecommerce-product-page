import react, { useState } from 'react'
import Cart from './Cart'
import '../styles/components/Navbar.scss'
import logo from '../images/logo.svg'
import cart from '../images/icon-cart.svg'
import menu from '../images/icon-menu.svg'
import close from '../images/icon-close.svg'
import profileImg from '../images/image-avatar.png'

const Navbar = ({
    price, desc, image, openCart, count, cartItem, handleShowCart, handleRemoveItem,
    mobileNav, handleMenuClick
}) => {


    return (
        <>
            <Cart
                price={price}
                image={image}
                desc={desc}
                openCart={openCart}
                count={count}
                handleRemoveItem={handleRemoveItem}
            />
            <nav className='navbar'>
                <div className='navbar-container'>
                    <div className='logoMenus'>
                        <img src={menu} alt='menu' onClick={handleMenuClick} className='menuIcon' />
                        <img src={logo} alt='logo' className='logo' />
                        <ul className='menus'>
                            <li><a href='#' className='menuLink'>Collections</a></li>
                            <li><a href='#' className='menuLink'>Men</a></li>
                            <li><a href='#' className='menuLink'>Women</a></li>
                            <li><a href='#' className='menuLink'>About</a></li>
                            <li><a href='#' className='menuLink'>Contact</a></li>
                        </ul>
                        <div className={mobileNav ? 'menuMobile' : ''}>
                            <div className='blur'>
                                <img src={close} alt='close menu' className='close' onClick={handleMenuClick} />
                                <ul className='mobNav'>
                                    <li><a href='#' className='menuLink'>Collections</a></li>
                                    <li><a href='#' className='menuLink'>Men</a></li>
                                    <li><a href='#' className='menuLink'>Women</a></li>
                                    <li><a href='#' className='menuLink'>About</a></li>
                                    <li><a href='#' className='menuLink'>Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='menuImg'>
                        <div className='cartItemNum' onClick={handleShowCart}>
                            <img src={cart} alt='cart' />
                            <span style={{ display: cartItem ? 'block' : 'none' }}>{count > 0 ? count : ''}</span>
                        </div>
                        <img src={profileImg} className='profile' alt='profile' />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
