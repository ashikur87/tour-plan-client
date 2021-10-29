import React from 'react';
import { Carousel } from 'react-bootstrap';
import one from '../../../images/Banner/two.jpg';
import two from '../../../images/Banner/one.jpg';
import three from '../../../images/Banner/three.jpg';
import './Banner.css'

const Banner = () => {
    return (
        <>
        <Carousel className='carousel'>
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src={one}
              alt="First slide"
            />
            <Carousel.Caption>
        
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src={two}
              alt="Second slide"
            />
        
            <Carousel.Caption>
        
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src={three}
              alt="Third slide"
            />
        
            <Carousel.Caption>
        
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
                </>
    );
};

export default Banner;