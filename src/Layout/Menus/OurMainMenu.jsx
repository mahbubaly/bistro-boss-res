import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import img from '../../assets/menu/banner3.jpg'

const OurMainMenu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | menu</title>

            </Helmet>
            <Cover img={img}/>

        </div>
    );
};

export default OurMainMenu;