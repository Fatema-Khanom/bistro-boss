import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import PopulerMenu from './PopulerMenu/PopulerMenu';
import Featured from './Featured/Featured';
import { Helmet } from 'react-helmet-async';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div className="">
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopulerMenu></PopulerMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;