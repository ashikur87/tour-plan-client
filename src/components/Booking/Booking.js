
import Button from '@restart/ui/esm/Button';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../LoginHooks/useAuth' 

import './Booking.css'


const Booking = () => {
 
    const {serviceId}=useParams();
    const {user}=useAuth()

    const [services, setServices] = useState([])
    const { register, handleSubmit,reset } = useForm();
    

    useEffect(() => {
        fetch(`https://evil-mummy-82280.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setServices(data));
            
 

        
    }, []);
  
    const onSubmit = data => {
        console.log(data);
        //search axios and copy from axios git and edit
        axios.post('https://evil-mummy-82280.herokuapp.com/order',data)
        .then(res=>{
            console.log(res); 
            if(res.data.insertedId){
                alert('added successfully');
                reset();
            }
            else{
                alert('opps! user does not add')
            }
        })

    }
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


<Link to='/services'><Button className='bg-info text-dark fs-5 fw-bold'>Go Back</Button></Link><br />

</div> 
 </div>
 <div className="cart-container col-3 my-5 py-5 add-service">
     
    <form className=' ' onSubmit={handleSubmit(onSubmit)}>
      <input placeholder='enter your name' defaultValue={user.displayName} {...register("name", { required: true, maxLength: 20 })} />
      <input placeholder='enter your Email' defaultValue={user.email} {...register("email", { required: true, maxLength: 120 })} />
      <textarea placeholder='place' defaultValue={services?.name} {...register("place")} />
      
      
      
      <input placeholder='How many Person' defaultValue={services?.person}  {...register("person")} />


      
      <input placeholder='price' type="number" defaultValue={services?.price} {...register("price")} />
      <textarea placeholder='Days' defaultValue={services?.Days}  {...register("days")} />
      <textarea placeholder='Days' defaultValue={services?.description}  {...register("description")} />
      <input placeholder='Add your contact number'  type="number" {...register("number")} required />
      {/* <input placeholder='Add your Nid Number'  type="number" {...register("nid")} required /> */}
      <textarea placeholder='Add your Address' {...register("address")} required/>
      <input placeholder='Add your image url'  {...register("img")} 
      />
      {/* defaultValue={services?.img} */}

      <textarea placeholder='any question' {...register("question")} />
      


<input className='submit' type="submit"/>

 <Link to="/myOrder"><Button className='bg-info text-dark fs-5 fw-bold'>Go To Your order</Button> </Link>


    </form>
</div>
 </div>
</div>
    );
};

export default Booking;
 