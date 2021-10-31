import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Latest from '../Latest/Latest';
import './NewService.css'

const NewService = () => {
    const [newservice,setnewservice]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:7000/upcoming')
        .then(res=>res.json())
        .then(data=>setnewservice(data))
    },[])
    return (
<div>
    <h1 className='m-5'><span className='text-danger'>Upcoming</span><span className='text-primary'>-</span><span className='text-danger'>Service</span></h1>
<div className='tour bg-gray'>
            
            {
                newservice.map(uptour=><Latest key={uptour._id} uptour={uptour}></Latest>)
            }
            
        </div>
</div>
    );
};

export default NewService;