import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/404/2488754-ai.png'


const Notfound = () => {
    return (
        <div className='image'>
            <img style={{width:'100%', padding:'10px' ,margin:'10px'}} src={notfound} alt=""   />
            <Link to='/home'><button className='btn-primary'>Go Back</button></Link>
            
        </div>
    );
};

export default Notfound;