import React from 'react';
import img from '../../assets/contact/banner.jpg'
import Cover from '../Shared/Cover/Cover';
import SharedTitle from '../../Components/SharedTitle';
import { PhoneArrowUpRightIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/solid'

const ContactUs = () => {
    return (
        <>
            <div className=''>
                <Cover
                    img={img}
                    title={'CONTACT US'}
                    des={'Would you like to try a Dish?'}


                />
                <div className='my-16'>

                    <SharedTitle

                        title={'Visit Us'}
                        subTitle={'OUR LOCATION'}
                    />


                    <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 ml-2 my-10'>
                        <div>
                            <div className='bg-[#D1A054] lg:w-[400px]  p-4 '>
                                <PhoneArrowUpRightIcon className="h-8 mx-auto w-8 text-white " />

                            </div>
                            <div className='text-center bg-[#F3F3F3] w-[300px] px-10 py-16  mx-auto'>
                                <h2 className='text-xl font-semibold'>PHONE </h2>
                                <p>
                                    +38 (012) 34 56 789
                                </p>

                            </div>
                        </div>
                        <div>
                            <div className='bg-[#D1A054] lg:w-[400px]  p-4 '>
                                <MapPinIcon className="h-8 mx-auto w-8 text-white " />

                            </div>
                            <div className='text-center px-10 py-16 bg-[#F3F3F3] w-[300px] mx-auto'>
                                <h2 className=' text-xl font-semibold'>ADDRESS </h2>
                                <p>
                                    +38 (012) 34 56 789
                                </p>

                            </div>
                        </div>
                        <div>
                            <div className='bg-[#D1A054] lg:w-[400px]  p-4 '>
                                <ClockIcon className="h-8 mx-auto w-8 text-white " />

                            </div>
                            <div className='text-center px-10 py-16  bg-[#F3F3F3] w-[300px] mx-auto'>
                                <h2 className='text-xl font-semibold'>WORKING HOURS </h2>
                                <p>Mon - Fri: 08:00 - 22:00
                                    <br /> Sat - Sun: 10:00 - 23:00</p>

                            </div>
                        </div>
                    </div>
                </div>




                <div className='my-11'>
                    <SharedTitle

                        title={'Send Us a Message'}
                        subTitle={'CONTACT FORM'}
                    />
                </div>






            </div>

        </>
    );
};

export default ContactUs;