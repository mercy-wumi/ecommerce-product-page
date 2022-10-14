import React, { useState } from 'react'

import Model from '../components/Model'
import Button from '../components/Button';

import '../styles/sections/Starter.scss'

import next from '../images/icon-next.svg'
import previous from '../images/icon-previous.svg'
import iconCart from '../images/icon-cart.svg';
import minus from '../images/icon-minus.svg';
import plus from '../images/icon-plus.svg';

const Starter = ({
    count, price, desc, handleAddItem, handleDecrement, handleIncrement,
    image, disabled, active, setActive,
}) => {
    const [model, setModel] = useState(false)

    const handleFirstImg = (id) => {
        setActive(id)
        console.log(active)
        console.log(active)
    }

    const handleMobileNext = (img) => {
        for (let i = 0; i < img.length; i++) {
            if (active === img[i]) {
                if (active === img[img.length - 1]) {
                    setActive(img[0])
                }
                else {
                    setActive(img[i + 1])
                }
            }
        }
    }

    const handleMobilePrev = (img) => {
        for (let i = 0; i < img.length; i++) {
            if (active === img[i]) {
                if (active === img[0]) {
                    setActive(img[img.length - 1])
                }
                else {
                    setActive(img[i - 1])
                }
            }
        }
    }
    const openModel = () => {
        console.log(active)
        setModel(true)

        console.log(model)
    }
    return (
        <div className='row'>
            <div className='container'>
                <div className='productImg'>
                    <img src={active} alt='product' id='featuredMobileImg' />
                    <img src={active} alt='product' id='featuredimg' onClick={openModel} />
                    <div className='next-prev'>
                        <img src={previous} className='prev' alt='previous-btn' onClick={() => handleMobilePrev(image)} />
                        <img src={next} className='next' alt='next-btn' onClick={() => handleMobileNext(image)} />
                    </div>
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
                            <img src={minus} alt='minus' className={`numOfItem ${disabled || count < 1 ? 'disabled' : ''}`} onClick={handleDecrement} />
                            <span id='num'>{count}</span>
                            <img src={plus} alt='plus' className={`numOfItem ${disabled || count > 9 ? 'disabled' : ''}`} onClick={handleIncrement} />
                        </div>
                        <Button icon={iconCart} text='Add to cart' click={handleAddItem} count={count} />
                    </div>
                </div>
            </div>
            <Model model={model} img={active} setModel={setModel} active={active} setActive={setActive} />
        </div>
    )
}

export default Starter
