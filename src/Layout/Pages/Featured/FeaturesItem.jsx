import React from 'react';

const FeaturesItem = ({ item }) => {
    const { image, name, price, recipe } = item;

    return (
        <>


            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions">
                        <h3 className='font-semibold'>Price: <span className='text-yellow-500 ml-2'>${price}</span></h3>
                    </div>

                    <button className='btn btn-outline hover:bg-yellow-600 hover:border-yellow-600 border-0 border-b-4  my-2 border-yellow-600'>Add card</button>
                </div>
            </div>



        </>
    );
};

export default FeaturesItem;