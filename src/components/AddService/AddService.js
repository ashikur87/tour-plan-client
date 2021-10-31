import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddService.css';
import { Link } from 'react-router-dom';
import Button from '@restart/ui/esm/Button';
//react hook form //search and use


const AddService = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        //search axios and copy from axios git and edit
        axios.post('http://localhost:7000/services',data)
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
    return (
        <div className='add-service' id='addservice'>
            <h2>Add a Service</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder='enter your name' {...register("name", { required: true, maxLength: 20 })} />
      
      
      <textarea placeholder='Description' {...register("description")} />
      <textarea placeholder='Days' {...register("Days")} />
      <textarea placeholder='person'  type="number" {...register("person")} />
      
      
      <input placeholder='price' type="number" {...register("price")} />
      
      
      <input placeholder='image url' {...register("img")} />
      
      
      <input className='submit' type="submit" />
      <Link to="/services"><Button className='bg-info text-dark fs-5 fw-bold'>Go To Your order</Button> </Link>
    </form>
        </div>
    );
};

export default AddService;