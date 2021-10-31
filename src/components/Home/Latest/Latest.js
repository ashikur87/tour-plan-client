import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Latest.css'

const Latest = (props) => {
    const {img,_id,Date,name,price}=props.uptour;
    return (
<div className=''>


<div className='cart  '>
<Carousel className='m-2 '>
<Carousel.Item>
<img className='serviceimg' src={img} alt="" />

<Carousel.Caption >
<div className='caption'>
<div className='h3'>
<h3>{name}</h3>
<h3>{Date}</h3>
<h3>{price}</h3>
<button>Add To Cart</button>  <br />
</div>
</div>
</Carousel.Caption>

  </Carousel.Item>
</Carousel>
</div>




    </div>
    );
};

export default Latest;
