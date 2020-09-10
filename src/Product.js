import React, { dispatch } from 'react';

import './product.css';

import { useStateValue } from './StateProvider';

import StarIcon from '@material-ui/icons/Star';

function Product({id, title, price, rating, image}){

    const [{}, dispatch] = useStateValue();

    const addToBasket = () => {
        // add item to basket

        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id,
                title,
                price,
                rating,
                image
            }
        });
    };

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
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product;