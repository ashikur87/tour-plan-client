import React, { useEffect, useState } from 'react';
import SingleDashboard from '../SingleDashboard/SingleDashboard';

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
            {
                dashboard.map(dash=><SingleDashboard key={dash._id} dash={dash}></SingleDashboard>)
            }
        </div>
    );
};

export default OrderDashboard;