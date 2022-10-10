import '../css/ProductInfo.css'
import { CartIcon } from '../components-svg/Icons'
import {IconPlus, IconMinus} from '../components-svg/Incremental'
import { useState } from 'react'


const ProductInfo = ({onAddToCartClicked}) => {

    const [amount, setAmount] = useState(0)

    const decrementAmount = () => {
        amount > 0 && setAmount(amount - 1)
    }
    
    const incrementAmount = () => setAmount(amount + 1)
    
    return (
        <div className="product-info col-md-6 py-4 py-lg-5 py-md-3">
            <h6>
                <b>SNEAKER COMPANY</b>
            </h6>
            <h1>Fall Limited Edition Sneakers</h1>
            <p className='mt-4 mt-md-3 mt-xl-5 '>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer. </p>
            <div className="price d-flex d-md-block mt-4 ">
                <h1 className='d-md-inline'>$125.00</h1>
                <p className='d-flex align-items-center ms-4 d-md-inline '>50%</p>
                <p className='d-flex align-items-center ms-auto '>$250.00</p>
            </div>

            <div className="incremental-add-cart d-md-flex my-4 my-md-0">
                
                <div className="incrementing-btn row mb-3 my-auto">
                    <button  className='col' onClick={decrementAmount}><IconMinus /> </button>
                    <span className='col my-auto'>{amount}</span>
                    <button className='col' onClick={incrementAmount}><IconPlus /> </button>
                </div>
                <button className='add-cart-btn py-3 my-md-3 ms-md-4' onClick={() => onAddToCartClicked(amount)}>
                    <p className=' py-md-3'>
                        <span className='me-3 '><CartIcon /></span>
                        Add to cart
                    </p>
                </button>
            </div>
            
        </div>
    )
}

export default ProductInfo