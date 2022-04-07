import React, { useState } from 'react'
import Model from '../components/Model'
import '../styles/sections/Starter.scss'
import imageProduct from '../images/image-product-1.jpg'
// import imageProductTwo from '../images/image-product-2.jpg'
// import imageProductThree from '../images/image-product-3.jpg'
// import imageProductFour from '../images/image-product-4.jpg'
import Button from '../components/Button';
import iconCart from '../images/icon-cart.svg';
import Cart from '../components/Cart';
import minus from '../images/icon-minus.svg';
import plus from '../images/icon-plus.svg';

const Starter = ({
    count, price, desc, handleAddItem, handleDecrement, handleIncrement,
    image, cartItem, disabled
}) => {
    // const [image,] = useState([imageProduct, imageProductTwo, imageProductThree, imageProductFour]);
    const [active, setActive] = useState(imageProduct)
    const [model, setModel] = useState(false)
    // const [openCart, setOpenCart] = useState(false)
    // const [count, setCount] = useState(0);

    // const price = 125.00
    // const desc = 'Fall Limited Edition Sneakers'
    const handleFirstImg = (id) => {
        setActive(id)
    }

    // const handleIncrement = () => {

    //     if (count >= 0 && count < 10) {
    //         setCount(count + 1)
    //     }
    //     else {
    //         setCount(10)
    //     }
    // }
    // const handleDecrement = () => {
    //     if (count <= 10 && count > 0) {
    //         setCount(count - 1)
    //     }
    //     else {
    //         setCount(0)
    //     }
    // }
    const openModel = (id) => {
        setActive(id)
        setModel(true)

        console.log(model)
    }
    const closeModel = () => {
        setModel(false)
        console.log(model)
    }

    // const handleAddItem = () => {
    //     console.log(openCart)
    //     setOpenCart(true)
    // }

    let imgSrc = active === null ? image[0] : active;
    // let imgModel = active;
    // console.log(active)
    // console.log(imgModel)
    return (
        <div className='row'>
            <div className='container'>
                <div className='productImg'>
                    <img src={imgSrc} alt='product' id='featuredimg' onClick={() => openModel(imgSrc)} />
                    <div className='allImages'>
                        {image.map((images, index) => {
                            return (
                                <img key={index} src={images} alt='productImages' className={`prodImages ${images === active ? 'borderAround' : ''}`
                                } onClick={() => handleFirstImg(images)} />
                            )
                        })}
                    </div>
                </div>
                <div className='productDesc'>
                    <h1>Sneaker Company</h1>
                    <h3>{desc}</h3>
                    <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
                    <div className='allPrice'>
                        <div className='price'><span>${price}</span><span className='discount'>50%</span></div>
                        <span className='originalPrice'>$250.00</span>
                    </div>
                    <div className='addToCart'>
                        <div className='buttons'>
                            <img src={minus} className={`numOfItem ${disabled ? 'disabled' : ''}`} onClick={handleDecrement} />
                            <span id='num'>{count}</span>
                            <img src={plus} className={`numOfItem ${disabled ? 'disabled' : ''}`} onClick={handleIncrement} />
                        </div>
                        <Button icon={iconCart} text='Add to cart' click={handleAddItem} count={count} />
                    </div>
                </div>
            </div>
            <Model model={model} img={imgSrc} close={closeModel} active={active} setActive={setActive} />
            {/* <Cart count={count} openCart={openCart} price={price} desc={desc} image={image[0]} /> */}
        </div>
    )
}

export default Starter
