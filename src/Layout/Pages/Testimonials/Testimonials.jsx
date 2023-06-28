import SharedTitle from "../../../Components/SharedTitle";
import { Navigation } from "swiper";
import '@smastrom/react-rating/style.css'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";

const Testimonials = () => {

    const [review, setReview] = useState([]);

    useEffect(() => {
        fetch('https://bistro-server-mahbubaly.vercel.app/review')
            .then(res => res.json())

            .then(data => {
                setReview(data)
            })
    }, [])

    return (
        <>
            <div className="mx-auto container">
                <section>
                    <SharedTitle
                        title={"What Our Clients Say"}
                        subTitle={'TESTIMONIALS'}




                    />
                </section>


                <div className="my-12">
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                        {
                            review.map(reviewItem => <SwiperSlide
                                key={reviewItem._id}
                            >
                                <div className="m-24 text-center mx-auto flex flex-col items-center space-y-3 px-10">
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={reviewItem.rating}
                                        readOnly
                                    />
                                    <p>{reviewItem.details}</p>
                                    <h3 className="text-2xl text-orange-400">{reviewItem.name}</h3>
                                </div>




                            </SwiperSlide>)
                        }

                    </Swiper>
                </div>


            </div>

        </>
    );
};

export default Testimonials;