
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import '../Catagory/cateStyle.css';

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SharedTitle from "../../../Components/SharedTitle";


const Category = () => {
    return (
        <>


            <div>
                <SharedTitle
                    title={'From 11:00am to 10:00pm'}
                    subTitle={'ORDER ONLINE'}

                />
            </div>




            <div className="my-20">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={slide1} alt="" />
                        <h1 className="md:text-3xl text-xl uppercase text-center -mt-16 text-white">Salads</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide2} alt="" />
                        <h1 className="md:text-3xl text-xl uppercase text-center -mt-16 text-white">Pizza</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide3} alt="" />
                        <h1 className="md:text-3xl text-xl uppercase text-center -mt-16 text-white">Soup</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide4} alt="" />
                        <h1 className="md:text-3xl text-xl uppercase text-center -mt-16 text-white">desserts</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide5} alt="" />
                        <h1 className="md:text-3xl text-xl uppercase text-center -mt-16 text-white">italian salad</h1>
                    </SwiperSlide>
                

                </Swiper>

            </div>


            <div className="bg_img lg:p-28 p-8 my-4">
                <div className="text-center md:w-[762px] mx-auto md:p-[96px] p-10 space-y-3 bg-white mb-11 ">
                    <h1 className="uppercase md:text-3xl text-xl font-semibold">Bistro Boss</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor  officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                </div>
            </div>

        </>
    );
};

export default Category;