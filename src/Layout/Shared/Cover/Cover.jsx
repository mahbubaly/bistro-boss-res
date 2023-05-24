import React from 'react';

const Cover = ({img, title,des}) => {
    return (
        <>
            <div className="hero lg:h-[700px]" style={{ backgroundImage: `url(${img})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="bg-black bg-opacity-30 p-[100px] lg:w-[920px]">
                        <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                        <p className="mb-5">{des}</p>
                        
                    </div>
                </div>
            </div>


        </>
    );
};

export default Cover;