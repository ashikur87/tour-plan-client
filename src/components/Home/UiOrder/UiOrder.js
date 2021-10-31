import React from 'react';
import { Card, Col } from 'react-bootstrap';

const UiOrder = ({myOrder}) => {
    const{name,img,price,place,_id}=myOrder;

    // handleDelete------------------------------delete order
    const handleDelete= id =>{
        console.log(id)

        const url = `http://localhost:7000/order/${id}`;
        fetch(url , {
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data =>{
            if(data.acknowledged){
                alert('Order successfully removed');
            }
            
        })
        

    }
    return (
        <div>
            <Col>
            <Card >
                <div className="row">
                    <div className=" col-6 col-lg-4">
                    <Card.Img className="img-fluid " variant="top" src={img} />
                    </div>
                    
                    <div className="col-6 col-lg-4 pt-3">
                        <Card.Body>
                        <Card.Title>Customer:{name}</Card.Title>
                        <h4>Locaton:{place}</h4>
                        <h3>Total Cost:{price}</h3>
                        </Card.Body>
                    </div>
                
                    <div className="col-11 col-lg-3 pt-3">
                        <button className="btn btn-danger m-2 w-100"><small>status:Pending</small></button> <br />
                        <button onClick={()=>handleDelete(_id)} className="btn btn-secondary m-2 w-100">Remove Order</button>
                    </div>
                </div>
            </Card>
        </Col>
        </div>
    );
};
export default UiOrder;