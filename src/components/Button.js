import React from 'react'
import '../styles/components/Button.scss'

const Button = ({ icon, text, click, count }) => {
    return (
        <button className={`numOfItems ${count < 1 ? 'disabled' : ''}`} onClick={click}>
            {icon ? <img src={icon} alt='cart' /> : null}{text}
        </button>
    )
}

export default Button
