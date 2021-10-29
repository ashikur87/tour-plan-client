import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Latest.css'

const Latest = (props) => {
    const {img,_id,Date,name,price}=props.uptour;
    return (
<div className=''>


<div className='cart  '>
<Carousel className='m-2'>
<Carousel.Item>
<img className='serviceimg' src={img} alt="" />
<Carousel.Caption>
<h3>{name}</h3>
<h4>{Date}</h4>
<h5>{price}</h5>
<button>Add To Cart</button>  <br />
</Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>




    </div>
    );
};

export default Latest;
