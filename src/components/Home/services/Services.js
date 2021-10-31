import React, { useEffect, useState } from 'react';

import Service from '../Service/Service';
import './Services.css'


const Services = () => {
    const [services, setServices] = useState([]);
    

    useEffect(() => {
        fetch('https://evil-mummy-82280.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
           <h1 className='text-info'>Please Book Your Order</h1>
            <div className='services '>
                <div className='service-container '>

                    {
                        services.map(service => <Service key={service._id} service={service}></Service>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Services;