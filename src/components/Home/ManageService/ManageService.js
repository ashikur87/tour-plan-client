import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const ManageService = () => {
    const [services,setServices]=useState([]);
    
    useEffect(()=>{
        fetch('https://evil-mummy-82280.herokuapp.com/services')
        .then(res =>res.json())
        .then(data=>setServices(data))
    },[])
    
    const handleDelete=id=>{
        const url =`https://evil-mummy-82280.herokuapp.com/services/${id}`;
        fetch(url,{
            method:'DELETE'
        })
        
        .then(res=>res.json())
        .then(data =>{

            if(data.deletedCount){
                alert("deleted your service place")
                const remainig =services.filter(service =>service._id !==id);
                setServices(remainig);

            }
           
        })
    }
    return (
<div>
            <h2>Manage Places</h2>
            {
                services.map(service=><div key={service._id}>
                    
                        <h3>{service.name} </h3>
                        <button onClick={()=>handleDelete(service._id)}><i class="fas fa-trash-alt"></i></button>
                        <Link to="/updateService"> <button><i class="far fa-edit"></i></button></Link>
            </div>)
            }
        </div>
    );
};

export default ManageService;



