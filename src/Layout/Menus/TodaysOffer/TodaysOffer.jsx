import React from 'react';
import SharedTitle from '../../../Components/SharedTitle';
import useMenu from '../../../hooks/useMenu';
import MenuItems from '../../Pages/MenuItems/MenuItems';
import Cover from '../../Shared/Cover/Cover';
import img from '../../../assets/menu/dessert-bg.jpeg'
import img2 from '../../../assets/menu/pizza-bg.jpg'
import img3 from '../../../assets/menu/salad-bg.jpg'
import img4 from '../../../assets/menu/soup-bg.jpg'

const TodaysOffer = () => {
    const [menu] = useMenu();
    const todaysOffered = menu.filter(item => item.category === 'offered');
    const Pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    const dessert = menu.filter(item => item.category === 'dessert');
    const salad = menu.filter(item => item.category === 'salad');
    // const sliceDesert = dessert.slice(0, 6);
    // const slicePizza = dessert.slice(0, 6);
    return (
        <>
            <div>
                <div className='my-12'>
                    <SharedTitle
                        title={"Don't miss"}
                        subTitle={"TODAY'S OFFER"}


                    />
                </div>


                <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 p-12'>
                    {
                        todaysOffered.map(MenuItem => <MenuItems
                            key={MenuItem._id}
                            MenuItem={MenuItem}


                        />)

                    }
                </div>
            </div>

            {/* //Dessert: Section: */}
            <div className='my-24'>


                <Cover
                    img={img}
                    title={"DESSERT"}
                    des={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}




                />






                <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 my-14 p-12'>
                    {
                        dessert.map(MenuItem => <MenuItems
                            key={MenuItem._id}
                            MenuItem={MenuItem}


                        />)

                    }


                </div>
                <div className='flex justify-center'>
                    <button className='btn btn-outline hover:bg-yellow-600 hover:border-yellow-600 border-0 border-b-4  my-2 border-yellow-600'>ORDER YOUR FAVOURITE FOOD</button>
                </div>

            </div>


            {/* //Pizza: Section: */}
            <div className='my-24'>


                <Cover
                    img={img2}
                    title={"PIZZA"}
                    des={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}




                />






                <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 my-14 p-12'>
                    {
                        Pizza.map(MenuItem => <MenuItems
                            key={MenuItem._id}
                            MenuItem={MenuItem}


                        />)

                    }


                </div>
                <div className='flex justify-center'>
                    <button className='btn btn-outline hover:bg-yellow-600 hover:border-yellow-600 border-0 border-b-4  my-2 border-yellow-600'>ORDER YOUR FAVOURITE FOOD</button>
                </div>

            </div>


            {/* salad */}
            <div className='my-24'>


                <Cover
                    img={img3}
                    title={"SALAD"}
                    des={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}




                />






                <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 my-14 p-12'>
                    {
                        salad.map(MenuItem => <MenuItems
                            key={MenuItem._id}
                            MenuItem={MenuItem}


                        />)

                    }


                </div>
                <div className='flex justify-center'>
                    <button className='btn btn-outline hover:bg-yellow-600 hover:border-yellow-600 border-0 border-b-4  my-2 border-yellow-600'>ORDER YOUR FAVOURITE FOOD</button>
                </div>

            </div>

            {/* Soup */}
            <div className='my-24'>


                <Cover
                    img={img4}
                    title={"SOUPS"}
                    des={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}




                />






                <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 my-14 p-12'>
                    {
                        soup.map(MenuItem => <MenuItems
                            key={MenuItem._id}
                            MenuItem={MenuItem}


                        />)

                    }


                </div>
                <div className='flex justify-center'>
                    <button className='btn btn-outline hover:bg-yellow-600 hover:border-yellow-600 border-0 border-b-4  my-2 border-yellow-600'>ORDER YOUR FAVOURITE FOOD</button>
                </div>

            </div>






        </>
    );
};

export default TodaysOffer;