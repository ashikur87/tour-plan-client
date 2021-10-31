import React from 'react';
import './SingleDashboard.css'

const SingleDashboard = (props) => {
    const { name, email, img } = props.dash;
    return (
        <div >
            
            
                    <img className='image' src={img} alt="" />
                
                
                    <h1>{name}</h1>
                   <a href={email}>{email}</a>
            

            
        </div>
    );
};

export default SingleDashboard;