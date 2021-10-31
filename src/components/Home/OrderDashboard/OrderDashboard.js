import React, { useEffect, useState } from 'react';
import SingleDashboard from '../SingleDashboard/SingleDashboard';
import './OrderDashboard.css'

const OrderDashboard = () => {
    const [dashboard,setDashboard]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:7000/order')
        .then(res=>res.json())
        .then(data=>setDashboard(data))
    },[])
    console.log(dashboard);
    return (
        <div>
            <h1 className='fw-bold fs-1' >Our Valuable Customer </h1>
       
        <div className='dash'>
            
            {
                dashboard.map(dash=><SingleDashboard key={dash._id} dash={dash}></SingleDashboard>)
            }
             </div>
        </div>
    );
};

export default OrderDashboard;