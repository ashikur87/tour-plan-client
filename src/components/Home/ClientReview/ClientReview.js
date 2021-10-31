import React, { useEffect, useState } from 'react';
import Clientinfo from '../Clientinfo/Clientinfo';
import './ClientReview.css'

const ClientReview = () => {
    const [client,setClient]=useState([])
    useEffect(()=>{
        fetch('http://localhost:7000/Review')
        .then(res=>res.json())
        .then(data=>setClient(data))
    },[])
    return (
        <div>
            <h1>What They’re Saying</h1>
        
        <div className='clientreview m-2 p-2'>
            
            {
                client.map(client=><Clientinfo key={client._id} client={client}></Clientinfo>)
            }
        </div>
        </div>
    );
};

export default ClientReview;