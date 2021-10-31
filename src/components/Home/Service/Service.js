import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link } from 'react-router-dom';

import './Service.css'

const Service = (props) => {
    const {img,_id,person,Days,name,price,description}=props.service;
    return (
<div className='  pb-3 m-2 p-3 service-color shadow-lg  mb-5 bg-body rounded '>
   
<div className='cart '>
    
        <img className='serviceimg' src={img} alt="" />
        
       <h3>{name}</h3>
        <h4>{price}</h4>
        <h4>{person}</h4>
        <h4>{Days}</h4>
        <h5>{description}</h5>

</div>

<Link  to={`/booking/${_id}`}>
        <button className='btn-primary '>Details:{name.toLowerCase()}</button>
</Link><br /><br/> 
 


      
</div>
    );
};

export default Service;