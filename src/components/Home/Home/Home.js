import React from 'react';
import Banner from '../Banner/Banner';
import ClientReview from '../ClientReview/ClientReview';
import NewService from '../NewService/NewService';
import Services from '../services/Services';
import OrderDashboard from '../OrderDashboard/OrderDashboard';


const Home = () => {
    return (
        <div id='home'>
            <Banner></Banner>
            <Services></Services>
            <NewService></NewService>
            <ClientReview></ClientReview>
            <OrderDashboard></OrderDashboard>
        </div>
    );
};

export default Home;