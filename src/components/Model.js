import React, { useState } from 'react'
import '../styles/components/Model.scss'
import imageProduct from '../images/image-product-1.jpg'
import imageProductTwo from '../images/image-product-2.jpg'
import imageProductThree from '../images/image-product-3.jpg'
import imageProductFour from '../images/image-product-4.jpg'
import next from '../images/icon-next.svg'
import previous from '../images/icon-previous.svg'

const Model = ({ model, setModel, active, img }) => {
    const [image,] = useState([imageProduct, imageProductTwo, imageProductThree, imageProductFour]);
    const [modalProd, setModalProd] = useState('')

    let prodModal = modalProd === '' ? img : modalProd;

    const closeModel = () => {
        setModel(false)
        setModalProd('')
        console.log(model)
    }
    const handeNext = (id) => {
        for (let i = 0; i < id.length; i++) {
            if (prodModal === id[i]) {
                console.log(id[i])
                if (prodModal === id[id.length - 1]) {
                    setModalProd(id[0])
                }
                else {
                    setModalProd(id[i + 1])
                }
            }
        }
    }
    const handePrev = (id) => {
        for (let i = 0; i < id.length; i++) {
            if (prodModal === id[i]) {
                console.log(id[i])
                if (prodModal === id[0]) {
                    setModalProd(id[id.length - 1])
                }
                else {
                    setModalProd(id[i - 1])
                }
            }
        }
    }
    const handleModalImg = (id) => {
        setModalProd(id)
        console.log(modalProd)
    }
    console.log(modalProd)
    console.log(img)
    return (
        <div id='product-modal' style={{ display: model ? 'block' : 'none', position: 'fixed' }} className='modal'>
            <div className='modal-content'>
                <span className='close' onClick={closeModel}>&times;</span>
                <div className='modal-slide'>
                    <img src={prodModal} alt='firstProductImage' className='prodImgSlides' />
                    <div className='next-prev'>
                        <img src={previous} className='prev' alt='previous btn' onClick={() => handePrev(image)} />
                        <img src={next} className='next' alt='next btn' onClick={() => handeNext(image)} />
                    </div>
                </div>
                <div className='modalImages'>
                    {image.map((modalImages, index) => {
                        return (
                            <img key={index} src={modalImages} alt='productImages' className={`modalProdImages ${modalImages === prodModal ? 'borderAround' : ''}`
                            } onClick={() => handleModalImg(modalImages)} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Model
