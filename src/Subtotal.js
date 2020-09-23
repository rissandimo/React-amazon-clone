import React from 'react';
import './Subtotal.css';
import { useStateValue } from './StateProvider';
import { useHistory } from 'react-router-dom';

import { getBasketTotal } from './reducer';

// Utility Libraries
import CurrencyFormat from 'react-currency-format';

function Subtotal(){

    // browser history
    const history = useHistory();
    const [{ basket }, dispatch] = useStateValue();

    return(
        <div className="subtotal">

            <CurrencyFormat
            renderText={(value) => (
                <>  
                    <p>Subtotal ({basket.length} items): <strong>{value}</strong></p>
                    <small className="subtotal__gift">
                        <input type="checkbox" /> This order contains a gift
                    </small>
                </>
            )}
                decimal={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            
            <button onClick={e => history.push('/payment')}>Proceed to checkout</button>
        </div>
    );
}

export default Subtotal;