import React from 'react';

const Cover = ({img}) => {
    return (
        <>
            <div className="hero lg:h-[700px]" style={{ backgroundImage: `url(${img})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="bg-black bg-opacity-30 p-[100px]">
                        <h1 className="mb-5 text-5xl font-bold">Our Menu</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. <br /> In deleniti eaque aut repudiandae et a id nisi.</p>
                        
                    </div>
                </div>
            </div>


        </>
    );
};

export default Cover;