import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import img from '../../assets/menu/banner3.jpg'
import TodaysOffer from './TodaysOffer/TodaysOffer';

const OurMainMenu = () => {
    return (
        <div className='mx-auto container'>
            <Helmet>
                <title>Bistro | menu</title>

            </Helmet>
            <Cover
                img={img}
                title={"Our Menu"}
                des={'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.  In deleniti eaque aut repudiandae et a id nisi.'}

            />

            <TodaysOffer />

        </div>
    );
};

export default OurMainMenu;