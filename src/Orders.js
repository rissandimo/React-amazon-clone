import React, { useEffect, useState } from 'react';
import { db } from './firebase';

import './Orders.css';
import { useStateValue } from './StateProvider';

function Orders() {

    const [{ basket, user}, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

    // Display all orders by date - descending
    // When new order is placed - user is redirected to orders page and shown the most recent order on top
    useEffect( () => {
        
        db
          .collection('users')
          .doc(user?.uid)
          .collection('orders')
          .orderBy('created', 'desc')
          .onSnapshot( snapshot => ( // update data for any change in db
              setOrders(snapshot.docs.map(doc => ({
                  id: doc.id,
                  data: doc.data()
              })))
          ))

    }, []); 

    return (
        <div className="orders">
            orders component
        </div>
    )
}

export default Orders;
