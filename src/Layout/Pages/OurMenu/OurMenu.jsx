import React from 'react';
import SharedTitle from '../../../Components/SharedTitle';
import img from '../../../assets/home/featured.jpg'
import '../OurMenu/OurMenu.css'

const OurMenu = () => {
    return (
        <>
            <div className='bg_Open_menu bg-fixed container mx-auto text-white pt-8 my-20'>
                <section>
                    <SharedTitle
                        title={"Check it out"}
                        subTitle={"FROM OUR MENU"}
                    />


                </section>


                <div className='md:flex gap-5 justify-center items-center bg-slate-500 bg-opacity-60 lg:pb-20 lg:pt-12 lg:px-36 pb-5 pt-8 px-12'>
                    <img className='lg:w-[600px]' src={img} alt="" />
                    <div className='md:ml-8 space-y-2 '>
                        <h1 className='text-xl mt-2'>March 20, 2029</h1>
                        <h2>WHERE CAN I GET SOME?</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, accusantium ducimus! Facere enim reprehenderit quasi itaque adipisci commodi nisi voluptatibus repellat incidunt, illum consequatur similique! Quod delectus porro eveniet, ipsa minima soluta officia similique nemo pariatur illum facilis repellendus necessitatibus deleniti quisquam! Blanditiis quas vero sit, minus mollitia nisi? Exercitationem.</p>
                        <div className='md:block flex justify-center'>
                            <button className='text-xl text-white btn btn-outline mt-4 border-yellow-600 hover:bg-yellow-600 hover:border-yellow-600  border-0 border-b-4 uppercase'>Order now</button>
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
};

export default OurMenu;