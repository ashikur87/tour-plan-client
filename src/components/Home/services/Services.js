import React, { useEffect, useState } from 'react';

import Service from '../Service/Service';
import './Services.css'


const Services = () => {
    const [services, setServices] = useState([]);
    // const [cart, setCart] = useCart();

    useEffect(() => {
        fetch('http://localhost:7000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <marquee className='mark' behavior="scroll" direction="left" scrollamount="10"><h1>Our Services Available</h1></marquee>
            <div className='services '>
                <div className='service-container  '>

                    {
                        services.map(service => <Service key={service._id} service={service}></Service>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Services;