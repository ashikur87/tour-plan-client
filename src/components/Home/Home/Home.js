import React from 'react';
import Banner from '../Banner/Banner';
import NewService from '../NewService/NewService';
import Services from '../services/Services';


const Home = () => {
    return (
        <div id='home'>
            <Banner></Banner>
            <Services></Services>
            <NewService></NewService>
        </div>
    );
};

export default Home;