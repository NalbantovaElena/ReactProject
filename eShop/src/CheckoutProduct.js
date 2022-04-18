import React from 'react';
import './CheckoutProduct.css'


function CheckoutProduct(){

    return (
        <div className='checkoutProduct'>
 <div className="product__info">
        <p>Маркови маратонки 1</p>
        <p className="checkoutProduct__price">
            <small>$</small>
            <strong>30</strong>
            </p>
        <div className="checkoutProduct_rating">
        ⭐⭐⭐⭐⭐
        </div>
    </div>

    <img src="https://www.obuvki.bg/media/catalog/product/cache/image/650x650/0/1/01_0000209404791_rz_.jpg" alt="" />
    <button>Remove from Basket</button>
        </div>
    )
}

export default CheckoutProduct
