import React from 'react';

import { Card, Col } from 'react-bootstrap';

const handleDelete = id => {
    console.log(id)

    const url = `http://localhost:7000/order/${id}`;
    fetch(url, {
        method: 'DELETE'
    })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount) {
                alert('Order successfully removed');
            }

        })


}


const AllOrder = ({ allData }) => {
    const { name, _id, place,number,address } = allData;
    return (
        <div className="mb-3">
            <Col>
                <Card className="bg-info p-2">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="m-2">
                                <Card.Title>Customer:{name}</Card.Title>
                                <h4>Contact-Info:{number}</h4>
                                <h4>Address:{address}</h4>
                                <h4>Destination:{place}</h4>
                                <h5>Booking Id:{_id}</h5>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <button className="w-50 m-2 btn bg-success text-white">Approve Order</button> <br />
                            <button onClick={() => handleDelete(_id)} className="w-50 m-2 btn bg-danger text-white">Cancel Order</button>
                        </div>

                    </div>
                </Card>
            </Col>
        </div>
    );
};

export default AllOrder;