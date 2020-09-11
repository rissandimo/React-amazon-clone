import React from 'react';

import './CheckoutProduct.css';

import StarIcon from '@material-ui/icons/Star';

function CheckoutProduct({ id, title, image, price, rating}){

    return(
        <div className="checkoutProduct">
            <img src={image} className="checkProduct__image" alt=""/>

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <span>$</span>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {
                        Array(rating)
                        .fill()
                        .map( (_) => (
                        <p> <StarIcon style={{color: '#FFB600'}} /></p>  
                        ))
                    }
                </div>
                <button>Remove from basket</button>

            </div>
        </div>
    );
}

export default CheckoutProduct;