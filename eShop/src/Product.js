import React from "react";
import "./Product.css";

function Product (){
    return(
       
<div className="product">
    <div className="product__info">
        <p>Известен факт е, че читателя обръща внимание на съдържанието</p>
        <p className="product__price">
            <small>$</small>
            <strong>30</strong>
            </p>
        <div className="product_rating">⭐⭐⭐</div>
    </div>

    <img src="https://www.obuvki.bg/media/catalog/product/cache/image/650x650/0/1/01_0000209404791_rz_.jpg" 
    alt="" />
    <button>Add to Basket</button>
</div>
    )
}

export default Product;
