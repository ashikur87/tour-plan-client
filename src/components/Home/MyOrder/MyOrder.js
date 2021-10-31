import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../../LoginHooks/useAuth'
import UiOrder from '../UiOrder/UiOrder';


const MyOrder = () => {
    const { user } = useAuth();
    const [order, setOrder] = useState([]);
    
    useEffect(() => {
        const url = 'http://localhost:7000/order';

        fetch(url)
            .then(res => res.json())
            .then(data => setOrder(data));
    }, [])
    
    

    const userOrder = order.filter(myOrder => myOrder.name === user.displayName);
    console.log(user);
    return (
        <div className="container">
            <h2>Cheackout your order</h2>

            <Row xs={1} md={1} className="g-4">
                {
                    userOrder.map(uniqOrder => <UiOrder
                        key={uniqOrder._id}
                        myOrder={uniqOrder}
                    ></UiOrder>)
                }
            </Row>

        </div>
    );
};

export default MyOrder;