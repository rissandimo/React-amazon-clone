import React, { useState } from 'react';
import './Payment.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider.js';
import { Link } from 'react-router-dom';

import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';


// Strip
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

function Payment(){

    const [{ basket, user }, dispatch] = useStateValue();

    const [disabled, setDisabled] = useState(true);
    const [error, setError] = useState(null);

    const element = useElements();
    const stripe = useStripe();

    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error? event.error.message : "");
    }

    const handleSubmit = event => {

    }

    return(
        <div className="payment">
            <div className="payment__container">

            <h1>Checkout (<Link to="/checkout">{basket?.length} items)</Link></h1>
                <div className="payment__section">
                {/* delivery section */}
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 N Palm Dr.</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>
                {/* reviewing items */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item => (
                            <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                {/* payment method */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment method</h3>
                    </div>
                    <div className="payment__details">
                        {/* Stripe */}

                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>

                            <div className="payment__priceContainer">
                            <CurrencyFormat
                                renderText={(value) => (
                                    <h3>Order Total: {value}</h3>
                                )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                               />
            
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;