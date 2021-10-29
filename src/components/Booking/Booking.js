
import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Cart from '../Home/Cart/Cart';
import './Booking.css'


const Booking = () => {
 
    const {serviceId}=useParams();

    const [services, setServices] = useState([])
    

    useEffect(() => {
        fetch(`http://localhost:7000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setServices(data));
            
 

        
    }, []);
    console.log(services);
    return (
        <div className='bookResponsive row'>
            <h2 className='text-primary'><u>Our Services Details Here</u></h2>
           
    <div className='d-flex'>
    <div className=' m-5   shadow-lg  mb-5 bg-body rounded p-3 '>
    <div className='col-9'>
<img className='book' src={services?.img} alt="" />

</div>
<div className=' mx-2 '>
{/* <h1>id:{serviceId}</h1> <br /> */}
<h1>{services?.name}</h1><br />
<h1>{services?.person}</h1><br />
<h1>{services?.Days}</h1><br />
<h1 className=''>Description:</h1>
<h3>{services?.description}</h3><br />
<h3>{services?.price}</h3>
<Button>Add To Cart</Button><br /><br/>

<Link to='/services'><Button>Go Back</Button></Link><br />

</div> 
 </div>
 <div className="cart-container col-3 my-5 py-5">
        <Cart cart={''}>
            <Link to="/review">
                <button className="btn-regular">Review Your Order</button>
            </Link>
        </Cart>
</div>
 </div>
</div>
    );
};

export default Booking;
 