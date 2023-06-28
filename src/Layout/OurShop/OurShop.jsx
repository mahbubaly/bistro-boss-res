import React from 'react';
import Cover from '../Shared/Cover/Cover';
import contact from '../../assets/contact/banner.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../hooks/useMenu';
import FeaturesItem from './../Pages/Featured/FeaturesItem';
import { Helmet } from 'react-helmet-async';

const OurShop = () => {
    const [menu] = useMenu();
    const todaysOffered = menu.filter(item => item.category === 'offered');
    const Pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    const dessert = menu.filter(item => item.category === 'dessert');
    const salad = menu.filter(item => item.category === 'salad');
    const drinks = menu.filter(item => item.category === 'drinks');
    return (
        <>
            <div className='container mx-auto'>

                <Helmet>
                    <title>Bistro | Order</title>

                </Helmet>



                <Cover
                    img={contact}
                    title={'OUR SHOP'}
                    des={'WOULD YOU LIKE TO HAVE A DISH'}



                />

                <div>
                    <Tabs>
                        <div className='flex justify-center mt-14'>
                            <TabList>
                                <Tab><h1 className='text-xl hover:text-yellow-600'>Pizza</h1></Tab>
                                <Tab><h1 className='text-xl hover:text-yellow-600'>Soup</h1></Tab>
                                <Tab><h1 className='text-xl hover:text-yellow-600'>Dessert</h1></Tab>
                                <Tab><h1 className='text-xl hover:text-yellow-600'>Salad</h1></Tab>
                                <Tab><h1 className='text-xl hover:text-yellow-600'>Drinks</h1></Tab>
                                {/* <Tab>Title 2</Tab> */}
                            </TabList>
                        </div>

                        <div>
                            <TabPanel>
                                <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 p-12'>
                                    {
                                        Pizza.map(item => <FeaturesItem
                                            key={item._id}
                                            item={item}


                                        />)

                                    }
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 p-12'>
                                    {
                                        soup.map(item => <FeaturesItem
                                            key={item._id}
                                            item={item}


                                        />)

                                    }
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 p-12'>
                                    {
                                        dessert.map(item => <FeaturesItem
                                            key={item._id}
                                            item={item}


                                        />)

                                    }
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 p-12'>
                                    {
                                        salad.map(item => <FeaturesItem
                                            key={item._id}
                                            item={item}


                                        />)

                                    }
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 p-12'>
                                    {
                                        drinks.map(item => <FeaturesItem
                                            key={item._id}
                                            item={item}


                                        />)

                                    }
                                </div>
                            </TabPanel>
                        </div>

                    </Tabs>

                </div>

            </div>
        </>
    );
};

export default OurShop;