import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddService.css';
//react hook form //search and use


const AddService = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        //search axios and copy from axios git and edit
        axios.post('http://localhost:5000/services',data)
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
    </form>
        </div>
    );
};

export default AddService;