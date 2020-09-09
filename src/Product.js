import React from 'react';

import './product.css';

import StarIcon from '@material-ui/icons/Star';

function Product({id, title, price, rating, image}){
    return(
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                <small>$</small>
                <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating)
                        .fill()
                        .map( (_) => (
                        <p> <StarIcon style={{color: '#FFB600'}} /></p>  
                        ))
                    }
                </div>
            </div>
            <img src={image} alt=""/>
            <button>Add to basket</button>
        </div>
    )
}

export default Product;