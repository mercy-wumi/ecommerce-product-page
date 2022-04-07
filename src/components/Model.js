import React, { useState } from 'react'
import '../styles/components/Model.scss'
import imageProduct from '../images/image-product-1.jpg'
import imageProductTwo from '../images/image-product-2.jpg'
import imageProductThree from '../images/image-product-3.jpg'
import imageProductFour from '../images/image-product-4.jpg'

const Model = ({ model, img, close, active, setActive }) => {
    const [image,] = useState([imageProduct, imageProductTwo, imageProductThree, imageProductFour]);
    const [modalProd, setModalProd] = useState(img)
    console.log(active)

    const handeClose = () => {
        console.log('close')
    }
    const handeNext = () => {
        console.log('next')
    }
    const handePrev = () => {
        console.log('prev')
    }
    const handleFirstImg = (id) => {
        setModalProd(id)
        console.log(modalProd)
    }
    // console.log(modalProd)
    // let modalImg = active;
    // console.log(img)
    // console.log(active)
    return (
        <div id='product-modal' style={{ display: model ? 'block' : 'none', position: 'fixed' }} className='modal'>
            <div className='modal-content'>
                <span className='close' onClick={close}>&times;</span>
                <img src={modalProd} alt='firstProductImage' className='prodImgSlides' />
                <a className='prev' onClick={handePrev}>&#10094;</a>
                <a className='next' onClick={handeNext}>&#10095;</a>
                {/* <img src={imageProductTwo} alt='firstProductImage' className='prodImgSlides' />
                <img src={imageProductThree} alt='firstProductImage' className='prodImgSlides' />
                <img src={imageProductFour} alt='firstProductImage' className='prodImgSlides' /> */}

                <div className='allImages'>
                    {image.map((images, index) => {
                        return (
                            <img key={index} src={images} alt='productImages' className={`prodImages ${images === modalProd ? 'borderAround' : ''}`
                            } onClick={() => handleFirstImg(images)} />
                        )
                    })}
                </div>
                {/* <div className='allProductImg'>
                        <img src={imageProduct} alt='productOne' />
                        <img src={imageProductTwo} alt='productTwo' />
                        <img src={imageProductThree} alt='productThree' />
                        <img src={imageProductFour} alt='productFour' />
                    </div> */}
            </div>
        </div >
    )
}

export default Model
