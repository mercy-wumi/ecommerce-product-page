import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'

import Starter from "./Starter"

import imageProduct from '../images/image-product-1.jpg'
import imageProductTwo from '../images/image-product-2.jpg'
import imageProductThree from '../images/image-product-3.jpg'
import imageProductFour from '../images/image-product-4.jpg'

test('on intial render, the add to cart button is disabled', () => {
    render(<Starter image={[imageProduct, imageProductTwo, imageProductThree, imageProductFour]} />)

    expect(screen.getByRole('button', {
        name: /add to cart/i
    })).toHaveClass('numOfItems');
})