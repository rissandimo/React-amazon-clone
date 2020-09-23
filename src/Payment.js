import React, { useEffect, useState } from 'react';
import './Payment.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider.js';
import { Link, useHistory } from 'react-router-dom';
import { getBasketTotal } from './reducer';
import axios from './axios';

// Utility Libraries
import CurrencyFormat from 'react-currency-format';

// Strip
import { CardElement,  useElements, useStripe } from '@stripe/react-stripe-js';

function Payment(){

    const history = useHistory();

    const [{ basket, user }, dispatch] = useStateValue();

    const [disabled, setDisabled] = useState(true);
    const [error, setError] = useState(null);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [clientSecret, setClientSecret] = useState(true);

    const elements = useElements();
    const stripe = useStripe();

    // generate stripe secret -> allows to charge a customer
    // each time basket changes -> need to re-generate stripe secret -> notify stripe of new carts contents/price
    useEffect( () => {

        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // Convert total to subunits (ex cents)
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });

            setClientSecret(response.data.clientSecret);
        }

        getClientSecret();

    }, [basket]);

    console.log('client secret ---', clientSecret);

    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error? event.error.message : "");
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        // prevent multiple 'buy now' clicks
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method : {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => { // payment confirmation
            setSucceeded(true);
            setError(null);
            setProcessing(false);
// redirect user to orders page rather than payment page
            history.replace('/orders');
        })

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
                        {/* Disable button if processing, disabld or succeded are true
                        If order is being processed - display processed; otherwise show Buy Now text */}
                               <button disabled={processing || disabled || succeeded}>
                                   <span>{processing ? <p>Processing</p>: "Buy Now"}</span>
                               </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;