import React, { useState } from 'react';

import Navbar from "./components/Navbar";
import Starter from "./sections/Starter";
import Model from "./components/Model";
import imageProduct from './images/image-product-1.jpg'
import imageProductTwo from './images/image-product-2.jpg'
import imageProductThree from './images/image-product-3.jpg'
import imageProductFour from './images/image-product-4.jpg'

function App() {
  const [image,] = useState([imageProduct, imageProductTwo, imageProductThree, imageProductFour]);
  const [active, setActive] = useState(imageProduct)
  const [count, setCount] = useState(0);
  const [openCart, setOpenCart] = useState(false)
  const [cartItem, setCartItem] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const [mobileNav, setMobileNav] = useState(false)

  const handleMenuClick = () => {
    setMobileNav(!mobileNav)
  }

  const price = 125.00
  const desc = 'Fall Limited Edition Sneakers'

  const handleIncrement = () => {

    if (count >= 0 && count < 10) {
      setCount(count + 1)
    }
    else {
      setCount(10)
    }
  }
  const handleDecrement = () => {
    if (count <= 10 && count > 0) {
      setCount(count - 1)
    }
    else {
      setCount(0)
    }
  }
  const handleAddItem = () => {
    setDisabled(true)
    if (count > 0) {
      setCartItem(true)
    }
    else {
      setCartItem(false)
    }
  }
  const handleShowCart = () => {
    setOpenCart(!openCart)
  }
  const handleRemoveItem = () => {
    setCount(0)
    setDisabled(false)
    setCartItem(false)
  }

  return (
    <div>
      <Navbar
        openCart={openCart}
        image={image[0]}
        count={count}
        desc={desc}
        price={price}
        cartItem={cartItem}
        handleShowCart={handleShowCart}
        handleRemoveItem={handleRemoveItem}
        handleMenuClick={handleMenuClick}
        mobileNav={mobileNav}
      />
      <Starter
        disabled={disabled}
        count={count}
        desc={desc}
        price={price}
        image={image}
        active={active}
        setActive={setActive}
        setCartItem={setCartItem}
        handleAddItem={handleAddItem}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
      />
      <Model />
    </div>
  );
}

export default App;
