import React, { useEffect, useState } from 'react';
import { db } from './firebase';

import Order from './Order';
import './Orders.css';
import { useStateValue } from './StateProvider';

function Orders() {

    const [{ basket, user}, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

    // Display all orders by date - descending
    // When new order is placed - user is redirected to orders page and shown the most recent order on top
    useEffect( () => {
        if(user){
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
    
            }else{
                setOrders([])
            }
        }, [user])
    return (
        <div className="orders">
            <h1>Your Orders</h1>
            <div className="orders__order">
                {orders?.map(order => (
                    <Order order={order}/>
                ))}
            </div>
        </div>
    )
}

export default Orders;
