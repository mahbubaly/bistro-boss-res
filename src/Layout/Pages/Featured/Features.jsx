import React, { useEffect, useState } from 'react';
import SharedTitle from '../../../Components/SharedTitle';
import FeaturesItem from './FeaturesItem';
import useMenu from './../../../hooks/useMenu';

const Features = () => {
    // const [menu, setMenu] = useState([]);

    // useEffect(() => {
    //     fetch("Menu.json")
    //         .then((res) => res.json())
    //         .then((data) => {
    //             const filterData = data.filter(item => item.category === 'popular');
    //             setMenu(filterData);

    //         });
    // }, []);

    const [menu] = useMenu();
    console.log(menu);
    const popular = menu.filter(item => item.category === 'popular');

    return (
        <>
            <div className='my-11'>
                <SharedTitle
                    title={"Should Try"}
                    subTitle={'CHEF RECOMMENDS'}
                />


                <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 '>
                    {
                        popular.map(item => <FeaturesItem
                            key={item._id}
                            item={item}

                        />)
                    }
                </div>


                
            </div>

        </>
    );
};

export default Features;