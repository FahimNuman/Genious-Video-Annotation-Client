import React from 'react';
import DataValidition from '../DataValidition/DataValidition';

import Banner from './Banner/Banner';
import Pricing from './BestPlane/Pricing';
import Contact from './Contact/Contact';
import Features from './Features/Features';
import MainBanner from './MainBanner/MainBanner';
import OurCustomer from './OurCustomer/OurCustomer';
import Tools from './Tools/Tools';

const Home = () => {
    return (
        <div>
        
        <Banner></Banner>
        <OurCustomer/>
        <MainBanner/>
        <Pricing/>
        <Features/>
        <DataValidition/>
        <Tools/>
        <Contact/>

        
    </div>
    );
};

export default Home;