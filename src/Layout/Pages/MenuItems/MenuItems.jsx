import React from 'react';

const MenuItems = ({ MenuItem }) => {
    const { image, name, price, recipe } = MenuItem;
    return (
        <div className='flex space-x-4 p-5 justify-center items-center shadow-lg rounded-lg hover:shadow-2xl'>

            <img className='w-[50px] h-[50px]' style={{borderRadius: '0 200px 200px 200px'}} src={image} alt={name} />
            <div>
                <h3 className='uppercase text-xl my-1 font-semibold'>{name}</h3>
                <p>{recipe}</p>
            </div>
            <h3 className='text-yellow-600'>${price}</h3>

        </div>
    );
};

export default MenuItems;